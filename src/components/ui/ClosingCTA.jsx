import { person, closingCta } from '../../data/site'
import Button from './Button'

// The closing call-to-action at the end of Home, About and Work, set on a
// full-bleed graphite band: a large "Let's talk", the lede, then "Email me"
// (mailto) and "Contact form" (/contact).
//
//   <ClosingCTA />
//   <ClosingCTA index="04" title="Custom title" lede="Custom lede." />
//
// props: title, lede, id (heading id; default 'closing-title'), index
// (optional chapter numeral, Home only), className (extra section classes).
function ClosingCTA({ title = closingCta.title, lede, id = 'closing-title', index, className = '' }) {
  const ledeNode = lede ?? (
    <>
      {closingCta.lede}.
      <span className="closing-cta__reply">{closingCta.reply}.</span>
    </>
  )

  return (
    <div className="band band--ink">
      <section className={`section closing-cta ${className}`.trim()} aria-labelledby={id}>
        {index && (
          <span className="closing-cta__index" aria-hidden="true">
            {index}
          </span>
        )}
        <h2 id={id} className="closing-cta__title">
          {title}
        </h2>
        <div className="closing-cta__row">
          <p className="closing-cta__lede">{ledeNode}</p>
          <div className="closing-cta__actions">
            <Button href={person.emailHref} variant="accent">
              Email me
            </Button>
            <Button to="/contact" variant="ghost">
              Contact form
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClosingCTA
