// 페이지 데이터. 이미지는 public/images/ (명조 공식 사이트 에셋, 포트폴리오 전용).
// shortcut: 공지·일정은 정적 샘플, 서버 API가 생기면 schema.sql 의 news 테이블로 교체.
import type { Calendar, Info, Notice, Region, Resonator, Section, Slide } from '@/types'

export const SECTIONS: Section[] = [
  { id: 'home', en: 'HOME', kr: '홈' },
  { id: 'resonator', en: 'RESONATOR', kr: '공명자' },
  { id: 'lore', en: 'LORE', kr: '세계관' },
  { id: 'information', en: 'INFORMATION', kr: '게임 정보' },
  { id: 'calendar', en: 'CALENDAR', kr: '버전 일정' },
  { id: 'gameplay', en: 'GAMEPLAY', kr: '콘텐츠 소개' },
  { id: 'echo', en: 'ECHO', kr: '에코 시스템' },
  { id: 'notice', en: 'NOTICE', kr: '공지' },
]

export const PLATFORMS = ['Windows', 'App Store', 'Google Play', 'PlayStation 5']

export const RESONATORS: Resonator[] = [
  {
    en: 'JINHSI',
    img: '/images/reso-jinhsi.png',
    name: '금희',
    attr: '회절',
    weapon: '대검',
    rarity: 5,
    desc: '금주의 영윤. 세세를 수호하며 금주의 안녕을 책임지는 젊은 지도자. 빛의 힘으로 적을 꿰뚫는다.',
  },
  {
    en: 'CHANGLI',
    img: '/images/reso-changli.png',
    name: '장리',
    attr: '용융',
    weapon: '직검',
    rarity: 5,
    desc: '금주 영윤의 책사. 판 전체를 내다보는 지략가로, 불꽃을 다루는 검술로 전장을 장악한다.',
  },
  {
    en: 'CAMELLYA',
    img: '/images/reso-camellya.png',
    name: '카멜리아',
    attr: '인멸',
    weapon: '직검',
    rarity: 5,
    desc: '흑해안에서 온 정체불명의 공명자. 덩굴과 꽃잎을 휘감은 공격으로 적을 몰아붙인다.',
  },
  {
    en: 'YINLIN',
    img: '/images/reso-yinlin.png',
    name: '음림',
    attr: '전도',
    weapon: '증폭기',
    rarity: 5,
    desc: '꼭두각시 인형을 조종하는 공명자. 번개를 실어 보내는 원거리 연계에 능하다.',
  },
  {
    en: 'XIANGLI YAO',
    img: '/images/reso-xiangliyao.png',
    name: '상리요',
    attr: '전도',
    weapon: '권갑',
    rarity: 5,
    desc: '화서 연구원의 수석 연구원. 기계 팔과 계산된 타격으로 전투를 풀어 나간다.',
  },
  {
    en: 'ZHEZHI',
    img: '/images/reso-zhezhi.png',
    name: '절지',
    attr: '응결',
    weapon: '증폭기',
    rarity: 5,
    desc: '붓끝으로 그린 그림에 생명을 불어넣는 화가. 얼음 같은 필치로 적을 봉한다.',
  },
]

export const REGIONS: Region[] = [
  {
    en: 'JINZHOU',
    img: '/images/lore-jinzhou.jpg',
    name: '금주',
    desc: '황룡 지역의 중심 도시. 세세의 비호 아래 번영한 성채 도시로, 잔상의 위협에 맞서는 최전선이기도 하다.',
  },
  {
    en: 'RINASCITA',
    img: '/images/lore-rinascita.webp',
    name: '리나시타',
    desc: '바다 위에 펼쳐진 축제의 공화국. 화려한 거리 뒤편에는 오래된 신앙과 비밀이 숨어 있다.',
  },
  {
    en: 'BLACK SHORES',
    img: '/images/lore-black-shores.jpg',
    name: '흑해안',
    desc: '시간이 멈춘 듯한 해안. 비명 이후의 세계와 방랑자의 과거를 잇는 수수께끼의 장소.',
  },
]

export const INFO: Info[] = [
  { k: 'GENRE', label: '장르', v: '오픈월드 액션 RPG' },
  { k: 'PLATFORM', label: '플랫폼', v: 'PC · iOS · Android · PS5' },
  { k: 'DEVELOPER', label: '개발', v: 'KURO GAMES' },
  { k: 'LAUNCH', label: '출시', v: '2024.05' },
]

// 예시 일정: start/end 는 타임라인 열 번호(0부터), 실제 날짜 아님
export const CALENDAR: Calendar = {
  cols: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
  rows: [
    { tag: '공명자', title: '이벤트 획득 1부', start: 0, end: 3 },
    { tag: '공명자', title: '이벤트 획득 2부', start: 3, end: 6 },
    { tag: '무기', title: '이벤트 무기 획득', start: 0, end: 6 },
    { tag: '이벤트', title: '기간 한정 탐색 이벤트', start: 1, end: 4 },
    { tag: '이벤트', title: '전투 챌린지', start: 4, end: 6 },
  ],
}

export const GAMEPLAY: Slide[] = [
  { img: '/images/play-1.webp', title: '자유 탐색', desc: '벽 타기, 활공, 그래플로 솔라리스-3의 지형을 막힘없이 누빈다.' },
  { img: '/images/play-2.webp', title: '액션 전투', desc: '퍼펙트 회피와 반격, 변주·협주 스킬 연계로 이어지는 빠른 전투.' },
  { img: '/images/play-3.webp', title: '잔상 토벌', desc: '필드를 배회하는 강력한 잔상과 맞서고 보상을 획득한다.' },
]

export const ECHO: Slide[] = [
  { img: '/images/echo-1.webp', title: '에코 흡수', desc: '쓰러뜨린 잔상을 흡수해 그 힘을 에코로 손에 넣는다.' },
  { img: '/images/echo-2.webp', title: '에코 스킬', desc: '전투 중 에코로 변신하거나 소환해 강력한 스킬을 발동한다.' },
  { img: '/images/echo-3.webp', title: '하모니 세트', desc: '같은 계열 에코를 모아 장착하면 세트 효과가 발동한다.' },
]

export const NOTICES: Notice[] = [
  { tag: '공지', title: '정기 점검 안내 (예시)', date: '2026.11.20' },
  { tag: '이벤트', title: '기간 한정 이벤트 오픈 (예시)', date: '2026.11.18' },
  { tag: '업데이트', title: '신규 버전 업데이트 내역 (예시)', date: '2026.11.13' },
  { tag: '공지', title: '커뮤니티 운영 정책 변경 (예시)', date: '2026.11.06' },
]
