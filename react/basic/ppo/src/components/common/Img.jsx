import Image from 'next/image'

// 크기는 감싸는 div(className)가 정하고, 이미지는 그 안을 채움. next/image 가 WebP/AVIF·반응형으로 변환.
export function Img({ src, alt = '', className = '', sizes = '100vw', fit = 'cover', pos, priority }) {
  return (
    <div className={`img ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: fit, objectPosition: pos }} />
    </div>
  )
}
