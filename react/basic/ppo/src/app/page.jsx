// 서버 컴포넌트. 상호작용이 필요한 부분(client.jsx)만 브라우저에서 hydrate 됨.
import { Loader, Lore, Resonator, Sidebar } from '../client.jsx'
import { Calendar, Echo, Gameplay, Home, Information, Notice } from '../sections.jsx'

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
