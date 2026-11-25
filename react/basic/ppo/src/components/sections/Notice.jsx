import Image from 'next/image'
import { NOTICES } from '../../utils/data.js'
import { SectionTitle } from '../common/SectionTitle.jsx'

export function Notice() {
  return (
    <section id="notice" className="sec notice is-dark">
      <SectionTitle en="NOTICE" kr="공지" dark />
      <ul className="notice__list">
        {NOTICES.map((x, n) => (
          <li key={n} data-reveal style={{ transitionDelay: `${n * 70}ms` }}>
            <a href="#notice">
              <em>{x.tag}</em>
              <span className="notice__title">{x.title}</span>
              <time>{x.date}</time>
            </a>
          </li>
        ))}
      </ul>
      <footer className="foot">
        <Image src="/images/logo-small-kr.png" alt="명조" width={100} height={40} />
        <p>포트폴리오용 비공식 페이지입니다. 「명조: 워더링 웨이브」의 모든 권리는 KURO GAMES에 있습니다.</p>
      </footer>
    </section>
  )
}
