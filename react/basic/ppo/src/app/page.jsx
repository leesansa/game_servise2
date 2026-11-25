// 서버 컴포넌트. 'use client' 가 붙은 컴포넌트만 브라우저에서 hydrate 됨.
import { Loader } from '../components/Loader.jsx'
import { Sidebar } from '../components/Sidebar.jsx'
import { Calendar } from '../components/sections/Calendar.jsx'
import { Echo } from '../components/sections/Echo.jsx'
import { Gameplay } from '../components/sections/Gameplay.jsx'
import { Home } from '../components/sections/Home.jsx'
import { Information } from '../components/sections/Information.jsx'
import { Lore } from '../components/sections/Lore.jsx'
import { Notice } from '../components/sections/Notice.jsx'
import { Resonator } from '../components/sections/Resonator.jsx'

export default function Page() {
  return (
    <>
      <Loader />
      <Sidebar />
      <main className="page">
        <Home />
        <Resonator />
        <Lore />
        <Information />
        <Calendar />
        <Gameplay />
        <Echo />
        <Notice />
      </main>
    </>
  )
}
