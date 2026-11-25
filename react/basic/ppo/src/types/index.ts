// 화면에 쓰는 데이터 모양. 데이터(lib/data.ts)와 컴포넌트가 같은 타입을 공유.

// 사이드바 메뉴 = 섹션 하나
export type Section = { id: string; en: string; kr: string }

export type Resonator = {
  en: string
  img: string
  name: string
  attr: string
  weapon: string
  rarity: number
  desc: string
}

export type Region = { en: string; img: string; name: string; desc: string }

export type Info = { k: string; label: string; v: string }

// start/end : 타임라인 열 번호(0부터)
export type CalendarRow = { tag: string; title: string; start: number; end: number }
export type Calendar = { cols: string[]; rows: CalendarRow[] }

// Slider 한 장 (GAMEPLAY, ECHO)
export type Slide = { img: string; title: string; desc: string }

export type Notice = { tag: string; title: string; date: string }
