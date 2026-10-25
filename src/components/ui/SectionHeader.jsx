// Section header: optional page-context line, title, optional lede and aside.
//
//   <SectionHeader title="Things I've shipped." aside={<Link …>All work</Link>} />
//   <SectionHeader as="h1" label="Work, 24 repositories" title="Things I've built." lede="…" />
//
// as: heading element ('h1' | 'h2' | 'h3'); 'h1' also gets the page-title size.
// label: shown on page (h1) headers only, where it tells you where you are.
//   On section (h2/h3) headers the title already says it, so it's not rendered.
// index: accepted for older call sites; not rendered.
// aside: optional node rendered under the title (e.g. a text link).
// id: put on the heading, for aria-labelledby on the parent <section>.

function SectionHeader({ label, title, lede, as = 'h2', aside, id, className = '' }) {
  const Heading = as
  const isPage = as === 'h1'
  const titleClass = `section-title${isPage ? ' section-title--page' : ''}`
  const showLabel = isPage && label

  return (
    <header className={`section-header ${className}`.trim()}>
      {(showLabel || aside) && (
        <div className="section-header__row">
          {showLabel && <p className="section-label">{label}</p>}
          {aside && <div className="section-header__aside">{aside}</div>}
        </div>
      )}
      <Heading id={id} className={titleClass}>
        {title}
      </Heading>
      {lede && <p className="section-subtitle">{lede}</p>}
    </header>
  )
}

export default SectionHeader
