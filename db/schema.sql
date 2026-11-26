-- 명조 포트폴리오 페이지 DB (PostgreSQL / Neon)
-- 실행 순서: schema.sql → seed.sql   (다시 실행하면 테이블을 지우고 새로 만듦)
-- 화면 구조용 설정(사이드바 섹션 목록, 플랫폼 이름)은 DB 가 아니라 코드(src/lib/data.ts)에 둠.

drop table if exists resonators, factions, calendar_events, echo_terms, region_places, regions, game_info, gameplay_slides, notices cascade;

-- 공명자 진영: 공식 사이트 분류 (황룡, 검은 해안 …)
create table factions (
  id    text primary key,          -- 영문 슬러그 (예: huang-long)
  en    text not null,             -- 영문 이름 (예: HUANG LONG)
  name  text not null,             -- 한글 이름 (예: 황룡)
  icon  text,                      -- 엠블럼 이미지 경로
  sort  integer not null unique    -- 탭 순서
);

-- 공명자
create table resonators (
  id          integer generated always as identity primary key,
  faction_id  text not null references factions (id) on delete cascade,
  en          text not null,
  name        text not null,
  attr        text not null check (attr in ('응결', '기류', '용융', '인멸', '회절', '전도')),
  rarity      smallint not null check (rarity in (4, 5)),
  description text not null default '',
  img         text not null,       -- 전신 일러스트
  thumb       text not null,       -- 목록용 썸네일
  sort        integer not null,    -- 진영 안 순서
  unique (faction_id, sort)
);

-- 버전 일정 (업데이트 · 픽업 · 이벤트 …). 하루짜리는 start_date = end_date
create table calendar_events (
  id         integer generated always as identity primary key,
  lane       text not null check (lane in ('업데이트', '픽업', '이벤트', '특별 방송', '콜라보·행사')),
  title      text not null,
  start_date date not null,
  end_date   date not null check (end_date >= start_date),
  img        text,                 -- 배너 이미지, 없으면 NULL
  img_pos    text,                 -- 이미지에서 보여 줄 위치 (CSS object-position), 없으면 기본값
  sort       integer not null      -- 같은 줄 안 순서
);

-- 에코 시스템 카드 (공식 「정보」 세계관 용어)
create table echo_terms (
  id          integer generated always as identity primary key,
  en          text not null,
  name        text not null,
  img         text not null,
  description text not null,
  sort        integer not null unique
);

-- 세계관 지역 (공식 사이트 「월드」 기준: 황룡, 검은 해안, 리나시타, 라하이 로이)
create table regions (
  id          text primary key,    -- 영문 슬러그 (예: huanglong)
  en          text not null,
  name        text not null,
  img         text not null,
  description text not null,
  sort        integer not null unique
);

-- 지역 안의 세부 장소 (예: 황룡 → 금주성, 현방성 …)
create table region_places (
  id          integer generated always as identity primary key,
  region_id   text not null references regions (id) on delete cascade,
  en          text not null,       -- 공식 영문판 이름
  name        text not null,
  description text not null,
  sort        integer not null,    -- 지역 안 순서
  unique (region_id, sort)
);

-- 게임 정보 카드 (장르, 플랫폼 …)
create table game_info (
  k      text primary key,         -- 영문 키 (예: GENRE)
  label  text not null,            -- 한글 이름 (예: 장르)
  value  text not null,
  sort   integer not null unique
);

-- 콘텐츠 소개 슬라이드
create table gameplay_slides (
  id          integer generated always as identity primary key,
  title       text not null,
  description text not null,
  img         text not null,
  sort        integer not null unique
);

-- 공지
create table notices (
  id           integer generated always as identity primary key,
  tag          text not null check (tag in ('공지', '이벤트', '업데이트')),
  title        text not null,
  published_on date not null
);
