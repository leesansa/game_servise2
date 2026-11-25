import { ECHO } from '../../utils/data.js'
import { SectionTitle } from '../common/SectionTitle.jsx'
import { Slider } from '../common/Slider.jsx'

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
