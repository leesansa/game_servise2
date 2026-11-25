import { ECHO } from '@/lib/data'
import { SectionTitle } from '@/components/common/SectionTitle'
import { Slider } from '@/components/common/Slider'

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
