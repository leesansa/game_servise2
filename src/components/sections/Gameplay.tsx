import type { Slide } from '@/types'
import { SectionTitle } from '@/components/common/SectionTitle'
import { Slider } from '@/components/common/Slider'

export function Gameplay({ slides }: { slides: Slide[] }) {
  return (
    <section id="gameplay" className="sec play">
      <p className="play__giant glow" data-reveal>
        {'//WUTHERING'}
      </p>
      <div className="play__grid">
        <SectionTitle en="GAMEPLAY" kr="콘텐츠 소개" />
        <Slider items={slides} label="GAMEPLAY" />
      </div>
    </section>
  )
}
