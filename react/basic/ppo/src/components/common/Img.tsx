import Image from 'next/image'

// 크기는 감싸는 div(className)가 정하고, 이미지는 그 안을 채움. next/image 가 WebP/AVIF·반응형으로 변환.
type ImgProps = {
  src: string
  alt?: string
  className?: string
  sizes?: string
  fit?: React.CSSProperties['objectFit']
  pos?: string
  priority?: boolean
}

export function Img({ src, alt = '', className = '', sizes = '100vw', fit = 'cover', pos, priority }: ImgProps) {
  return (
    <div className={`img ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: fit, objectPosition: pos }} />
    </div>
  )
}
