import { useEffect, useState } from 'react'
import { SECTIONS } from './data.js'
import { GlitchFilter, Loader } from './ui.jsx'
import { Calendar, Echo, Gameplay, Home, Information, Lore, Notice, Resonator } from './sections.jsx'
import './App.css'

function useActiveSection() {
  const [active, setActive] = useState(SECTIONS[0].id)
  useEffect(() => {
    // 화면 세로 가운데 줄에 걸린 섹션을 활성으로
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          setActive(e.target.id)
          history.replaceState(null, '', `#${e.target.id}`)
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return active
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      },
      { threshold: 0.15 },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Sidebar({ active }) {
  const idx = SECTIONS.findIndex((s) => s.id === active)
  return (
    <header className="side">
      <a href="#home" className="side__logo" aria-label="명조 홈">
        명<br />조
      </a>
      <nav aria-label="섹션">
        <ul className="side__nav">
          {SECTIONS.map((s, n) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={s.id === active ? 'is-on' : ''}
                aria-current={s.id === active ? 'true' : undefined}
              >
                <span className="side__num">{String(n + 1).padStart(2, '0')}</span>
                <span className="side__label">
                  {s.en}
                  <small>{s.kr}</small>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="side__progress" aria-hidden="true">
        <span style={{ height: `${((idx + 1) / SECTIONS.length) * 100}%` }} />
      </div>
      <p className="side__badge" aria-hidden="true">
        SOLARIS-3
      </p>
    </header>
  )
}

export default function App() {
  const active = useActiveSection()
  useReveal()
  return (
    <>
      <Loader />
      <GlitchFilter />
      <Sidebar active={active} />
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
