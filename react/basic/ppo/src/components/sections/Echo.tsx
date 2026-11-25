'use client'
import { useState } from 'react'
import { ECHO } from '@/lib/data'
import { Img } from '@/components/common/Img'
import { Chevron } from '@/components/common/Chevron'
import { SectionTitle } from '@/components/common/SectionTitle'

const pad = (n: number) => String(n).padStart(2, '0')

// 공식 사이트 「정보」 카드 넘기기 패턴: 왼쪽 설명, 오른쪽 카드 줄. 현재 카드가 맨 앞에 넓게 오고 나머지가 뒤를 이음.
export function Echo() {
  const [i, setI] = useState(0)
  const n = ECHO.length
  const go = (d: number) => setI((i + d + n) % n) // 끝에서 처음으로 이어짐
  const t = ECHO[i]
  return (
    <section id="echo" className="sec echo">
      <div className="echo__grid" data-reveal>
        <div className="echo__text">
          <SectionTitle en="ECHO" kr="에코 시스템" />
          <div className="echo__info" key={t.en} aria-live="polite">
            <p className="echo__en">{t.en}</p>
            <h3 className="echo__name">{t.name}</h3>
            <p className="echo__desc">{t.desc}</p>
          </div>
          <div className="lore__nav">
            <button type="button" onClick={() => go(-1)} aria-label="이전">
              <Chevron dir="left" />
            </button>
            <span>
              <sup>{pad(i + 1)}</sup> / {pad(n)}
            </span>
            <button type="button" onClick={() => go(1)} aria-label="다음">
              <Chevron dir="right" />
            </button>
          </div>
        </div>
        <ul className="echo__cards">
          {ECHO.map((c, k) => (
            // 순서만 돌려서(현재 카드가 0번) 넘길 때 카드가 이어서 밀려오게 함
            <li key={c.en} className={k === i ? 'is-on' : ''} style={{ order: (k - i + n) % n }}>
              <button type="button" onClick={() => setI(k)} aria-label={c.name} aria-pressed={k === i}>
                <Img src={c.img} alt="" className="echo__card-img" sizes="(max-width: 768px) 60vw, 30vw" />
                <span className="echo__card-label">{c.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
