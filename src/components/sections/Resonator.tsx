'use client'
import Image from 'next/image'
import { useState } from 'react'
import type { Faction } from '@/types'
import { Img } from '@/components/common/Img'
import { SectionTitle } from '@/components/common/SectionTitle'

// 공식 사이트처럼 진영 → 공명자 2단 선택
export function Resonator({ factions }: { factions: Faction[] }) {
  const [f, setF] = useState(0)
  const [i, setI] = useState(0)
  const faction = factions[f]
  const r = faction.roles[i]
  const pickFaction = (n: number) => {
    setF(n)
    setI(0)
  }
  return (
    <section id="resonator" className="sec reso">
      <p className="outline reso__bg-text" aria-hidden="true">
        RESONATOR
      </p>
      <SectionTitle en="RESONATOR" kr="공명자" />

      <ul className="reso__factions" role="tablist" aria-label="진영 선택">
        {factions.map((g, n) => (
          <li key={g.id}>
            <button type="button" role="tab" aria-selected={n === f} className={n === f ? 'is-on' : ''} onClick={() => pickFaction(n)}>
              {g.icon && <Image src={g.icon} alt="" width={36} height={36} className="reso__faction-icon" />}
              <span>
                {g.name}
                <small>{g.en}</small>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="reso__body">
        <ul className="reso__list" role="tablist" aria-label={`${faction.name} 공명자 선택`}>
          {faction.roles.map((c, n) => (
            // 방랑자는 남/여 두 명이라 en 이 같음 → 이미지 경로로 구분
            <li key={c.img}>
              <button type="button" role="tab" aria-selected={n === i} className={n === i ? 'is-on' : ''} onClick={() => setI(n)} title={c.name}>
                <Img src={c.thumb} alt={c.name} className="reso__thumb" sizes="80px" pos="center 8%" />
              </button>
            </li>
          ))}
        </ul>
        <div className="reso__art" key={r.img}>
          <Img src={r.img} alt={`${r.name} 일러스트`} fit="contain" sizes="(max-width: 768px) 100vw, 45vw" />
        </div>
        <div className="reso__info" key={`${r.img}-info`}>
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
              <dt>소속</dt>
              <dd>{faction.name}</dd>
            </div>
          </dl>
          <p className="reso__desc">{r.desc}</p>
        </div>
      </div>
      <div className="reso__band" aria-hidden="true" />
    </section>
  )
}
