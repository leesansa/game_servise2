// Neon(PostgreSQL) 연결. 배포: Cloudflare Hyperdrive 를 거침 / 로컬: cloudflare.config.ts 의 dev.connectionString
import postgres from 'postgres'
import { env } from 'cloudflare:workers'

// 요청마다 새 클라이언트를 만들고 끝나면 닫음 (연결 재사용은 Hyperdrive 가 담당하므로 이게 권장 방식)
export async function withDb<T>(run: (sql: postgres.Sql) => Promise<T>): Promise<T> {
  const sql = postgres(env.HYPERDRIVE.connectionString, {
    max: 5, // Workers 한 요청의 동시 외부 연결 제한
    fetch_types: false, // 배열 타입을 안 써서 타입 조회 왕복 생략
  })
  try {
    return await run(sql)
  } finally {
    await sql.end()
  }
}
