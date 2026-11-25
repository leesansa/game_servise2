// 서버 컴포넌트. 'use client' 가 붙은 컴포넌트만 브라우저에서 hydrate 됨.
import { Calendar } from '@/components/sections/Calendar'
import { Echo } from '@/components/sections/Echo'
import { Gameplay } from '@/components/sections/Gameplay'
import { Home } from '@/components/sections/Home'
import { Information } from '@/components/sections/Information'
import { Lore } from '@/components/sections/Lore'
import { Notice } from '@/components/sections/Notice'
import { Resonator } from '@/components/sections/Resonator'

const Page = () => {
  return (
    <main className="page">
      <Home />
      <Resonator />
      <Lore />
      <Calendar />
      <Gameplay />
      <Echo />
      <Notice />
      <Information />
    </main>
  )
}
export default Page
