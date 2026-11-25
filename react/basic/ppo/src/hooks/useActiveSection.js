import { useEffect, useState } from 'react'
import { SECTIONS } from '../utils/data.js'

// 화면 세로 가운데 줄에 걸린 섹션을 활성으로
export function useActiveSection() {
  const [active, setActive] = useState(SECTIONS[0].id)
  useEffect(() => {
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
