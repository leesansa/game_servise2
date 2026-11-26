'use client'
import { Img } from '@/components/common/Img'
import { PagerNav } from '@/components/common/PagerNav'
import { useCycle } from '@/hooks/useCycle'
import { pad } from '@/lib/format'
import type { Slide } from '@/types'

// 이미지 + 세로 라벨 + 캡션 + 좌우 화살표. reverse 면 좌우 반전(엔드필드 gameplay/aic 패턴).
export function Slider({ items, label, reverse }: { items: Slide[]; label: string; reverse?: boolean }) {
  const [i, go] = useCycle(items.length)
  const item = items[i]
  return (
    <div className={`slider${reverse ? ' is-reverse' : ''}`} data-reveal>
      <div className="slider__stage cut">
        <Img key={i} src={item.img} alt={item.title} className="slider__img" sizes="(max-width: 768px) 100vw, 70vw" />
        <p className="slider__label" aria-hidden="true">
          {label}
        </p>
      </div>
      <div className="slider__foot">
        <PagerNav go={go}>
          <span className="slider__count">
            {pad(i + 1)} / {pad(items.length)}
          </span>
        </PagerNav>
        <div className="slider__text" key={i} aria-live="polite">
          <h3>
            <sup>{pad(i + 1)}</sup> {item.title}
          </h3>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  )
}
