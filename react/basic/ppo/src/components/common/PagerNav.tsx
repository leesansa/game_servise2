import { Chevron } from '@/components/common/Chevron'

// 이전 · 다음 버튼 사이에 현재 위치(children)를 둠. what: 버튼 이름에 붙일 대상 (예: '지역')
export function PagerNav({ className, go, what = '', children }: { className: string; go: (d: number) => void; what?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <button type="button" onClick={() => go(-1)} aria-label={`이전 ${what}`.trim()}>
        <Chevron dir="left" />
      </button>
      {children}
      <button type="button" onClick={() => go(1)} aria-label={`다음 ${what}`.trim()}>
        <Chevron dir="right" />
      </button>
    </div>
  )
}
