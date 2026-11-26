// DB 만들기: schema.sql(테이블) → seed.sql(초기 데이터) 순서로 실행
// 사용: .env 에 DATABASE_URL 을 넣고  npm run db:setup
// 주의: schema.sql 은 기존 테이블을 지우고 다시 만듦 (DB 내용이 초기 데이터로 돌아감)
import { readFileSync } from 'node:fs'
import postgres from 'postgres'

const url = process.env.DATABASE_URL
if (!url) {
  console.error('DATABASE_URL 이 없습니다. .env 에 Neon 연결 문자열을 넣어 주세요.')
  process.exit(1)
}

const sql = postgres(url, { max: 1, onnotice: () => {} })
const run = (file) => sql.unsafe(readFileSync(new URL(file, import.meta.url), 'utf8'))
try {
  await run('./schema.sql')
  await run('./seed.sql')
  const [{ n }] = await sql`select count(*)::int as n from resonators`
  console.log(`완료: 테이블 생성 + 초기 데이터 입력 (공명자 ${n}명)`)
} catch (e) {
  console.error('실패:', e.message)
  process.exitCode = 1
} finally {
  await sql.end()
}
