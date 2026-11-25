'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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
