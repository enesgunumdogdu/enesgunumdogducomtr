// Single source of truth for identity, contact, socials and the apps list.
// Content is carried over verbatim from Home.jsx / Projects.jsx / Contact.jsx.
// Brand tint colours are the ONLY hex values allowed outside index.css
// (cto-decisions §16).

export const SITE_URL = 'https://enesgunumdogdu.com.tr'

export const person = {
  name: 'Enes Günümdoğdu',
  shortName: 'Enes',
  signoff: '3nes', // footer sign-off only (cto-decisions §1)
  role: 'Backend Engineer & iOS Developer',
  roleLine: 'Backend engineer · iOS developer', // mono hero/meta label
  currentPosition: { title: 'Assistant Software Engineer', company: 'Huawei' },
  // Never rendered as visible text; assembled from parts so the plain address
  // isn't sitting in the bundle for scrapers.
  get email() { return ['enesgunumdogdu0', 'gmail.com'].join('@') },
  get emailHref() { return `mailto:${this.email}` },
  location: 'İstanbul, TR', // short form (nav sheet, footer, meta)
  locationLong: 'İstanbul, Turkey', // Contact location block
  timezone: 'UTC+3 · Turkey Time',
  replyTime: 'Reply usually under 24 hours',
}

// Order = display order. `id` doubles as the icon key (GitHub / LinkedIn /
// YouTube via @mui/icons-material or inline SVG; Email via MailOutline).
export const socials = [
  { id: 'github', label: 'GitHub', handle: 'enesgunumdogdu', href: 'https://github.com/enesgunumdogdu' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/enesgunumdogdu', href: 'https://www.linkedin.com/in/enesgunumdogdu/' },
  { id: 'youtube', label: 'YouTube', handle: '@enesgunumdogdu', href: 'https://youtube.com/@enesgunumdogdu' },
]

// Contact page list (Email + the three socials), matches Contact.jsx socialLinks.
export const contactLinks = [
  { id: 'email', label: 'Email', handle: 'Email me', href: person.emailHref },
  ...socials,
]

export const githubProfile = socials[0].href
export const youtubeChannel = socials[2].href
export const githubReposApi =
  'https://api.github.com/users/enesgunumdogdu/repos?per_page=100&sort=updated'

// Primary nav (cto-decisions §2): sentence case, "Work" → /projects.
export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

/*
  Apps (shipped / coming). Merged from Home.jsx (apps array) and Projects.jsx
  (featuredProjects[0..3]).
  - description : Projects.jsx copy (canonical; Magnetify drift resolved to the
                  Projects version per cto-decisions §13 — it has "16 positions"
                  and the AppKit tag).
  - summary     : Home.jsx copy, kept verbatim for content parity (shorter card
                  text). Magnetify summary = Projects copy (drift resolved).
  - tags        : Projects.jsx tags (used on Home too; "19 languages" is shown as meta).
  - status      : 'live' | 'oss' | 'soon' → .status--live/.status--oss/.status--soon
  - tint        : flat light field behind the icon; color = sampled icon average.
  - legal       : routes of the in-app privacy/terms pages (URLs are a contract).
*/
export const apps = [
  {
    id: 'cartoon-weather',
    name: 'Cartoon Weather',
    icon: '/logos/opt/cartoon-weather.webp',
    platform: 'iOS',
    status: 'live',
    statusLabel: 'LIVE',
    rating: '5.0',
    ratingLabel: '5.0 ★',
    languages: 19,
    pullquote: "Weather apps are boring. This one isn't.",
    description:
      '7 animated character themes with full-screen video wallpapers. Multi-location tracking, widgets, AQI, 19 languages.',
    summary:
      '7 animated character themes, full-screen video wallpapers, multi-location tracking. 19 languages.',
    tags: ['Swift', 'iOS', 'SwiftUI'],
    appStoreUrl: 'https://apps.apple.com/tr/app/cartoon-weather-fun-forecast/id6757344541',
    githubUrl: null,
    href: 'https://apps.apple.com/tr/app/cartoon-weather-fun-forecast/id6757344541',
    linkLabel: 'View on App Store',
    color: '#74B2E4',
    tint: '#EEF5FB',
    legal: {
      appName: 'Cartoon Weather',
      privacy: '/cartoon-weather-privacy-policy',
      terms: '/cartoon-weather-terms-of-use',
    },
  },
  {
    id: 'seasons',
    name: 'Seasons',
    icon: '/logos/opt/seasons.webp',
    platform: 'iOS', // per SeasonsTermsOfUse: "available on iOS devices"
    status: 'live',
    statusLabel: 'LIVE',
    rating: '5.0',
    ratingLabel: '5.0 ★',
    description:
      'Real-time season tracker with moon phases, solstice countdowns, 5 themes, 85+ countries.',
    summary:
      'Real-time season tracker with moon phases, solstice countdowns, and stunning widgets. 5 themes, 85+ countries.',
    tags: ['Swift', 'SwiftUI', 'WidgetKit'],
    appStoreUrl: 'https://apps.apple.com/us/app/seasons-solstice-tracker/id6758998537',
    githubUrl: null,
    href: 'https://apps.apple.com/us/app/seasons-solstice-tracker/id6758998537',
    linkLabel: 'View on App Store',
    color: '#816B30',
    tint: '#EFEDE6',
    legal: {
      appName: 'Seasons',
      privacy: '/seasons-privacy-policy',
      terms: '/seasons-terms-of-use',
    },
  },
  {
    id: 'magnetify',
    name: 'Magnetify',
    icon: '/logos/opt/magnetify.webp',
    platform: 'macOS',
    status: 'oss',
    statusLabel: 'OPEN SOURCE',
    languages: 33,
    description:
      'Professional window manager for macOS. Drag-to-snap, 16 positions, keyboard shortcuts, workspace profiles, 33 languages. Open source.',
    summary:
      'Professional window manager for macOS. Drag-to-snap, 16 positions, keyboard shortcuts, workspace profiles, 33 languages. Open source.',
    // Home.jsx had: 'Professional window manager for macOS. Drag-to-snap, keyboard
    // shortcuts, workspace profiles, app rules. 33 languages. Open source.'
    // ("app rules" only appears there — owner may want it back.)
    tags: ['Swift', 'SwiftUI', 'macOS', 'AppKit'],
    appStoreUrl: null,
    githubUrl: 'https://github.com/enesgunumdogdu/magnetify',
    href: 'https://github.com/enesgunumdogdu/magnetify',
    linkLabel: 'View on GitHub',
    color: '#194369',
    tint: '#E3E8ED',
    legal: {
      appName: 'Magnetify',
      privacy: '/magnetify-privacy-policy',
      terms: '/magnetify-terms-of-use',
    },
  },
  {
    id: 'ns-ai',
    name: 'ns-ai',
    icon: '/logos/opt/ns-ai.webp',
    platform: 'iOS',
    status: 'soon',
    statusLabel: 'SOON',
    description:
      'AI Photo Studio for iOS. Text-to-image, image-to-image, text-to-video, and image-to-video — all in one creative tool.',
    summary:
      'AI Photo Studio for iOS. Text-to-image, image-to-image, text-to-video, and image-to-video — all in one creative tool.',
    tags: ['Swift', 'SwiftUI', 'Firebase', 'AI'],
    appStoreUrl: null,
    githubUrl: null,
    href: null,
    linkLabel: null,
    color: '#241325',
    tint: '#E4E2E4',
    legal: {
      appName: 'ns-ai · AI Photo Studio',
      privacy: '/nsai-privacy-policy',
      terms: '/nsai-terms-of-use',
    },
  },
]

// Flat list for the footer "Legal" group / sitemap.
export const legalPages = apps.flatMap((app) => [
  { appId: app.id, appName: app.legal.appName, kind: 'privacy', label: 'Privacy', to: app.legal.privacy },
  { appId: app.id, appName: app.legal.appName, kind: 'terms', label: 'Terms', to: app.legal.terms },
])

// Work history, newest first — single source for About (full timeline) and
// Home (experiences.slice(0, 3)). Logos are the optimized /logos/opt copies;
// logoSize = intrinsic [width, height] for the <img> attributes.
export const experiences = [
  {
    logo: '/logos/opt/huawei.webp',
    logoSize: [230, 234],
    company: 'Huawei',
    role: 'Assistant Software Engineer',
    period: '2026 — Present',
    current: true,
    description:
      'Joined Huawei as a full-time Assistant Software Engineer, building production software within a large-scale engineering organization.',
    tags: [],
    link: 'https://www.huawei.com',
    linkLabel: 'huawei.com',
  },
  {
    logo: '/logos/opt/avevrak.webp',
    logoSize: [32, 30],
    company: 'Avevrak.com',
    role: 'Software Developer',
    period: '2025',
    description:
      'Built an AI-powered document generation system using LLMs and vector search. Cloud pipelines on GCP with 95% accuracy in automated tagging.',
    tags: ['GCP', 'Python', 'LLM', 'FAISS'],
    link: 'https://avevrak.com',
    linkLabel: 'avevrak.com',
  },
  {
    logo: '/logos/opt/toucancodelabs.webp',
    logoSize: [256, 61],
    company: 'Toucan Code Labs',
    role: 'Software Developer',
    period: '2023 — 2024',
    description:
      'Developed microservices for the RoboNimbus mobile platform. Designed RESTful APIs and improved system reliability through performance optimization.',
    tags: ['Microservices', 'Mobile', 'API'],
    link: 'https://toucancodelabs.com',
    linkLabel: 'toucancodelabs.com',
  },
  {
    logo: '/logos/opt/bionluk.webp',
    logoSize: [200, 200],
    company: 'Bionluk.com',
    role: 'Freelance Developer',
    period: '2021 — 2025',
    description:
      'Completed 25+ client projects ranging from backend APIs to full-stack web applications. Specialized in Java, Python, and custom solutions.',
    tags: ['Freelance', 'Java', 'Python'],
    link: 'https://bionluk.com/enesgunumdogdu',
    linkLabel: 'bionluk.com/enesgunumdogdu',
  },
]

// Shared closing call-to-action copy (<ClosingCTA />, Home + About).
export const closingCta = {
  label: 'Contact',
  title: "Want to talk? I'm listening.",
  lede: 'Always up for a conversation about backend, iOS, or algorithms',
  reply: person.replyTime, // 'Reply usually under 24 hours'
}

export const getApp = (id) => apps.find((a) => a.id === id)
