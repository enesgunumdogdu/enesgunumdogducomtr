import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// A small round watch face showing local time in İstanbul: a quiet
// "where I am" for visitors in other time zones.
// The second hand ticks once a second; with reduced motion the face only
// updates once a minute and has no second hand.

const TZ = 'Europe/Istanbul'

function readTime() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: TZ,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date())
  const get = (type) => Number(parts.find((p) => p.type === type)?.value ?? 0)
  return { h: get('hour'), m: get('minute'), s: get('second') }
}

const pad = (n) => String(n).padStart(2, '0')
const ticks = Array.from({ length: 60 }, (_, i) => i)

function Dial({ className = '' }) {
  const reduced = useReducedMotion()
  const [time, setTime] = useState(readTime)

  useEffect(() => {
    const id = setInterval(() => setTime(readTime()), reduced ? 30000 : 1000)
    return () => clearInterval(id)
  }, [reduced])

  const { h, m, s } = time
  const hourDeg = (h % 12) * 30 + m * 0.5
  const minuteDeg = m * 6 + s * 0.1
  const secondDeg = s * 6
  const label = `${pad(h)}:${pad(m)}`

  return (
    <figure className={`dial ${className}`.trim()}>
      <svg
        className="dial__face"
        viewBox="0 0 200 200"
        role="img"
        aria-label={`Local time in İstanbul: ${label}`}
      >
        <circle className="dial__bezel" cx="100" cy="100" r="96" />
        <circle className="dial__plate" cx="100" cy="100" r="90" />
        {ticks.map((i) => (
          <line
            key={i}
            className={i % 15 === 0 ? 'dial__tick dial__tick--quarter' : i % 5 === 0 ? 'dial__tick dial__tick--hour' : 'dial__tick'}
            x1="100"
            y1="18"
            x2="100"
            y2={i % 15 === 0 ? 34 : i % 5 === 0 ? 28 : 22}
            transform={`rotate(${i * 6} 100 100)`}
          />
        ))}
        <text className="dial__digits" x="100" y="138" textAnchor="middle">
          {label}
        </text>
        <line
          className="dial__hand dial__hand--hour"
          x1="100"
          y1="108"
          x2="100"
          y2="58"
          transform={`rotate(${hourDeg} 100 100)`}
        />
        <line
          className="dial__hand dial__hand--minute"
          x1="100"
          y1="110"
          x2="100"
          y2="36"
          transform={`rotate(${minuteDeg} 100 100)`}
        />
        {!reduced && (
          <line
            className="dial__hand dial__hand--second"
            x1="100"
            y1="116"
            x2="100"
            y2="30"
            transform={`rotate(${secondDeg} 100 100)`}
          />
        )}
        <circle className="dial__pin" cx="100" cy="100" r="4" />
      </svg>
      <figcaption className="dial__caption">İstanbul, local time</figcaption>
    </figure>
  )
}

export default Dial
