// 이전 · 다음 버튼 사이에 현재 위치(children)를 둠. label: 가운데를 큰 제목으로, what: 버튼 이름에 붙일 대상 (예: '지역')
export function PagerNav({ go, label, what = '', children }: { go: (d: number) => void; label?: boolean; what?: string; children: React.ReactNode }) {
  return (
    <div className={`pager${label ? ' pager--label' : ''}`}>
      <button type="button" onClick={() => go(-1)} aria-label={`이전 ${what}`.trim()}>
        <Arrow d="M10 3 5 8l5 5" />
      </button>
      {children}
      <button type="button" onClick={() => go(1)} aria-label={`다음 ${what}`.trim()}>
        <Arrow d="M6 3l5 5-5 5" />
      </button>
    </div>
  )
}

// 글자(‹ ›)는 폰트마다 위치가 달라 원 정중앙에 안 와서 SVG 로 그림
function Arrow({ d }: { d: string }) {
  return (
    <svg className="chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}
