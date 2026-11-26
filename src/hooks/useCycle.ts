import { useState } from 'react'

// 0 ~ n-1 을 앞뒤로 넘김. 끝에서 처음으로 이어짐 (Lore · Echo · Slider 공통)
export function useCycle(n: number) {
  const [i, setI] = useState(0)
  const go = (d: number) => setI((v) => (v + d + n) % n)
  return [i, go, setI] as const
}
