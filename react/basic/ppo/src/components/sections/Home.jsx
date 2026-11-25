import Image from 'next/image'
import { PLATFORMS } from '../../utils/data.js'
import { Img } from '../common/Img.jsx'
import { Marquee } from '../common/Marquee.jsx'

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
