# ppo — 명조: 워더링 웨이브 포트폴리오 페이지

Next.js (App Router) 로 만든 한 페이지 사이트.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
npm run lint
```

- `src/app/layout.jsx` — html, 폰트(next/font), 메타데이터, 전역 CSS
- `src/app/page.jsx` — 첫 페이지
- `src/client.jsx` — 사이드바·로더·슬라이더·공명자·세계관 (클라이언트 컴포넌트)
- `src/sections.jsx`, `src/ui.jsx` — 정적 섹션과 공통 부품 (서버 컴포넌트)
- `src/data.js` — 모든 텍스트 데이터
- `public/images/` — 명조 공식 사이트에서 받은 이미지 (개인 포트폴리오 전용, 공개 배포 주의). `ui.jsx` 의 `<Img>`(next/image)로 표시.
- 스타일: 배치는 엔드필드식, 겉모습은 명조식 (검정 + 골드 라인, 명조체 제목). 토큰은 `src/app/globals.css`.
