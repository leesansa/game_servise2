'use client'
import { useState } from 'react'
import { Img } from '@/components/common/Img'
import type { Slide } from '@/types'

// 이미지 + 세로 라벨 + 캡션 + 좌우 화살표. reverse 면 좌우 반전(엔드필드 gameplay/aic 패턴).
export function Slider({ items, label, reverse }: { items: Slide[]; label: string; reverse?: boolean }) {
  const [i, setI] = useState(0)
  const go = (d: number) => setI((i + d + items.length) % items.length)
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
        <div className="slider__nav">
          <button type="button" onClick={() => go(-1)} aria-label="이전">
            ‹
          </button>
          <span className="slider__count">
            {String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </span>
          <button type="button" onClick={() => go(1)} aria-label="다음">
            ›
          </button>
        </div>
        <div className="slider__text" key={i} aria-live="polite">
          <h3>
            <sup>{String(i + 1).padStart(2, '0')}</sup> {item.title}
          </h3>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  )
}
