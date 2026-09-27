import { person, closingCta } from '../../data/site'
import Button from './Button'
import SectionHeader from './SectionHeader'

// The one closing call-to-action used at the end of Home and About.
// Renders a standard `.section` with SectionHeader (index — Contact), the lede,
// then primary "Email me" (mailto) + secondary "Contact form →" (/contact).
//
//   <ClosingCTA index="04" />
//   <ClosingCTA index="05" title="Custom title." lede="Custom lede." />
//
// props: index (section number, e.g. "04"), label ('Contact'), title, lede,
//        id (heading id; default 'closing-title'), className (extra section classes)
function ClosingCTA({
  index,
  label = closingCta.label,
  title = closingCta.title,
  lede,
  id = 'closing-title',
  className = '',
}) {
  const ledeNode = lede ?? (
    <>
      {closingCta.lede}
      <span aria-hidden="true"> · </span>
      <span className="closing-cta__reply">{closingCta.reply}</span>
    </>
  )

  return (
    <section className={`section closing-cta ${className}`.trim()} aria-labelledby={id}>
      <SectionHeader index={index} label={label} title={title} lede={ledeNode} id={id} />
      <div className="closing-cta__actions">
        <Button href={person.emailHref} blockMobile>
          Email me
        </Button>
        <Button to="/contact" variant="secondary" arrow blockMobile>
          Contact form
        </Button>
      </div>
    </section>
  )
}

export default ClosingCTA
