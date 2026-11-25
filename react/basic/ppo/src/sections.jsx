import { useState } from 'react'
import { CALENDAR, ECHO, GAMEPLAY, INFO, NOTICES, PLATFORMS, REGIONS, RESONATORS } from './data.js'
import { Marquee, Ph, SectionTitle, Slider } from './ui.jsx'

export function Home() {
  return (
    <section id="home" className="sec home">
      <Ph label="KEY VISUAL 1920×1080" className="home__bg" />
      <div className="home__inner">
        <div className="home__logo" data-reveal>
          <p className="home__kicker">OPEN WORLD ACTION RPG</p>
          <h1 className="glitch">
            명조
            <span>WUTHERING WAVES</span>
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

export function Resonator() {
  const [i, setI] = useState(0)
  const r = RESONATORS[i]
  return (
    <section id="resonator" className="sec reso">
      <p className="outline reso__bg-text" aria-hidden="true">
        RESONATOR
      </p>
      <SectionTitle en="RESONATOR" kr="공명자" />
      <div className="reso__body">
        <ul className="reso__list" role="tablist" aria-label="공명자 선택">
          {RESONATORS.map((c, n) => (
            <li key={c.en}>
              <button
                type="button"
                role="tab"
                aria-selected={n === i}
                className={n === i ? 'is-on' : ''}
                onClick={() => setI(n)}
              >
                <Ph label={c.name} className="reso__thumb" />
              </button>
            </li>
          ))}
        </ul>
        <div className="reso__art" key={r.en}>
          <Ph label={`${r.name} 일러스트`} />
        </div>
        <div className="reso__info" key={`${r.en}-info`}>
          <p className="reso__en">{r.en}</p>
          <h3 className="reso__name">
            <span>[</span> {r.name} <span>]</span>
          </h3>
          <p className="reso__stars" aria-label={`${r.rarity}성`}>
            {'★'.repeat(r.rarity)}
          </p>
          <dl className="reso__spec">
            <div>
              <dt>속성</dt>
              <dd>{r.attr}</dd>
            </div>
            <div>
              <dt>무기</dt>
              <dd>{r.weapon}</dd>
            </div>
          </dl>
          <p className="reso__desc">{r.desc}</p>
        </div>
      </div>
      <div className="reso__band" aria-hidden="true" />
    </section>
  )
}

export function Lore() {
  const [i, setI] = useState(0)
  const r = REGIONS[i]
  const go = (d) => setI((i + d + REGIONS.length) % REGIONS.length)
  return (
    <section id="lore" className="sec lore is-dark">
      <SectionTitle en="LORE" kr="세계관 소개" dark />
      <div className="lore__body">
        <div className="lore__visual">
          <span className="ring ring--1" aria-hidden="true" />
          <span className="ring ring--2" aria-hidden="true" />
          <span className="ring ring--3" aria-hidden="true" />
          <Ph key={r.en} label={`${r.name} 지역 이미지`} className="lore__img" />
        </div>
        <div className="lore__info" key={`${r.en}-i`}>
          <p className="lore__en glitch">{r.en}</p>
          <p className="lore__sub">WUTHERING WAVES</p>
          <div className="lore__nav">
            <button type="button" onClick={() => go(-1)} aria-label="이전 지역">
              ‹
            </button>
            <span>
              <sup>{String(i + 1).padStart(2, '0')}</sup> {r.name}
            </span>
            <button type="button" onClick={() => go(1)} aria-label="다음 지역">
              ›
            </button>
          </div>
          <p className="lore__desc">{r.desc}</p>
        </div>
      </div>
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
      <p className="play__giant glitch" data-reveal>
        //WUTHERING
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
        <p>포트폴리오용 비공식 페이지입니다. 「명조: 워더링 웨이브」의 모든 권리는 KURO GAMES에 있습니다.</p>
      </footer>
    </section>
  )
}
