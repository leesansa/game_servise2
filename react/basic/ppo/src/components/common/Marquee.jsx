
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
