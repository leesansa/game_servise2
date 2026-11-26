'use client'
import { useState } from 'react'
import type { Place, Region } from '@/types'
import { Img } from '@/components/common/Img'
import { PagerNav } from '@/components/common/PagerNav'
import { SectionTitle } from '@/components/common/SectionTitle'
import { useCycle } from '@/hooks/useCycle'
import { pad } from '@/lib/format'

export function Lore({ regions }: { regions: Region[] }) {
  const [i, go] = useCycle(regions.length)
  const r = regions[i]
  return (
    <section id="lore" className="sec lore is-dark">
      <SectionTitle en="LORE" kr="세계관 소개" dark />
      <div className="lore__body">
        <div className="lore__visual">
          <span className="ring ring--1" aria-hidden="true" />
          <span className="ring ring--2" aria-hidden="true" />
          <span className="ring ring--3" aria-hidden="true" />
          <Img key={r.en} src={r.img} alt={`${r.name} 풍경`} className="lore__img" sizes="(max-width: 768px) 100vw, 40vw" />
        </div>
        {/* key 가 바뀌면 안의 장소 선택도 처음으로 돌아감 */}
        <div className="lore__info" key={`${r.en}-i`}>
          <p className="lore__en glow">{r.en}</p>
          <p className="lore__sub">WUTHERING WAVES</p>
          <PagerNav go={go} label what="지역">
            <span>
              <sup>{pad(i + 1)}</sup> {r.name}
            </span>
          </PagerNav>
          <p className="lore__desc">{r.desc}</p>
          {r.places.length > 0 && <Places places={r.places} />}
        </div>
      </div>
    </section>
  )
}

// 세부 장소: 이름 버튼을 누르면 아래에 그 장소 설명
function Places({ places }: { places: Place[] }) {
  const [p, setP] = useState(0)
  const place = places[p]
  return (
    <div className="lore__places">
      <p className="lore__places-title">
        주요 지역 <small>{places.length}</small>
      </p>
      <ul role="tablist" aria-label="주요 지역">
        {places.map((x, n) => (
          <li key={x.en}>
            <button type="button" role="tab" aria-selected={n === p} className={n === p ? 'is-on' : ''} onClick={() => setP(n)}>
              {x.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="lore__place" key={place.en} role="tabpanel">
        <p className="lore__place-en">{place.en}</p>
        <p>{place.desc}</p>
      </div>
    </div>
  )
}
