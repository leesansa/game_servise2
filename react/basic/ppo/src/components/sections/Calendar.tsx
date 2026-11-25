'use client'
import { useSyncExternalStore } from 'react'
import type { Calendar as CalendarData } from '@/types'
import { Img } from '@/components/common/Img'
import { SectionTitle } from '@/components/common/SectionTitle'

const DAY = 864e5
const md = (date: string) => date.slice(5).replace('-', '.')

// 오늘 날짜(브라우저 기준 'YYYY-MM-DD')는 브라우저에서만 계산 (서버 렌더 시점 날짜가 박히지 않게)
const todayYmd = () => {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
const noop = () => () => {}

// 엔드필드 #calendar 패턴: 날짜 줄은 위에 붙어 있고, 일정은 한 줄에 하나씩 세로로 이어짐
export function Calendar({ calendar }: { calendar: CalendarData }) {
  const { from, to, lanes } = calendar
  // 'YYYY-MM-DD' 는 UTC 자정으로 파싱되므로 시간대와 무관하게 날짜 차이만 나옴
  const dayOf = (date: string) => Math.round((Date.parse(date) - Date.parse(from)) / DAY)
  const DAYS = dayOf(to) + 1
  const WEEKS = Array.from({ length: Math.ceil(DAYS / 7) }, (_, w) => new Date(Date.parse(from) + w * 7 * DAY))
  const ymd = useSyncExternalStore(noop, todayYmd, () => null)
  const today = ymd === null ? null : dayOf(ymd)
  const inRange = today !== null && today >= 0 && today < DAYS

  return (
    <section id="calendar" className="sec cal">
      <SectionTitle en="CALENDAR" kr="버전 일정" />
      <div
        className="cal__board"
        data-reveal
        style={{ '--days': DAYS, '--d': inRange ? today : -99 } as React.CSSProperties}
      >
        <div className="cal__head">
          <div className="cal__label" />
          <div className="cal__track">
            {WEEKS.map((d, w) => (
              <span key={w} className="cal__week" style={{ gridColumn: `${w * 7 + 1} / span 7` }}>
                {d.getUTCMonth() + 1}.{String(d.getUTCDate()).padStart(2, '0')}
              </span>
            ))}
            {inRange && <i className="cal__today-tag">TODAY</i>}
          </div>
        </div>

        <div className="cal__body">
          {lanes.map((lane) => (
            <div className="cal__group" key={lane.label}>
              <div className="cal__label">{lane.label}</div>
              <ul className="cal__rows">
                {lane.items.map((e, n) => {
                  const s = dayOf(e.start)
                  const point = e.start === e.end
                  const done = inRange && dayOf(e.end) < today
                  // 하루짜리(마름모)는 막대가 없어 글자가 옆으로 나감: 뒤쪽이면 왼쪽으로 펼침
                  const late = point && s > DAYS * 0.8
                  // 배너가 '3.8 『…』' 처럼 버전 번호로 시작하면 번호를 크게
                  const ver = e.img && /^\d+\.\d+ /.test(e.title) ? e.title.split(' ')[0] : null
                  return (
                    <li className={`cal__track${done ? ' is-done' : ''}`} key={e.title}>
                      <div
                        // 하루짜리 말고는 모두 배너 카드 (이미지가 없으면 금색 그라데이션)
                        className={`cal__bar${point ? ' is-point' : ' cut is-banner'}${late ? ' is-late' : ''}`}
                        style={
                          {
                            '--col': `${s + 1} / ${point ? s + 2 : dayOf(e.end) + 1}`,
                            transitionDelay: `${n * 90}ms`,
                          } as React.CSSProperties
                        }
                        title={e.title}
                      >
                        {e.img && (
                          <Img src={e.img} className="cal__bg" sizes="(max-width: 768px) 90vw, 30vw" pos={e.pos ?? 'center top'} />
                        )}
                        <em>{point ? md(e.start) : `${md(e.start)} – ${md(e.end)}`}</em>
                        {ver ? (
                          <span className="cal__name">
                            <b className="cal__ver">{ver}</b>
                            <span className="cal__sub">{e.title.slice(ver.length + 1)}</span>
                          </span>
                        ) : (
                          <span className="cal__name">{e.title}</span>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
          {inRange && <i className="cal__today" aria-hidden="true" />}
        </div>
      </div>
      <p className="cal__note">
        ※ {md(from)} – {md(to)} 명조 일정 · 출처: 서브컬쳐 게임 일정(subgamecals.com)
      </p>
    </section>
  )
}
