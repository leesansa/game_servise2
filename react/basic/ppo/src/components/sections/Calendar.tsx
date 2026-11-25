import { CALENDAR } from '@/lib/data'
import { SectionTitle } from '@/components/common/SectionTitle'

export function Calendar() {
  const { cols, rows } = CALENDAR
  return (
    <section id="calendar" className="sec cal">
      <SectionTitle en="CALENDAR" kr="버전 일정" />
      <div className="cal__board" data-reveal style={{ '--cols': cols.length } as React.CSSProperties}>
        <div className="cal__head">
          {cols.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        {rows.map((r, n) => (
          <div className="cal__row" key={n}>
            <div
              className="cal__bar cut"
              style={{ gridColumn: `${r.start + 1} / ${r.end + 1}`, transitionDelay: `${n * 90}ms` }}
            >
              <em>{r.tag}</em>
              {r.title}
            </div>
          </div>
        ))}
      </div>
      <p className="cal__note">※ 예시 일정입니다. 실제 날짜와 다릅니다.</p>
    </section>
  )
}
