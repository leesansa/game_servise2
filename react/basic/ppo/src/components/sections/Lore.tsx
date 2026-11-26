'use client'
import type { Region } from '@/types'
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
        <div className="lore__info" key={`${r.en}-i`}>
          <p className="lore__en glow">{r.en}</p>
          <p className="lore__sub">WUTHERING WAVES</p>
          <PagerNav go={go} label what="지역">
            <span>
              <sup>{pad(i + 1)}</sup> {r.name}
            </span>
          </PagerNav>
          <p className="lore__desc">{r.desc}</p>
        </div>
      </div>
    </section>
  )
}
