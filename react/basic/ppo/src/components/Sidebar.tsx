'use client'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useReveal } from '@/hooks/useReveal'
import { SECTIONS } from '@/lib/data'
import { SectionIcon } from '@/components/common/SectionIcon'

export function Sidebar() {
  const active = useActiveSection()
  useReveal()
  const idx = SECTIONS.findIndex((s) => s.id === active)
  return (
    <header className="side">
      <a href="#home" className="side__logo" aria-label="명조 홈">
        명<br />조
      </a>
      <nav aria-label="섹션">
        <ul className="side__nav">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={s.id === active ? 'is-on' : ''}
                aria-current={s.id === active ? 'true' : undefined}
                // 모바일에선 라벨이 숨겨지므로 링크 이름을 직접 줌
                aria-label={s.kr}
              >
                <SectionIcon id={s.id} />
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
