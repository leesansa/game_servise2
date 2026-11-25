// 화면에 쓰는 데이터 모양. 데이터(lib/data.ts)와 컴포넌트가 같은 타입을 공유.

// 사이드바 메뉴 = 섹션 하나
export type Section = { id: string; en: string; kr: string }

// 공명자 한 명 (공식 사이트 기준: 속성 · 소개 · 이미지, 무기는 공식 데이터에 없음)
export type Resonator = {
  en: string
  name: string
  attr: string // 응결 · 기류 · 용융 · 인멸 · 회절 · 전도
  rarity: number
  desc: string
  img: string // 전신 일러스트
  thumb: string // 목록용 작은 이미지
}

// 공명자 진영 (공식 분류: 황룡, 검은 해안, 라군나 …)
export type Faction = { id: string; en: string; name: string; icon: string; roles: Resonator[] }

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

// 세계관 용어 카드 (공식 사이트 「정보」)
export type Term = { en: string; name: string; img: string; desc: string }

export type Notice = { tag: string; title: string; date: string }
