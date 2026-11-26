'use client'
// DB 조회가 실패해도 사이드바·로더(layout)는 남기고 이 부분만 안내로 바꿈
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="page">
      <section className="sec is-dark error">
        <p>데이터를 불러오지 못했습니다.</p>
        <button type="button" className="btn cut" onClick={reset}>
          다시 시도
        </button>
      </section>
    </main>
  )
}
