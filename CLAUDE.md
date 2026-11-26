# CLAUDE.md

명조: 워더링 웨이브 팬 포트폴리오 한 페이지 사이트. 저장소 최상단이 곧 프로젝트 폴더다(예전 `react/basic/ppo/` 에서 옮김). 하위 폴더를 새로 감싸지 않는다.

## 소통

- 답변 · 코드 주석 · 커밋 메시지 · 문서는 모두 한국어.
- 사용자는 결과 위주로 짧게 요청한다 ("진행해줘", "커밋 푸쉬"). 요청 범위 안에서는 묻지 말고 끝까지 하고, 하지 않은 것과 확인 못 한 것만 짧게 보고한다.
- 되돌리기 어려운 일(DB 초기화, 실제 배포, 파일 대량 삭제)은 한 번 확인받고 한다.

## 명령 (저장소 최상단에서)

```bash
npm run dev        # vite dev, 포트 3000 (쓰고 있으면 3001…로 바뀌니 로그에서 Local 주소 확인)
npm run lint       # eslint
npx tsc --noEmit -p .
npm run build
npm run db:setup   # ⚠ 모든 테이블을 지우고 schema.sql → seed.sql 로 다시 만듦
npm run deploy     # 수동 배포. 평소엔 main push 로 자동 배포
```

코드를 고치면 lint · tsc · build 를 모두 통과시킨 뒤 끝낸다.

## 구조 규칙 (Next.js App Router, vinext 로 빌드해 Cloudflare Workers 에서 실행)

- `src/app/(main)/page.tsx` (서버 컴포넌트)가 `getPageData()` 로 DB 를 한 번에 읽어 섹션에 props 로 넘긴다. 섹션 컴포넌트에서 직접 DB 를 부르지 않는다.
- 상태가 필요한 컴포넌트만 `'use client'`. 정적 섹션(Home, Notice, Information, Gameplay)은 서버 컴포넌트로 둔다.
- 폴더: `components/sections`(섹션 하나 = 파일 하나), `components/common`(공용 부품), `hooks`, `lib`(설정 · 유틸 · `db/`), `styles`, `types`.
- 이미 있는 것을 먼저 쓴다:
  - 이전/다음 넘기기 → `useCycle` + `PagerNav` (가운데 큰 제목이면 `label`)
  - 두 자리 번호 → `pad()` (`lib/format.ts`)
  - 이미지 → `Img` (`next/image` fill. 크기는 감싸는 className 이, 위치는 `pos`)
  - 섹션 제목 → `SectionTitle`, 등장 효과 → `data-reveal` 속성
- 화면 구조용 값(사이드바 섹션 목록, 플랫폼 이름)은 `lib/data.ts`, 콘텐츠는 DB.
- 타입은 `src/types/index.ts` 한 곳. DB 조회 결과도 이 모양으로 바꿔서 돌려준다(`lib/db/queries.ts`).
- `LayoutProps` 같은 Next 타입 생성 전용 타입은 쓰지 않는다(vinext 는 타입 생성을 안 함). children 타입은 직접 적는다.

## 스타일 규칙

- CSS 는 `src/styles/` 의 전역 CSS 파일들. 순서가 중요해서 `app/layout.tsx` 에서 variables → reset → globals → common → loader → sidebar → sections → responsive 순으로 불러온다.
- 클래스 이름은 BEM 비슷하게 `섹션__요소`, 상태는 `is-on` · `is-dark` · `is-in` 등 `is-` 접두사.
- 여러 섹션이 같이 쓰는 모양은 공용 클래스로(`.pager`, `.cut`, `.img`, `.sec`). 다른 섹션의 클래스를 빌려 쓰지 않는다.
- 색 · 글꼴 · 이징은 `variables.css` 토큰만 쓴다 (골드 `--c-gold`, 배경 `--c-bg` 등). 인라인 스타일은 계산값(`--col`, `transitionDelay`)에만.
- 모바일은 `responsive.css` 의 `@media (max-width: 768px)` 한 곳에 모은다.

## DB (Neon PostgreSQL)

- `db/schema.sql`(테이블) · `db/seed.sql`(데이터)가 원본이다. DB 를 손으로 고치지 말고 seed.sql 을 고친 뒤 반영한다.
- 반영 방법:
  - 구조(테이블 · 컬럼)가 바뀌면 `npm run db:setup` (전체 초기화). 사용자 확인 후 실행.
  - 한 테이블 내용만 바뀌면 그 테이블만 `delete` + seed.sql 의 해당 insert 를 트랜잭션으로 실행한다 (전체 초기화보다 안전).
