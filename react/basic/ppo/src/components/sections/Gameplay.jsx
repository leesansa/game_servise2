import { GAMEPLAY } from '../../utils/data.js'
import { SectionTitle } from '../common/SectionTitle.jsx'
import { Slider } from '../common/Slider.jsx'

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
