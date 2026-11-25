import type { Metadata } from 'next'
import { Archivo, Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google'
// 순서 중요: 토큰 → 리셋 → 기본값 → 공통 → 영역별 → 모바일(마지막에 덮어씀)
import '@/styles/variables.css'
import '@/styles/reset.css'
import './globals.css'
import '@/styles/common.css'
import '@/styles/loader.css'
import '@/styles/sidebar.css'
import '@/styles/sections.css'
import '@/styles/responsive.css'

// 빌드할 때 받아서 자체 호스팅함. wdth 축으로 font-stretch: 125% 사용.
const archivo = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-en' })
// 한글 폰트는 용량이 커서 preload 하지 않음
const noto = Noto_Sans_KR({ weight: ['400', '500', '700', '900'], preload: false, variable: '--font-kr' })
// 명조 사이트의 동양풍 제목 느낌을 내는 명조체
const serif = Noto_Serif_KR({ weight: ['500', '700', '900'], preload: false, variable: '--font-serif' })

export const metadata: Metadata = {
  title: '명조: 워더링 웨이브 — 포트폴리오',
  description: '엔드필드 스타일로 만든 명조: 워더링 웨이브 비공식 포트폴리오 페이지',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko" className={`${archivo.variable} ${noto.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
