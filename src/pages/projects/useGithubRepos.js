import { useCallback, useEffect, useState } from 'react'
import { githubReposApi } from '../../data/site'
import { categorizeRepo } from './data'

const CACHE_KEY = 'gh-repos-v1'

const readCache = () => {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const writeCache = (repos) => {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(repos))
  } catch {
    /* storage full or blocked — not critical */
  }
}

// Keep only what the page renders (smaller cache, stable shape).
const toRepo = (repo) => ({
  id: repo.id,
  name: repo.name,
  description: repo.description,
  html_url: repo.html_url,
  language: repo.language,
  stargazers_count: repo.stargazers_count,
  updated_at: repo.updated_at,
  categories: categorizeRepo(repo),
})

// Public repos (no forks, no profile README repo). Cached per session to avoid
// the unauthenticated rate limit on re-visits. `retry()` refetches.
export default function useGithubRepos() {
  const [state, setState] = useState(() => {
    const cached = readCache()
    return cached
      ? { repos: cached, loading: false, error: null, attempt: 0 }
      : { repos: [], loading: true, error: null, attempt: 0 }
  })

  const { loading, attempt } = state

  useEffect(() => {
    if (!loading) return undefined
    const controller = new AbortController()

    fetch(githubReposApi, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub responded ${response.status}`)
        return response.json()
      })
      .then((data) => {
        const repos = data
          .filter((repo) => !repo.fork && repo.name !== 'enesgunumdogdu')
          .map(toRepo)
        writeCache(repos)
        setState((s) => ({ ...s, repos, loading: false, error: null }))
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setState((s) => ({ ...s, loading: false, error: err.message || 'Failed to fetch repositories' }))
      })

    return () => controller.abort()
  }, [loading, attempt])

  const retry = useCallback(() => {
    setState((s) => ({ ...s, loading: true, error: null, attempt: s.attempt + 1 }))
  }, [])

  return { repos: state.repos, loading: state.loading, error: state.error, retry }
}
