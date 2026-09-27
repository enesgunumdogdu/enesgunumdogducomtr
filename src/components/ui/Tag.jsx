// Read-only stack/tech label (mono, hairline outline). Not interactive.
//   <Tag>SwiftUI</Tag>
//   <TagList tags={['Java', 'Spring Boot']} label="Tech stack" />

function Tag({ children, className = '', ...rest }) {
  return (
    <span className={`tag ${className}`.trim()} {...rest}>
      {children}
    </span>
  )
}

export function TagList({ tags = [], label, className = '' }) {
  if (!tags.length) return null
  return (
    <ul className={`tag-list ${className}`.trim()} aria-label={label}>
      {tags.map((t) => (
        <li key={t}>
          <Tag>{t}</Tag>
        </li>
      ))}
    </ul>
  )
}

export default Tag