- **코드와 DB 는 같이 배포되지 않는다.** DB 구조를 바꾸면 바로 main 에 push 해서 배포까지 끝낸다. 늦으면 실제 사이트가 깨진다.
- 테이블을 추가하면 `schema.sql` 맨 위 `drop table` 목록에도 넣는다.
- 인덱스는 실제 조회에 쓰일 때만 만든다(데이터가 작다).

## 콘텐츠 · 이미지

- 게임 자료(공명자 · 세계관 · 콘텐츠 소개 등)는 **공식 사이트 원문**을 쓴다. 지어내지 않는다. 공식에 없는 설명을 덧붙였으면 사용자에게 그 부분을 알린다.
- 공식 사이트(wutheringwaves.kurogames.com)는 JS 로 그려서 페이지를 그냥 읽으면 비어 있다. 데이터는 번들 안에 있다:
  - 한국어 텍스트: `static4.0/assets/kr-*.js` (영문은 `en-*.js`). 예: 지역 데이터 배열은 `key:"Lahai-Roi"` 로 시작.
  - 이미지 주소: `static4.0/assets/index-*.js` 안의 `https://wutheringwaves.kurogames.com/static4.0/assets/...`.
  - 뉴스 JSON: `hw-media-cdn-mingchao.kurogame.com/akiwebsite/website2.0/json/G152/kr/MainMenu.json` (언어 코드는 `kr`).
- 받은 파일은 스크래치 폴더에서 먼저 열어 보고, 맞는 것만 `public/images/` 에 `섹션-내용.확장자`(예: `lore-lahai-roi.webp`, `play-combat.jpg`)로 넣는다. 안 쓰게 된 이미지는 지운다.
- 공식 이미지에 로고 워터마크가 있으면 `pos` 로 잘리지 않게 / 보이지 않게 맞춘다.
- 표기는 공식대로: "검은 해안"(띄어쓰기), "황룡", "리나시타", "라하이 로이".

## 화면 확인

- 화면을 바꾸면 데스크탑(1440×900)과 모바일(390×844) 둘 다 실제로 열어서 본다. 모바일은 가로 넘침(`scrollWidth`)과 상단 메뉴 아이콘 8개가 다 보이는지 확인.
- 개발 서버를 띄웠으면 끝나고 그 프로세스만 정확히 끈다(명령줄에 `ppo` 와 `vite` 가 있는지 확인 후).

## Git · 배포

- 작업 브랜치는 `main`, 원격은 `origin` = `leesansa/game_servise2`.
- 커밋 메시지: `ppo: …`(사이트 코드), `docs: …`(문서), `ci: …`(워크플로), `chore: …`(정리). 첫 줄 요약 + 필요하면 `-` 목록.
- 커밋 전에 `git status` 로 의도한 파일만 들어가는지 본다. `.env` 는 절대 커밋하지 않는다.
- main 에 push 하면(`.md` 만 바뀐 경우 제외) GitHub Actions 가 lint → 배포한다. push 뒤에는 실행 결과와 실제 사이트(https://wuwa-portfolio.fridgeo.workers.dev)를 확인한다.
  - 실행 상태는 로그인 없이 `https://api.github.com/repos/leesansa/game_servise2/actions/runs` 로 볼 수 있다. 자세한 로그는 로그인이 필요하니 사용자에게 받는다.
  - 시크릿: `CLOUDFLARE_API_TOKEN`(Workers 편집 + Hyperdrive 편집, API Tokens 에서 만든 토큰. Global API Key 아님), `CLOUDFLARE_ACCOUNT_ID`.

## Windows 환경 메모

- `python` 은 스토어 바로가기라 실행되지 않는다. 스크립트는 node 로.
- 백슬래시가 들어간 정규식 · 긴 스크립트는 bash heredoc 대신 파일로 써서 `node 파일.mjs` 로 실행한다(heredoc 에서 백슬래시가 깨진 적 있음).
- `cat > 파일` 처럼 입력을 기다리는 명령을 heredoc 없이 쓰지 않는다(멈춤).
- 사용자가 `!` 로 직접 실행하는 명령은 저장소 최상단에서 실행된다.
