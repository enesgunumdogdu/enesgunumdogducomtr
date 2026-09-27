import { useState } from 'react'
import { Button, ExternalLink } from '../../components/ui'
import { githubProfile } from '../../data/site'

const INITIAL_ROWS = 12

const monthYear = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' })
const formatUpdated = (iso) => {
  const d = new Date(iso)
  return Number.isNaN(d.getTime()) ? '' : monthYear.format(d)
}

function SkeletonRows() {
  return (
    <ul className="repo-list repo-list--skeleton" aria-hidden="true">
      {Array.from({ length: 6 }, (_, i) => (
        <li key={i} className="repo-skeleton">
          <span className="repo-skeleton__bar repo-skeleton__bar--name" />
          <span className="repo-skeleton__bar" />
        </li>
      ))}
    </ul>
  )
}

function RepoList({ repos, loading, error, onRetry, totalCount }) {
  const [showAll, setShowAll] = useState(false)

  if (loading) {
    return (
      <div aria-busy="true">
        <p className="visually-hidden" role="status">
          Loading repositories…
        </p>
        <SkeletonRows />
      </div>
    )
  }

  if (error) {
    return (
      <div className="repo-error" role="alert">
        <p>Couldn't load GitHub repositories right now.</p>
        <div className="repo-error__actions">
          <Button variant="secondary" onClick={onRetry}>
            Retry
          </Button>
          <ExternalLink href={githubProfile} newTabHint>
            View on GitHub <span aria-hidden="true">↗</span>
          </ExternalLink>
        </div>
      </div>
    )
  }

  if (!repos.length) {
    return <p className="repo-empty">No repositories match these filters.</p>
  }

  const visible = showAll ? repos : repos.slice(0, INITIAL_ROWS)
  const hidden = repos.length - visible.length

  return (
    <>
      <div className="repo-head" aria-hidden="true">
        <span>Name</span>
        <span>Description</span>
        <span>Language</span>
        <span className="repo-head__num">Stars</span>
        <span className="repo-head__num">Updated</span>
      </div>
      <ul className="repo-list">
        {visible.map((repo) => {
          const updated = formatUpdated(repo.updated_at)
          return (
            <li key={repo.id}>
              <a className="repo-row" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <span className="repo-row__name">{repo.name}</span>
                <span className="repo-row__desc">{repo.description || '—'}</span>
                <span className="repo-row__lang">{repo.language || '—'}</span>
                <span className="repo-row__stars">
                  {repo.stargazers_count > 0 && (
                    <>
                      <span aria-hidden="true">★ </span>
                      {repo.stargazers_count}
                      <span className="visually-hidden"> stars</span>
                    </>
                  )}
                </span>
                <span className="repo-row__updated">
                  {updated && (
                    <>
                      <span className="visually-hidden">Updated </span>
                      {updated}
                    </>
                  )}
                </span>
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          )
        })}
      </ul>

      <div className="repo-more">
        {hidden > 0 && (
          <Button variant="secondary" onClick={() => setShowAll(true)}>
            Show all {repos.length}
          </Button>
        )}
        {totalCount > 0 && (
          <ExternalLink href={githubProfile} className="btn btn--text" newTabHint>
            GitHub profile <span aria-hidden="true">↗</span>
          </ExternalLink>
        )}
      </div>
    </>
  )
}

export default RepoList
