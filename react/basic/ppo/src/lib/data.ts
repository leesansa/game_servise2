// 페이지 데이터. 이미지는 public/images/ (명조 공식 사이트 에셋, 포트폴리오 전용).
// shortcut: 공지는 정적 샘플, 일정은 subgamecals.com 기준 수동 입력, 서버 API가 생기면 schema.sql 의 news 테이블로 교체.
import type { Calendar, Info, Notice, Region, Section, Slide, Term } from '@/types'

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

// 3.7 시작 주(9/28) ~ 3.8 종료 (13주). 이전 버전은 막대가 짧아져 안 보여 줌. 출처: subgamecals.com 명조 일정·배너
// 픽업 배너: 네이버 라운지 공식 「캐릭터 이벤트 튜닝」 공지 (12/03 은 3.8 소개 이미지로 확인한 2차 튜닝 「깃털에 실은 만물의 소리」 배너)
// 이어지는 일정은 교체일이 겹쳐도 됨: 막대는 end 전날까지 그려짐
export const CALENDAR: Calendar = {
  from: '2026-09-28',
  to: '2026-12-27',
  lanes: [
    {
      label: '업데이트',
      items: [
        { title: '3.7 『거울에 잠긴 허상, 마음이 비추는 인간 세상』', start: '2026-09-30', end: '2026-11-12', img: '/images/ver-3.7.webp' },
        { title: '3.8 『아득한 꿈속, 잔잔히 스러진 백합』', start: '2026-11-12', end: '2026-12-24', img: '/images/ver-3.8.webp' },
      ],
    },
    {
      label: '픽업',
      items: [
        { title: '여우의 별자리 · 유노 · 치사', start: '2026-09-30', end: '2026-10-22', img: '/images/tuning-0930.webp', pos: '72% 25%' },
        { title: '쇄명 · 린네 · 루실라', start: '2026-10-22', end: '2026-11-11', img: '/images/tuning-1022.webp', pos: '55% 30%' },
        { title: '릴리 · 시그리카 · 구원', start: '2026-11-12', end: '2026-12-03', img: '/images/tuning-1112.webp', pos: '63% 55%' },
        { title: '양양·현령 · 수수 · 히유키', start: '2026-12-03', end: '2026-12-23', img: '/images/tuning-1203.webp', pos: '62% 35%' },
      ],
    },
    {
      // 3.8 버전 게임 내 이벤트. 출처: 네이버 라운지 공식 공지 (기간: 업데이트 내용 안내, 이미지: 개별 이벤트 공지 · 「버전 업데이트 소개」 이미지에서 잘라 씀)
      label: '이벤트',
      items: [
        { title: '세컨드 솔라리스: 이름 없는 꿈', start: '2026-11-12', end: '2026-12-21', img: '/images/event-1112-second-solaris.webp' },
        { title: '옛 꿈의 선물 · 7일 출석', start: '2026-11-12', end: '2026-12-21', img: '/images/event-1112-oldgift.webp' },
        { title: '라하이 로이 퍼즐 · 역전', start: '2026-11-19', end: '2026-12-03', img: '/images/event-1119-puzzle.webp' },
        { title: '울림의 영역 2배', start: '2026-11-26', end: '2026-12-03', img: '/images/event-1126-double.webp' },
        { title: '무무 기획 · 정비', start: '2026-12-03', end: '2026-12-17', img: '/images/event-1203-mumu.webp', pos: '20% 50%' },
        { title: '꿈의 들판, 기이함을 찾아서', start: '2026-12-03', end: '2026-12-21', img: '/images/event-1203-dream.webp', pos: 'center' },
        { title: '바람이 향하는 곳 · 출석', start: '2026-12-07', end: '2026-12-21', img: '/images/event-1207-wind.webp', pos: '45% 20%' },
      ],
    },
    {
      label: '특별 방송',
      items: [
        { title: '3.8 프리뷰 특별 방송', start: '2026-11-06', end: '2026-11-06' },
      ],
    },
    {
      label: '콜라보·행사',
      items: [
        { title: '명조 X 롯데시네마', start: '2026-10-19', end: '2026-11-01', img: '/images/collab-1019.webp' },
      ],
    },
  ],
}

