// 사이드바 섹션 아이콘. 24x24 선 아이콘, 색은 글자색(currentColor)을 따라감.
const PATHS: Record<string, React.ReactNode> = {
  // 홈: 지붕 + 문
  home: (
    <>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  // 공명자: 인물 + 머리 위 마름모(공명 표식)
  resonator: (
    <>
      <circle cx="12" cy="10" r="3.5" />
      <path d="M5 20.5c1.3-3.8 3.9-5.5 7-5.5s5.7 1.7 7 5.5" />
      <path d="m12 1.8 1.4 1.4L12 4.6l-1.4-1.4z" />
    </>
  ),
  // 세계관: 지구본
  lore: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c-2.6 2.4-2.6 14.6 0 17" />
      <path d="M12 3.5c2.6 2.4 2.6 14.6 0 17" />
    </>
  ),
  // 게임 정보: 원 안의 i
  information: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.5" />
      <circle cx="12" cy="7.8" r="0.4" fill="currentColor" />
    </>
  ),
  // 버전 일정: 달력
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14.5" rx="1.5" />
      <path d="M4 10h16" />
      <path d="M8.5 3.5v4M15.5 3.5v4" />
      <path d="m12 12.6 1.4 1.4-1.4 1.4-1.4-1.4z" />
    </>
  ),
  // 콘텐츠 소개: 검 (칼날 · 코등이 · 손잡이)
  gameplay: (
    <>
      <path d="M14.5 17.5 3.5 6.5v-3h3l11 11" />
      <path d="m13 19 6-6" />
      <path d="m16 16 4 4" />
      <path d="m19 21 2-2" />
    </>
  ),
  // 에코: 가운데 점에서 퍼지는 울림
  echo: (
    <>
      <circle cx="12" cy="12" r="1.8" />
      <path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6" />
      <path d="M5.3 5.3a9.5 9.5 0 0 0 0 13.4M18.7 5.3a9.5 9.5 0 0 1 0 13.4" />
    </>
  ),
  // 공지: 확성기
  notice: (
    <>
      <path d="M4 10v4h3l7 4.5v-13L7 10z" />
      <path d="M17.5 9a4 4 0 0 1 0 6" />
      <path d="M7 14l1.5 5h2.5l-1-4.4" />
    </>
  ),
}

export function SectionIcon({ id }: { id: string }) {
  return (
    <svg
      className="side__icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[id]}
    </svg>
  )
}
