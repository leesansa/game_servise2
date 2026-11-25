// 서버 컴포넌트: 상태 없는 섹션. 상호작용은 client.jsx 의 Slider 등에 맡김.
import Image from 'next/image'
import { Slider } from './client.jsx'
import { CALENDAR, ECHO, GAMEPLAY, INFO, NOTICES, PLATFORMS } from './data.js'
import { Img, Marquee, SectionTitle } from './ui.jsx'

export function Home() {
  return (
    <section id="home" className="sec home">
      <Img src="/images/home-kv.webp" className="home__bg" priority />
      <div className="home__inner">
        <div className="home__logo" data-reveal>
          <p className="home__kicker">OPEN WORLD ACTION RPG</p>
          <h1>
            <Image src="/images/logo-kr.png" alt="명조: 워더링 웨이브" width={1339} height={890} priority />
          </h1>
          <p className="home__tag">BEYOND THE LAMENT // INTO SOLARIS-3</p>
        </div>
        <ul className="home__dl" data-reveal>
          {PLATFORMS.map((p) => (
            <li key={p}>
              <a href="#home" className="btn cut">
                {p}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a href="#resonator" className="home__scroll" aria-label="아래로 스크롤">
        SCROLL
      </a>
      <Marquee text="WUTHERING WAVES // SOLARIS-3 // RESONATOR // ECHO" />
    </section>
  )
}

export function Information() {
  return (
    <section id="information" className="sec info is-dark">
      <SectionTitle en="INFORMATION" kr="게임 정보" dark />
      <ul className="info__grid">
        {INFO.map((x, n) => (
          <li key={x.k} className="info__card cut" data-reveal style={{ transitionDelay: `${n * 80}ms` }}>
            <p className="info__k">{x.k}</p>
            <p className="info__label">{x.label}</p>
            <p className="info__v">{x.v}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Calendar() {
  const { cols, rows } = CALENDAR
  return (
    <section id="calendar" className="sec cal">
      <SectionTitle en="CALENDAR" kr="버전 일정" />
      <div className="cal__board" data-reveal style={{ '--cols': cols.length }}>
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

export function Gameplay() {
  return (
    <section id="gameplay" className="sec play">
      <p className="play__giant glow" data-reveal>
        {'//WUTHERING'}
      </p>
      <div className="play__grid">
        <SectionTitle en="GAMEPLAY" kr="콘텐츠 소개" />
        <Slider items={GAMEPLAY} label="GAMEPLAY" />
      </div>
    </section>
  )
}

export function Echo() {
  return (
    <section id="echo" className="sec play">
      <div className="play__grid is-reverse">
        <SectionTitle en="ECHO" kr="에코 시스템" />
        <Slider items={ECHO} label="ECHO" reverse />
      </div>
    </section>
  )
}

export function Notice() {
  return (
    <section id="notice" className="sec notice is-dark">
      <SectionTitle en="NOTICE" kr="공지" dark />
      <ul className="notice__list">
        {NOTICES.map((x, n) => (
          <li key={n} data-reveal style={{ transitionDelay: `${n * 70}ms` }}>
            <a href="#notice">
              <em>{x.tag}</em>
              <span className="notice__title">{x.title}</span>
              <time>{x.date}</time>
            </a>
          </li>
        ))}
      </ul>
      <footer className="foot">
        <Image src="/images/logo-small-kr.png" alt="명조" width={100} height={40} />
        <p>포트폴리오용 비공식 페이지입니다. 「명조: 워더링 웨이브」의 모든 권리는 KURO GAMES에 있습니다.</p>
      </footer>
    </section>
  )
}