export const GAMEPLAY: Slide[] = [
  { img: '/images/play-1.webp', title: '자유 탐색', desc: '벽 타기, 활공, 그래플로 솔라리스-3의 지형을 막힘없이 누빈다.' },
  { img: '/images/play-2.webp', title: '액션 전투', desc: '퍼펙트 회피와 반격, 변주·협주 스킬 연계로 이어지는 빠른 전투.' },
  { img: '/images/play-3.webp', title: '잔상 토벌', desc: '필드를 배회하는 강력한 잔상과 맞서고 보상을 획득한다.' },
]

// 에코 시스템: 공식 사이트 「정보」의 세계관 용어 중 에코와 이어지는 것들 (무음구역에서 잔상이 태어나고 → 처치하면 에코 → 최상위 잔상 명식)
export const ECHO: Term[] = [
  {
    en: 'TACET FIELD',
    name: '무음구역',
    img: '/images/echo/tacet-field.webp',
    desc: '현재 학계에서는 「무음구역」이 잔상이 탄생하는 곳이라고 생각하며, 무음구역이 형성될 때는 하늘을 뒤덮은 거꾸로 된 바다가 보이는 현상과 땅을 깊숙이 가르는 십자형 성흔 현상이 동반되는 경우가 많다. 무음구역에서는 수많은 잔향이 계속해서 반사, 교차, 중첩되고, 강렬한 흰빛이 현실과 그 반대편의 미지의 공간을 연결하며, 그 결과 무수한 잔상이 무음구역에 소환된다.',
  },
  {
    en: 'TACET DISCORD',
    name: '잔상',
    img: '/images/echo/tacet-discord.webp',
    desc: '비명 이후에 탄생해 인류의 적이 된 미증유의 존재들. 혼란스러운 주파수 에너지로 구성된 유사 생명체로서 특수 구조인 「성핵」을 가지고 있다. 잔상의 본능은 다른 주파수를 흡수 병합함으로써 자신의 안정성을 유지하고, 심지어는 진화하려는 것으로 사냥과 포식에 집착하는 행동 패턴을 보인다. 그들의 능력, 외형, 행동은 주파수 구성의 차이로 인해 달라지며, 형태가 매우 다양하긴 하지만 대부분은 사람과 비슷한 형태다.',
  },
  {
    en: 'ECHO',
    name: '에코',
    img: '/images/echo/echo.webp',
    desc: '「잔상」의 능력을 반고 단말기로 포착하거나, 이용하거나, 재현할 수 있는 특별한 주파수. 「잔상」을 처치한 후 일정 확률로 상응하는 「잔향」이 남겨진다.「잔향」은 단말기의 데이터 스테이션을 통해 「에코」로 변환되어, 전투에서 이용할 수 있는 힘이 된다.',
  },
  {
    en: 'THRENODIAN',
    name: '명식',
    img: '/images/echo/threnodian.webp',
    desc: '잔상류 중 최상급의 파괴력을 가진 잔상. 인류가 자랑하는 문명과 성숙한 정신을 파괴하려는 욕망을 가지고 있으며, 인류의 절망을 자신의 「식량」으로 삼는다. 「비명」과 함께 태어난 끔찍한 「잔상」들을 동반한다. 만약 문명이 인류의 건강한 의지의 응집이라면, 「명식」은 그 뒤에 숨겨진 어두운 걱정과 은밀한 악의의 응집이다.',
  },
]

export const NOTICES: Notice[] = [
  { tag: '공지', title: '정기 점검 안내 (예시)', date: '2026.11.20' },
  { tag: '이벤트', title: '기간 한정 이벤트 오픈 (예시)', date: '2026.11.18' },
  { tag: '업데이트', title: '신규 버전 업데이트 내역 (예시)', date: '2026.11.13' },
  { tag: '공지', title: '커뮤니티 운영 정책 변경 (예시)', date: '2026.11.06' },
]
