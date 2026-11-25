// 화면 구조용 설정 (DB 가 아니라 코드에 둠). 콘텐츠 데이터는 DB → src/lib/db/queries.ts
import type { Section } from '@/types'

export const SECTIONS: Section[] = [
  { id: 'home', en: 'HOME', kr: '홈' },
  { id: 'resonator', en: 'RESONATOR', kr: '공명자' },
  { id: 'lore', en: 'LORE', kr: '세계관' },
  { id: 'calendar', en: 'CALENDAR', kr: '버전 일정' },
  { id: 'gameplay', en: 'GAMEPLAY', kr: '콘텐츠 소개' },
  { id: 'echo', en: 'ECHO', kr: '에코 시스템' },
  { id: 'notice', en: 'NOTICE', kr: '공지' },
  { id: 'information', en: 'INFORMATION', kr: '게임 정보' },
]

export const PLATFORMS = ['Windows', 'App Store', 'Google Play', 'PlayStation 5']
