// 상태 없는 공통 부품. 서버·클라이언트 컴포넌트 어디서든 쓸 수 있음.
import Image from 'next/image'

// 크기는 감싸는 div(className)가 정하고, 이미지는 그 안을 채움. next/image 가 WebP/AVIF·반응형으로 변환.
export function Img({ src, alt = '', className = '', sizes = '100vw', fit = 'cover', pos, priority }) {
  return (
    <div className={`img ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: fit, objectPosition: pos }} />
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
