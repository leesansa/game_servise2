'use client'
import { useState } from 'react'
import { RESONATORS } from '../../utils/data.js'
import { Img } from '../common/Img.jsx'
import { SectionTitle } from '../common/SectionTitle.jsx'

export function Resonator() {
  const [i, setI] = useState(0)
  const r = RESONATORS[i]
  return (
    <section id="resonator" className="sec reso">
      <p className="outline reso__bg-text" aria-hidden="true">
        RESONATOR
      </p>
      <SectionTitle en="RESONATOR" kr="공명자" />
      <div className="reso__body">
        <ul className="reso__list" role="tablist" aria-label="공명자 선택">
          {RESONATORS.map((c, n) => (
            <li key={c.en}>
              <button
                type="button"
                role="tab"
                aria-selected={n === i}
                className={n === i ? 'is-on' : ''}
                onClick={() => setI(n)}
              >
                <Img src={c.img} alt={c.name} className="reso__thumb" sizes="180px" />
              </button>
            </li>
          ))}
        </ul>
        <div className="reso__art" key={r.en}>
          <Img src={r.img} alt={`${r.name} 일러스트`} fit="contain" sizes="(max-width: 768px) 100vw, 45vw" />
        </div>
        <div className="reso__info" key={`${r.en}-info`}>
          <p className="reso__en">{r.en}</p>
          <h3 className="reso__name">
            <span>[</span> {r.name} <span>]</span>
          </h3>
          <p className="reso__stars" aria-label={`${r.rarity}성`}>
            {'★'.repeat(r.rarity)}
          </p>
          <dl className="reso__spec">
            <div>
              <dt>속성</dt>
              <dd>{r.attr}</dd>
            </div>
            <div>
              <dt>무기</dt>
              <dd>{r.weapon}</dd>
            </div>
          </dl>
          <p className="reso__desc">{r.desc}</p>
        </div>
      </div>
      <div className="reso__band" aria-hidden="true" />
    </section>
  )
}
