// 페이지에 필요한 데이터를 DB 에서 한 번에 읽음. 화면 컴포넌트가 쓰던 모양(@/types) 그대로 돌려줌.
import type { Calendar, Faction, Info, Notice, Region, Resonator, Slide, Term } from '@/types'
import { withDb } from './client'

// 일정 줄 순서 (DB 의 lane 값과 같아야 함, schema.sql 의 check 제약 참고)
const LANES = ['업데이트', '픽업', '이벤트', '특별 방송', '콜라보·행사']
const DAY = 864e5

export type PageData = {
  factions: Faction[]
  calendar: Calendar
  echo: Term[]
  regions: Region[]
  info: Info[]
  gameplay: Slide[]
  notices: Notice[]
}

type EventRow = { lane: string; title: string; start: string; end: string; img: string | null; pos: string | null }

// 일정 표시 범위: 가장 이른 시작일이 든 주의 월요일 ~ 가장 늦은 종료일이 든 주의 일요일
export function calendarRange(events: { start: string; end: string }[]) {
  const ymd = (t: number) => new Date(t).toISOString().slice(0, 10)
  if (!events.length) {
    const today = ymd(Date.now())
    return { from: today, to: today }
  }
  const first = Math.min(...events.map((e) => Date.parse(e.start)))
  const last = Math.max(...events.map((e) => Date.parse(e.end)))
  const monday = first - ((new Date(first).getUTCDay() + 6) % 7) * DAY
  const sunday = last + ((7 - new Date(last).getUTCDay()) % 7) * DAY
  return { from: ymd(monday), to: ymd(sunday) }
}

export function getPageData(): Promise<PageData> {
  return withDb(async (sql) => {
    // 서로 상관없는 조회라 동시에 보냄. "desc", "end" 는 SQL 예약어라 따옴표로 감쌈
    const [factions, resonators, events, echo, regions, info, gameplay, notices] = await Promise.all([
      sql<{ id: string; en: string; name: string; icon: string }[]>`
        select id, en, name, coalesce(icon, '') as icon from factions order by sort`,
      sql<(Resonator & { faction_id: string })[]>`
        select faction_id, en, name, attr, rarity, description as "desc", img, thumb
        from resonators order by faction_id, sort`,
      sql<EventRow[]>`
        select lane, title, to_char(start_date, 'YYYY-MM-DD') as start, to_char(end_date, 'YYYY-MM-DD') as "end",
               img, img_pos as pos
        from calendar_events order by sort`,
      sql<Term[]>`select en, name, img, description as "desc" from echo_terms order by sort`,
      sql<Region[]>`select en, name, img, description as "desc" from regions order by sort`,
      sql<Info[]>`select k, label, value as v from game_info order by sort`,
      sql<Slide[]>`select title, description as "desc", img from gameplay_slides order by sort`,
      sql<Notice[]>`select tag, title, to_char(published_on, 'YYYY.MM.DD') as date from notices order by published_on desc, id`,
    ])

    // DB 결과(RowList)를 화면으로 넘길 평범한 객체 배열로
    const plain = <T,>(rows: Iterable<T>) => Array.from(rows, (r) => ({ ...r }))

    return {
      factions: factions.map((f) => ({
        ...f,
        roles: resonators
          .filter((r) => r.faction_id === f.id)
          .map((r) => ({
            en: r.en, name: r.name, attr: r.attr, rarity: Number(r.rarity),
            desc: r.desc, img: r.img, thumb: r.thumb,
          })),
      })),
      calendar: {
        ...calendarRange(events),
        lanes: LANES.map((label) => ({
          label,
          items: events
            .filter((e) => e.lane === label)
            .map((e) => ({ title: e.title, start: e.start, end: e.end, img: e.img ?? undefined, pos: e.pos ?? undefined })),
        })).filter((l) => l.items.length),
      },
      echo: plain(echo),
      regions: plain(regions),
      info: plain(info),
      gameplay: plain(gameplay),
      notices: plain(notices),
    }
  })
}
