
export function SectionTitle({ en, kr, dark }) {
  return (
    <div className={`sec-title${dark ? ' is-dark' : ''}`} data-reveal>
      <p className="sec-title__en">
        <i aria-hidden="true" />
        {en}
      </p>
      <h2 className="sec-title__kr">{kr}</h2>
      <span className="sec-title__bar" aria-hidden="true" />
    </div>
  )
}
