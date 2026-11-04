// Home page content. Shared identity/apps/experience live in ./site.js.
//
// Order of emphasis: a neutral personal profile and his own projects first,
// personal apps kept modest and platform-neutral, the day job limited to the
// single line the site already had. Every claim here is sourced from the rest
// of the site (About, Work page, experience entries).

// One-line hero intro under the name.
export const heroIntro =
  'Software engineer. I like building things end to end: backend services, mobile apps and the small tools in between.'

// Short paragraph after the hero.
export const statement =
  'I like software that stays calm: services that hold up under load and small apps that do one thing well. This site collects what I have made so far, from Java and Spring Boot systems to side projects, open-source code and algorithm lessons on YouTube.'

// "What I work on" areas. Not a sequence, so no numbering.
export const lanes = [
  {
    id: 'backend',
    area: 'Backend systems',
    title: 'Services that stay calm under load.',
    body: 'Microservices, message queues and the plumbing between them. Mostly Java and Spring Boot, with PostgreSQL and Redis underneath, shipped in containers.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'RabbitMQ', 'Docker', 'GCP'],
  },
  {
    id: 'apps',
    area: 'Mobile & apps',
    title: 'Small apps with a point of view.',
    body: 'Native apps and desktop tools I build in my own time: a weather app with cartoon characters, a season tracker, an invitation maker, a window manager.',
    tags: ['Mobile', 'Native UI', 'Widgets'],
  },
  {
    id: 'teaching',
    area: 'Teaching',
    title: 'Algorithms, explained plainly.',
    body: 'Videos on data structures and algorithms for students and developers, past 50,000 views.',
    tags: ['YouTube', 'DSA'],
    link: 'youtube',
  },
]
