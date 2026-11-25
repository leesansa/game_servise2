'use client'
import { useState } from 'react'
import type { Region } from '@/types'
import { Img } from '@/components/common/Img'
import { Chevron } from '@/components/common/Chevron'
import { SectionTitle } from '@/components/common/SectionTitle'

export function Lore({ regions }: { regions: Region[] }) {
  const [i, setI] = useState(0)
  const r = regions[i]
  const go = (d: number) => setI((i + d + regions.length) % regions.length)
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
        <div className="lore__info" key={`${r.en}-i`}>
          <p className="lore__en glow">{r.en}</p>
          <p className="lore__sub">WUTHERING WAVES</p>
          <div className="lore__nav">
            <button type="button" onClick={() => go(-1)} aria-label="이전 지역">
              <Chevron dir="left" />
            </button>
            <span>
              <sup>{String(i + 1).padStart(2, '0')}</sup> {r.name}
            </span>
            <button type="button" onClick={() => go(1)} aria-label="다음 지역">
              <Chevron dir="right" />
            </button>
          </div>
          <p className="lore__desc">{r.desc}</p>
        </div>
      </div>
    </section>
  )
}
