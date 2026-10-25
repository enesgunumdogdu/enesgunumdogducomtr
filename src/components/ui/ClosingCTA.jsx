import { person, closingCta } from '../../data/site'
import Button from './Button'
import Magnetic from './Magnetic'
import SectionHeader from './SectionHeader'

// The closing call-to-action at the end of Home, About and Work: a
// full-width "Let's talk", the lede, then "Email me" (mailto, magnetic) and
// "Contact form" (/contact).
//
//   <ClosingCTA />
//   <ClosingCTA title="Custom title" lede="Custom lede." />
//
// props: label, title, lede, id (heading id; default 'closing-title'),
//        className (extra section classes). `index` is accepted and ignored.
function ClosingCTA({ label = closingCta.label, title = closingCta.title, lede, id = 'closing-title', className = '' }) {
  const ledeNode = lede ?? (
    <>
      {closingCta.lede}.
      <span className="closing-cta__reply">{closingCta.reply}.</span>
    </>
  )

  return (
    <section className={`section closing-cta ${className}`.trim()} aria-labelledby={id}>
      <SectionHeader label={label} title={title} lede={ledeNode} id={id} />
      <div className="closing-cta__actions">
        <Magnetic>
          <Button href={person.emailHref} data-cursor="Write">
            Email me
          </Button>
        </Magnetic>
        <Button to="/contact" variant="secondary">
          Contact form
        </Button>
      </div>
    </section>
  )
}

export default ClosingCTA
