// External (or mailto/tel) link. http(s) opens in a new tab with
// rel="noopener noreferrer"; mailto:/tel: stay in the same tab.
// Defaults to the underlined accent `.text-link`; pass className to override.

const isNewTab = (href = '') => /^https?:\/\//i.test(href)

function ExternalLink({ href, className = 'text-link', newTabHint = false, children, ...rest }) {
  const newTab = isNewTab(href)
  return (
    <a
      href={href}
      className={className}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
      {newTab && newTabHint && <span className="visually-hidden"> (opens in a new tab)</span>}
    </a>
  )
}

export default ExternalLink
