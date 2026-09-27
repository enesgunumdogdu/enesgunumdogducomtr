// Label/value "datasheet" table (mono values), shared by Home "Stack" and About
// "Skills". Renders <dl class="spec-table">.
//
//   <SpecTable rows={[{ label: 'Backend', value: ['Java', 'Spring Boot'] }]} />
//
// value: string or string[] (joined with " · "). label: optional aria-label.
function SpecTable({ rows = [], label, className = '' }) {
  return (
    <dl className={`spec-table ${className}`.trim()} aria-label={label}>
      {rows.map((row) => (
        <div key={row.label} className="spec-table__row">
          <dt className="spec-table__label">{row.label}</dt>
          <dd className="spec-table__value">
            {Array.isArray(row.value) ? row.value.join(' · ') : row.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default SpecTable
