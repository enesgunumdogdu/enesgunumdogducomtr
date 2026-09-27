import { useState } from 'react'
import { filterCategories } from './data'

const TOP_LANGUAGES = 6

function Count({ n }) {
  return (
    <span className="chip__count">
      <span className="visually-hidden">, </span>
      {n}
      <span className="visually-hidden"> repositories</span>
    </span>
  )
}

// Category (single choice) + language (multi-select) filters as real
// <button aria-pressed> chips. Groups wrap at every width (no hidden scroller);
// languages show the top 6 plus a "More languages" disclosure.
function RepoFilters({
  repos,
  languages,
  activeCategory,
  onCategory,
  activeLanguages,
  onToggleLanguage,
  onClear,
  shown,
}) {
  const [moreLangs, setMoreLangs] = useState(false)
  // Always keep selected languages visible, even when collapsed.
  const shownLangs = moreLangs
    ? languages
    : languages.filter((l, i) => i < TOP_LANGUAGES || activeLanguages.includes(l.lang))
  const hiddenLangCount = languages.length - shownLangs.length
  const isFiltered = activeCategory !== 'all' || activeLanguages.length > 0
  const countFor = (id) =>
    id === 'all' ? repos.length : repos.filter((r) => r.categories.includes(id)).length

  return (
    <div className="repo-filters">
      <div className="repo-filters__group">
        <p className="repo-filters__label" id="filter-category-label">
          Category
        </p>
        <div className="chip-rail repo-filters__chips" role="group" aria-labelledby="filter-category-label">
          {filterCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              className="chip"
              aria-pressed={activeCategory === c.id}
              onClick={() => onCategory(c.id)}
            >
              {c.label}
              <Count n={countFor(c.id)} />
            </button>
          ))}
        </div>
      </div>

      {languages.length > 0 && (
        <div className="repo-filters__group">
          <p className="repo-filters__label" id="filter-language-label">
            Language <span className="repo-filters__hint">· multi-select</span>
          </p>
          <div className="chip-rail repo-filters__chips" role="group" aria-labelledby="filter-language-label">
            {shownLangs.map(({ lang, count }) => (
              <button
                key={lang}
                type="button"
                className="chip"
                aria-pressed={activeLanguages.includes(lang)}
                onClick={() => onToggleLanguage(lang)}
              >
                {lang}
                <Count n={count} />
              </button>
            ))}
            {(moreLangs || hiddenLangCount > 0) && (
              <button
                type="button"
                className="chip chip--more"
                aria-expanded={moreLangs}
                onClick={() => setMoreLangs((v) => !v)}
              >
                {moreLangs ? 'Fewer languages' : `More languages (${hiddenLangCount})`}
              </button>
            )}
          </div>
        </div>
      )}

      <div className="repo-filters__summary">
        <p aria-live="polite" className="repo-filters__count">
          Showing {shown} of {repos.length} repositories
        </p>
        {/* Always rendered (never unmounts under the user's focus). */}
        <button type="button" className="btn btn--text" onClick={onClear} aria-disabled={!isFiltered}>
          Clear filters
        </button>
      </div>
    </div>
  )
}

export default RepoFilters
