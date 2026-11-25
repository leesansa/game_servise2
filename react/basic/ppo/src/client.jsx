'use client'
// 상태나 브라우저 API 가 필요한 부분만 모은 클라이언트 컴포넌트. 나머지는 서버 컴포넌트.
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { REGIONS, RESONATORS, SECTIONS } from './data.js'
import { Img, SectionTitle } from './ui.jsx'

function useActiveSection() {
  const [active, setActive] = useState(SECTIONS[0].id)
  useEffect(() => {
    // 화면 세로 가운데 줄에 걸린 섹션을 활성으로
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          setActive(e.target.id)
          history.replaceState(null, '', `#${e.target.id}`)
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return active
}

// 서버가 그린 [data-reveal] 요소까지 포함해 문서 전체를 관찰
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      },
      { threshold: 0.15 },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export function Sidebar() {
  const active = useActiveSection()
  useReveal()
  const idx = SECTIONS.findIndex((s) => s.id === active)
  return (
    <header className="side">
      <a href="#home" className="side__logo" aria-label="명조 홈">
        명<br />조
      </a>
      <nav aria-label="섹션">
        <ul className="side__nav">
          {SECTIONS.map((s, n) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={s.id === active ? 'is-on' : ''}
                aria-current={s.id === active ? 'true' : undefined}
              >
                <span className="side__num">{String(n + 1).padStart(2, '0')}</span>
                <span className="side__label">
                  {s.en}
                  <small>{s.kr}</small>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="side__progress" aria-hidden="true">
        <span style={{ height: `${((idx + 1) / SECTIONS.length) * 100}%` }} />
      </div>
      <p className="side__badge" aria-hidden="true">
        SOLARIS-3
      </p>
    </header>
  )
}

// 로딩 % 카운터. 폰트가 준비되고 최소 시간이 지나면 100 으로 끝냄.
export function Loader() {
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let raf
    let ready = false
    const t0 = performance.now()
    document.fonts.ready.then(() => (ready = true))
    const tick = (t) => {
      // 준비 전에는 90% 에서 멈춤
      const p = Math.min(ready ? 100 : 90, ((t - t0) / 1400) * 100)
      setPct(Math.floor(p))
      if (p < 100) raf = requestAnimationFrame(tick)
      else setTimeout(() => setDone(true), 350)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  if (done) return null
  return (
    <div className={`loader${pct >= 100 ? ' is-out' : ''}`} role="progressbar" aria-valuenow={pct} aria-label="로딩">
      <span className="loader__bar" style={{ height: `${pct}%` }} />
      <p className="loader__pct">{pct}%</p>
      <Image className="loader__logo" src="/images/logo-kr.png" alt="명조: 워더링 웨이브" width={1339} height={890} priority />
    </div>
  )
}

// 이미지 + 세로 라벨 + 캡션 + 좌우 화살표. reverse 면 좌우 반전(엔드필드 gameplay/aic 패턴).
export function Slider({ items, label, reverse }) {
  const [i, setI] = useState(0)
  const go = (d) => setI((i + d + items.length) % items.length)
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

export function Lore() {
  const [i, setI] = useState(0)
  const r = REGIONS[i]
  const go = (d) => setI((i + d + REGIONS.length) % REGIONS.length)
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
              ‹
            </button>
            <span>
              <sup>{String(i + 1).padStart(2, '0')}</sup> {r.name}
            </span>
            <button type="button" onClick={() => go(1)} aria-label="다음 지역">
              ›
            </button>
          </div>
          <p className="lore__desc">{r.desc}</p>
        </div>
      </div>
    </section>
  )
}
