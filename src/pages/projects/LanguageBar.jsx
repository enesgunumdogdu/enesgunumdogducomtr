import { colorForRank } from './data'

// Static stacked bar of primary languages across public repos (no animation),
// shown inside the Open source section. The bar is decorative; the legend
// list carries the numbers for everyone.
function LanguageBar({ distribution, repoCount }) {
  if (!distribution.length) return null

  return (
    <div className="lang-volume">
      <h3 id="volume-title" className="lang-volume__title">
        What I actually write, by volume.
      </h3>
      <p className="lang-volume__sub">
        Across {repoCount} public repositories · {distribution.length} languages
      </p>

      <div className="lang-bar" aria-hidden="true">
        {distribution.map(({ lang, pct }, rank) => (
          <span
            key={lang}
            className="lang-bar__seg"
            style={{ flexBasis: `${pct}%`, background: colorForRank(rank) }}
          />
        ))}
      </div>

      <ul className="lang-legend" aria-label="Top languages by repository count">
        {distribution.slice(0, 8).map(({ lang, count, pct }, rank) => (
          <li key={lang}>
            <span className="lang-legend__swatch" style={{ background: colorForRank(rank) }} aria-hidden="true" />
            <span className="lang-legend__name">{lang}</span>
            <span className="lang-legend__count">
              {count} · {Math.round(pct)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageBar
