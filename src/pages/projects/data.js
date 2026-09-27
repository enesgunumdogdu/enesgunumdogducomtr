// Projects page data (Dev B). The 4 apps come from src/data/site.js; the other
// 4 featured items live here. Content carried over verbatim from the old
// Projects.jsx featuredProjects array.

export const otherProjects = [
  {
    id: 'fitness-microservice',
    title: 'Fitness Microservice',
    description:
      'Cloud-native fitness platform with Spring Cloud, OAuth2 via Keycloak, AI-powered recommendations.',
    tags: ['Java', 'Spring Boot', 'RabbitMQ', 'Keycloak'],
    github: 'https://github.com/enesgunumdogdu/fitness-microservice',
    live: 'https://aeg.fitness',
    status: 'live',
    statusLabel: 'LIVE',
  },
  {
    id: 'guzel-hatirla',
    title: 'Guzel Hatirla',
    description:
      'A digital memory garden for collecting and sharing beautiful moments with loved ones.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/enesgunumdogdu/guzelhatirlacom',
    live: 'https://guzelhatirla.com',
    status: 'live',
    statusLabel: 'LIVE',
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management',
    description:
      'Full-stack hospital system with layered architecture, Spring Security, and Vue.js 3 SPA.',
    tags: ['Java', 'Spring Boot', 'Vue.js', 'Docker'],
    github: 'https://github.com/enesgunumdogdu/hospital-management',
  },
]

export const youtubeProject = {
  id: 'youtube',
  title: 'YouTube Channel',
  description: 'Educational content on Data Structures and Algorithms. 50,000+ views.',
  tags: ['Education', 'DSA'],
  metric: { value: '50K+', label: 'Views' },
}

/*
  Language swatches: a restrained, token-only ramp assigned by rank (most-used
  language first) so the top languages are always distinct. Accent only on #1;
  no tints (ui review #12). Everything past the ramp uses the lightest step.
*/
export const languageRamp = [
  'var(--accent)',
  'var(--text-primary)',
  'var(--text-secondary)',
  'var(--text-muted)',
  'var(--text-dim)',
  'var(--border-strong)',
  'var(--text-disabled)',
]

export const languageRest = 'var(--border-light)'

export const colorForRank = (rank) => languageRamp[rank] || languageRest

export const categorizeRepo = (repo) => {
  const topics = repo.topics || []
  const lang = repo.language?.toLowerCase() || ''
  const name = repo.name.toLowerCase()
  const desc = (repo.description || '').toLowerCase()
  const categories = []

  if (
    topics.some((t) => ['spring-boot', 'api', 'microservices', 'postgresql', 'mongodb', 'docker', 'keycloak', 'oauth2'].includes(t)) ||
    (lang === 'java' && (name.includes('api') || name.includes('management') || desc.includes('api'))) ||
    topics.includes('dotnet') ||
    topics.includes('asp-net-core')
  ) {
    categories.push('Backend')
  }
  if (
    topics.some((t) => ['react', 'vue', 'nextjs', 'flask', 'django', 'web', 'mvc', 'html'].includes(t)) ||
    lang === 'html' ||
    name.includes('web') ||
    (topics.includes('csharp') && topics.includes('mvc'))
  ) {
    categories.push('Web')
  }
  if (
    topics.some((t) => ['machine-learning', 'deep-learning', 'keras', 'cnn', 'image-classification', 'keras-tensorflow', 'random-forest-classifier'].includes(t)) ||
    name.includes('ml') ||
    name.includes('cnn') ||
    desc.includes('machine learning') ||
    desc.includes('neural') ||
    name.includes('emotion') ||
    name.includes('classifier')
  ) {
    categories.push('AI/ML')
  }
  if (
    topics.some((t) => ['android', 'ios', 'mobile', 'swift', 'kotlin', 'libgdx-game'].includes(t)) ||
    lang === 'swift' ||
    lang === 'kotlin'
  ) {
    categories.push('Mobile')
  }
  if (topics.some((t) => ['docker', 'terraform', 'kubernetes', 'ci-cd', 'devops', 'gcp', 'aws'].includes(t)) || lang === 'hcl') {
    categories.push('DevOps')
  }
  if (
    topics.some((t) => ['discord-bot', 'bot', 'automation', 'tkinter', 'gui-application'].includes(t)) ||
    name.includes('bot') ||
    name.includes('clicker') ||
    name.includes('speech')
  ) {
    categories.push('Tools')
  }
  if (categories.length === 0) categories.push('Other')
  return categories
}

export const filterCategories = [
  { id: 'all', label: 'All' },
  { id: 'Backend', label: 'Backend' },
  { id: 'Web', label: 'Web' },
  { id: 'AI/ML', label: 'AI/ML' },
  { id: 'Mobile', label: 'Mobile' },
  { id: 'DevOps', label: 'DevOps' },
  { id: 'Tools', label: 'Tools' },
  { id: 'Other', label: 'Other' },
]
