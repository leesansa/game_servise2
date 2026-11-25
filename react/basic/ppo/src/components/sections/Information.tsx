import Image from 'next/image'
import type { Info } from '@/types'
import { SectionTitle } from '@/components/common/SectionTitle'

export function Information({ info }: { info: Info[] }) {
  return (
    <section id="information" className="sec info is-dark">
      <SectionTitle en="INFORMATION" kr="게임 정보" dark />
      <ul className="info__grid">
        {info.map((x, n) => (
          <li key={x.k} className="info__card cut" data-reveal style={{ transitionDelay: `${n * 80}ms` }}>
            <p className="info__k">{x.k}</p>
            <p className="info__label">{x.label}</p>
            <p className="info__v">{x.v}</p>
          </li>
        ))}
      </ul>
      {/* 페이지 맨 마지막 섹션이라 푸터를 여기 둠 */}
      <footer className="foot">
        <Image src="/images/logo-small-kr.png" alt="명조" width={100} height={40} />
        <p>포트폴리오용 비공식 페이지입니다. 「명조: 워더링 웨이브」의 모든 권리는 KURO GAMES에 있습니다.</p>
      </footer>
    </section>
  )
}
