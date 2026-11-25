// 서버 컴포넌트: DB(Neon)에서 읽고, 화면(클라이언트 컴포넌트)에는 props 로 넘김
import { Calendar } from '@/components/sections/Calendar'
import { Echo } from '@/components/sections/Echo'
import { Gameplay } from '@/components/sections/Gameplay'
import { Home } from '@/components/sections/Home'
import { Information } from '@/components/sections/Information'
import { Lore } from '@/components/sections/Lore'
import { Notice } from '@/components/sections/Notice'
import { Resonator } from '@/components/sections/Resonator'
import { getPageData } from '@/lib/db/queries'

// 요청마다 DB 를 읽음 (빌드 시점엔 DB 접근 안 함). 같은 조회는 Hyperdrive 가 60초 캐시
export const dynamic = 'force-dynamic'

const Page = async () => {
  const data = await getPageData()
  return (
    <main className="page">
      <Home />
      <Resonator factions={data.factions} />
      <Lore regions={data.regions} />
      <Calendar calendar={data.calendar} />
      <Gameplay slides={data.gameplay} />
      <Echo terms={data.echo} />
      <Notice notices={data.notices} />
      <Information info={data.info} />
    </main>
  )
}
export default Page
