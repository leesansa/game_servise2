// 이전/다음 화살표. 글자(‹ ›)는 폰트마다 위치가 달라 원 안 정중앙에 안 와서 SVG 로 그림.
export function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg className="chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === 'left' ? 'M10 3 5 8l5 5' : 'M6 3l5 5-5 5'} />
    </svg>
  )
}
