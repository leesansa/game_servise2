import { useEffect, useState } from 'react'

// 이미지 자리. 나중에 <img> 로 바꾸면 됨.
export function Ph({ label, className = '' }) {
  return (
    <div className={`ph ${className}`} role="img" aria-label={`${label} 이미지 자리`}>
      <span>{label}</span>
    </div>
  )
}

export function SectionTitle({ en, kr, dark }) {
  return (
    <div className={`sec-title${dark ? ' is-dark' : ''}`} data-reveal>
      <p className="sec-title__en">
        <i aria-hidden="true" />
        {en}
      </p>
      <h2 className="sec-title__kr">{kr}</h2>
      <span className="sec-title__bar" aria-hidden="true" />
    </div>
  )
}

// 가로로 끝없이 흐르는 띠. 같은 내용을 두 벌 두고 -50% 이동.
export function Marquee({ text }) {
  const row = Array(6).fill(text).join('   //   ')
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <span>{row}&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;</span>
        <span>{row}&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;</span>
      </div>
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
        <Ph key={i} label={`${label} ${String(i + 1).padStart(2, '0')}`} className="slider__img" />
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
      <div className="loader__logo">
        <strong>명조</strong>
        <span>WUTHERING WAVES</span>
      </div>
    </div>
  )
}

// 마우스를 올리면 RGB 가 어긋나는 글리치 필터. .glitch:hover 에서 사용.
export function GlitchFilter() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <filter id="rgb-split">
        <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r" />
        <feOffset in="r" dx="-4" result="r2" />
        <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" result="gb" />
        <feOffset in="gb" dx="4" result="gb2" />
        <feBlend in="r2" in2="gb2" mode="screen" />
      </filter>
    </svg>
  )
}
