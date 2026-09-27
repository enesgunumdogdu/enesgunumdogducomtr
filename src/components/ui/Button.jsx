import { Link } from 'react-router-dom'
import East from '@mui/icons-material/East'

// One button API for three elements:
//   to="/projects"            → react-router <Link>
//   href="https://…"/mailto:  → <a> (http(s) opens new tab, rel=noopener noreferrer)
//   neither                   → <button type="button"> (pass type="submit" for forms)
// variant: 'primary' | 'secondary' | 'text'. Min height 48px (text: 44px hit area).
// arrow: trailing → icon that nudges 3px on hover. block: full width.
// blockMobile: full width below 480px only.

function Button({
  to,
  href,
  variant = 'primary',
  arrow = false,
  block = false,
  blockMobile = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    block && 'btn--block',
    blockMobile && 'btn--block-mobile',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {children}
      {arrow && (
        <span className="btn__icon" aria-hidden="true">
          <East fontSize="inherit" />
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    const newTab = /^https?:\/\//i.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  )
}

export default Button
