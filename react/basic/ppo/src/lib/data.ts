// 페이지 데이터. 이미지는 public/images/ (명조 공식 사이트 에셋, 포트폴리오 전용).
// shortcut: 공지는 정적 샘플, 일정은 subgamecals.com 기준 수동 입력, 서버 API가 생기면 schema.sql 의 news 테이블로 교체.
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

// 3.6 프리뷰 방송 ~ 3.8 종료 (21주). 출처: subgamecals.com 명조 일정·배너
// 픽업 배너: 네이버 라운지 공식 「캐릭터 이벤트 튜닝」 공지 (12/03 은 공지 전이라 3.5 양양·현령 튜닝 배너)
// 이어지는 일정은 교체일이 겹쳐도 됨: 막대는 end 전날까지 그려짐
export const CALENDAR: Calendar = {
  from: '2026-08-03',
  to: '2026-12-27',
  lanes: [
    {
      label: '업데이트',
      items: [
        { title: '3.6 『신기루 속 등불 그림자, 속세에 깃든 검의 결심』', start: '2026-08-20', end: '2026-09-30', img: '/images/ver-3.6.webp' },
        { title: '3.7 『거울에 잠긴 허상, 마음이 비추는 인간 세상』', start: '2026-09-30', end: '2026-11-12', img: '/images/ver-3.7.webp' },
        { title: '3.8 『아득한 꿈속, 잔잔히 스러진 백합』', start: '2026-11-12', end: '2026-12-24', img: '/images/ver-3.8.webp' },
      ],
    },
    {
      label: '픽업',
      items: [
        { title: '청초 · 데니아', start: '2026-08-20', end: '2026-09-10', img: '/images/tuning-0820.webp', pos: '55% 30%' },
        { title: '경연 · 히유키 · 모니에', start: '2026-09-10', end: '2026-09-29', img: '/images/tuning-0910.webp', pos: '58% 30%' },
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
        { title: '3.6 프리뷰 특별 방송', start: '2026-08-07', end: '2026-08-07' },
        { title: '3.7 프리뷰 특별 방송', start: '2026-09-19', end: '2026-09-19' },
        { title: '3.8 프리뷰 특별 방송', start: '2026-11-06', end: '2026-11-06' },
      ],
    },
    {
      label: '콜라보·행사',
      items: [
        { title: '명조 X 도미노피자', start: '2026-08-21', end: '2026-09-17', img: '/images/collab-0821.webp' },
        { title: '월드 투어 「To the New World」', start: '2026-08-29', end: '2026-08-29' },
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
