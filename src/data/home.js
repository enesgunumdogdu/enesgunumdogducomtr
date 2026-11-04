// Home page content (carried over verbatim from the previous Home.jsx; only the
// presentation changed). Shared identity/apps live in ./site.js.

// Statement under the hero (words light up on scroll). Kept free of
// day-job/after-hours framing: everything on the site is presented as personal
// work, independent of the current employer.
export const statement =
  'I like software that stays calm: backend services that hold up under load, and small apps that do one thing well. This site collects what I have made so far, from Java and Spring Boot systems to apps for Apple platforms and algorithm lessons on YouTube.'

export const stats = [
  { value: '5.0', label: 'App Store rating, Cartoon Weather' },
  { value: '50K+', label: 'YouTube views' },
  { value: '25+', label: 'Freelance projects, 2021 to 2025' },
  { value: '5', label: 'Personal apps' },
]

// "How I build" lanes (formerly the bento grid).
export const lanes = [
  {
    index: '01',
    area: 'Backend Systems',
    title: 'Systems that stay calm under load.',
    body: 'Microservices, message queues and the plumbing between them. Mostly Java and Spring Boot, with PostgreSQL and Redis underneath.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Keycloak', 'Redis'],
  },
  {
    index: '02',
    area: 'Cloud & DevOps',
    title: 'Everything in a container.',
    body: 'Reproducible builds and deploys, so the code behaves the same on every machine it runs on.',
    tags: ['Docker', 'GCP', 'Terraform', 'CI/CD'],
  },
  {
    index: '03',
    area: 'Apple Platforms',
    title: 'Small apps with a point of view.',
    body: 'Native Swift and SwiftUI. A weather app with cartoon characters, a season tracker, a window manager for the Mac.',
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


