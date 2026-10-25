// Endless horizontal ticker. The first copy is the real list; the second is
// a visual duplicate hidden from assistive tech. Pauses for reduced motion.
//   <Marquee items={['Java', 'Swift']} duration={40} renderItem={(t) => …} />
function Marquee({ items, duration = 40, reverse = false, renderItem = (i) => i, className = '', label }) {
  const track = (hidden) => (
    <ul className="marquee__track" aria-hidden={hidden || undefined} aria-label={hidden ? undefined : label}>
      {items.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  )

  return (
    <div
      className={`marquee${reverse ? ' marquee--reverse' : ''} ${className}`.trim()}
      style={{ '--marquee-duration': `${duration}s` }}
    >
      {track(false)}
      {track(true)}
    </div>
  )
}

export default Marquee
