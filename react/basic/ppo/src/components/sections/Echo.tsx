'use client'
import type { Term } from '@/types'
import { Img } from '@/components/common/Img'
import { PagerNav } from '@/components/common/PagerNav'
import { SectionTitle } from '@/components/common/SectionTitle'
import { useCycle } from '@/hooks/useCycle'
import { pad } from '@/lib/format'

// 공식 사이트 「정보」 카드 넘기기 패턴: 왼쪽 설명, 오른쪽 카드 줄. 현재 카드가 맨 앞에 넓게 오고 나머지가 뒤를 이음.
export function Echo({ terms }: { terms: Term[] }) {
  const n = terms.length
  const [i, go, setI] = useCycle(n)
  const t = terms[i]
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
          <PagerNav className="lore__nav" go={go}>
            <span>
              <sup>{pad(i + 1)}</sup> / {pad(n)}
            </span>
          </PagerNav>
        </div>
        <ul className="echo__cards">
          {terms.map((c, k) => (
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
