import type { Notice as NoticeItem } from '@/types'
import { SectionTitle } from '@/components/common/SectionTitle'

export function Notice({ notices }: { notices: NoticeItem[] }) {
  return (
    <section id="notice" className="sec notice is-dark">
      <SectionTitle en="NOTICE" kr="공지" dark />
      <ul className="notice__list">
        {notices.map((x, n) => (
          <li key={n} data-reveal style={{ transitionDelay: `${n * 70}ms` }}>
            <a href="#notice">
              <em>{x.tag}</em>
              <span className="notice__title">{x.title}</span>
              <time>{x.date}</time>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
