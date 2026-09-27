import { useMemo, useState } from 'react'
import { ClosingCTA, SectionHeader } from '../components/ui'
import useDocumentTitle from '../hooks/useDocumentTitle'
import FeaturedApps from './projects/FeaturedApps'
import { BackendProjects, Teaching } from './projects/FeaturedProjects'
import LanguageBar from './projects/LanguageBar'
import RepoFilters from './projects/RepoFilters'
import RepoList from './projects/RepoList'
import useGithubRepos from './projects/useGithubRepos'
import './Projects.css'

// Indices match the section headers below (01–04; 05 is the closing CTA).
const jumpLinks = [
  { href: '#apps', index: '01', label: 'Apps' },
  { href: '#backend', index: '02', label: 'Backend & web' },
  { href: '#teaching', index: '03', label: 'Teaching' },
  { href: '#oss', index: '04', label: 'Open source' },
]

function Projects() {
  useDocumentTitle('Work')

  const { repos, loading, error, retry } = useGithubRepos()
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeLanguages, setActiveLanguages] = useState([])

  const toggleLanguage = (lang) => {
    setActiveLanguages((prev) => (prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]))
  }

  const clearFilters = () => {
    setActiveCategory('all')
    setActiveLanguages([])
  }

  const langDistribution = useMemo(() => {
    const counts = {}
    repos.forEach((r) => {
      if (r.language) counts[r.language] = (counts[r.language] || 0) + 1
    })
    const total = Object.values(counts).reduce((a, b) => a + b, 0)
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([lang, count]) => ({ lang, count, pct: (count / total) * 100 }))
  }, [repos])

  const filteredRepos = useMemo(
    () =>
      repos.filter((repo) => {
        const categoryMatch = activeCategory === 'all' || repo.categories.includes(activeCategory)
        const languageMatch = activeLanguages.length === 0 || activeLanguages.includes(repo.language)
        return categoryMatch && languageMatch
      }),
    [repos, activeCategory, activeLanguages],
  )

  const ready = !loading && !error
  const pageLabel = ready && repos.length ? `Work / ${repos.length} repositories` : 'Work'

  return (
    <div className="page">
      {/* ---------- Page header ---------- */}
      <section className="section work-header" aria-labelledby="work-title">
        <SectionHeader
          as="h1"
          id="work-title"
          label={pageLabel}
          title="Things I've built and shipped."
          lede="A mix of backend systems, iOS apps, and open-source projects."
        />
        <nav aria-label="On this page">
          <ul className="work-jump">
            {jumpLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>
                  <span className="work-jump__index">{l.index}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <FeaturedApps />
      <BackendProjects />
      <Teaching />

      {/* ---------- Open source ---------- */}
      <section id="oss" className="section section--flush-top" aria-labelledby="oss-title">
        <SectionHeader
          index="04"
          label="Open source"
          title="GitHub repositories."
          id="oss-title"
          lede="All public repositories. Filter by category or language."
        />

        {ready && <LanguageBar distribution={langDistribution} repoCount={repos.length} />}

        {ready && repos.length > 0 && (
          <RepoFilters
            repos={repos}
            languages={langDistribution}
            activeCategory={activeCategory}
            onCategory={setActiveCategory}
            activeLanguages={activeLanguages}
            onToggleLanguage={toggleLanguage}
            onClear={clearFilters}
            shown={filteredRepos.length}
          />
        )}

        <RepoList
          key={`${activeCategory}|${activeLanguages.join(',')}`}
          repos={filteredRepos}
          loading={loading}
          error={error}
          onRetry={retry}
          totalCount={repos.length}
        />
      </section>

      {/* ---------- Closing CTA (shared) ---------- */}
      <ClosingCTA index="05" title="Want to collaborate?" id="work-cta-title" className="section--flush-top" />
    </div>
  )
}

export default Projects
