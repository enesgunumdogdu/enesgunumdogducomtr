// Section header pattern (ui.md §3.7): hairline rule, mono label row
// ("02 — Selected work" with the index in accent), one-colour title, optional lede.
//
//   <SectionHeader index="02" label="Selected work" title="Things I've shipped." />
//   <SectionHeader as="h1" label="Projects / 24 repositories" title="Things I've built." lede="…" />
//
// as: heading element ('h1' | 'h2' | 'h3'); 'h1' also gets the page-title size.
// aside: optional node rendered right of the label (e.g. a text link).
// id: put on the heading, for aria-labelledby on the parent <section>.

function SectionHeader({ index, label, title, lede, as = 'h2', aside, id, className = '' }) {
  const Heading = as
  const titleClass = `section-title${as === 'h1' ? ' section-title--page' : ''}`

  return (
    <header className={`section-header ${className}`.trim()}>
      {(index || label || aside) && (
        <div className="section-header__row">
          {(index || label) && (
            <p className="section-label">
              {index && <span className="section-index">{index}</span>}
              {index && label && ' — '}
              {label}
            </p>
          )}
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
