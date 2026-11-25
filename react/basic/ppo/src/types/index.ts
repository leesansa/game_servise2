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

// 날짜는 'YYYY-MM-DD' (한국 시간 기준 날짜). 하루짜리 일정은 start === end
// img : 있으면 배너(이미지 깔린 큰 막대)로 그림, pos : 이미지에서 보여 줄 위치 (기본 'center top')
export type CalendarEvent = { title: string; start: string; end: string; img?: string; pos?: string }
// 가로 한 줄 = 같은 종류 일정 (업데이트, 픽업 …)
export type CalendarLane = { label: string; items: CalendarEvent[] }
export type Calendar = { from: string; to: string; lanes: CalendarLane[] }

// Slider 한 장 (GAMEPLAY, ECHO)
export type Slide = { img: string; title: string; desc: string }

export type Notice = { tag: string; title: string; date: string }
