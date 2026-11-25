import { INFO } from '../../utils/data.js'
import { SectionTitle } from '../common/SectionTitle.jsx'

export function Information() {
  return (
    <section id="information" className="sec info is-dark">
      <SectionTitle en="INFORMATION" kr="게임 정보" dark />
      <ul className="info__grid">
        {INFO.map((x, n) => (
          <li key={x.k} className="info__card cut" data-reveal style={{ transitionDelay: `${n * 80}ms` }}>
            <p className="info__k">{x.k}</p>
            <p className="info__label">{x.label}</p>
            <p className="info__v">{x.v}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
