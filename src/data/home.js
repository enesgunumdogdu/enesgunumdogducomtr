// Home page content (carried over verbatim from the previous Home.jsx; only the
// presentation changed). Shared identity/apps live in ./site.js.

export const hero = {
  tagline: ['Software engineer by day.', 'iOS apps, for the fun of it.'],
  // Sub-copy, sentence order changed so role + Huawei read first on mobile.
  // Original: "Backend engineer and iOS developer. The guy behind Cartoon Weather
  // (5.0 stars, 19 languages) and 50K+ views worth of algorithm breakdowns on
  // YouTube. Currently an Assistant Software Engineer at Huawei."
  cta: { label: "See what I've shipped", to: '/projects' },
}

export const stats = [
  { number: '5.0', suffix: '', label: 'App Store', sub: 'Cartoon Weather' },
  { number: '50K', suffix: '+', label: 'Views', sub: 'YouTube' },
  { number: '25', suffix: '+', label: 'Projects', sub: 'Freelance' },
  { number: '4', suffix: '', label: 'Apps', sub: 'Shipped & Coming' },
]

// "How I build" lanes (formerly the bento grid).
export const lanes = [
  {
    index: '01',
    area: 'Backend Systems',
    title: 'Microservices that talk to each other without drama.',
    body: "Event-driven architectures that handle the 3am spike you didn't plan for. Java and Spring Boot, because some things just work.",
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Keycloak', 'Redis'],
  },
  {
    index: '02',
    area: 'Cloud & DevOps',
    title: 'I containerize everything.',
    body: 'Not because it\'s trendy — because I got tired of "works on my machine" conversations.',
    tags: ['Docker', 'GCP', 'Terraform', 'CI/CD'],
  },
  {
    index: '03',
    area: 'iOS Apps',
    title: 'I build the apps I wish existed.',
    body: 'A weather app with cartoon characters because weather apps are boring.',
    tags: ['Swift', 'SwiftUI', 'WidgetKit', 'iOS'],
  },
]

// Full tech stack (all 20 items from the old marquee), grouped for scanning.
export const techStack = [
  { group: 'Backend', items: ['Java', 'Spring Boot', 'Spring Cloud', 'Microservices', 'REST APIs', 'Keycloak', 'RabbitMQ', 'Python'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { group: 'Apps & web', items: ['Swift', 'SwiftUI', 'TypeScript', 'React', 'Vue.js'] },
  { group: 'Infra', items: ['Docker', 'GCP', 'Terraform'] },
]


