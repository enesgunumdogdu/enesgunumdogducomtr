function Projects() {
  const projects = [
    {
      title: 'E-Ticaret Platformu',
      description: 'Modern bir e-ticaret çözümü. Ödeme entegrasyonu, sepet yönetimi ve kullanıcı paneli içerir.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: '🛒',
      link: '#'
    },
    {
      title: 'Task Yönetim Uygulaması',
      description: 'Ekipler için Kanban tarzı proje yönetim aracı. Gerçek zamanlı güncellemeler ve işbirliği özellikleri.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      icon: '📋',
      link: '#'
    },
    {
      title: 'Sosyal Medya Dashboard',
      description: 'Çoklu platform analitik dashboard. Sosyal medya performansını tek yerden takip edin.',
      tags: ['React', 'Chart.js', 'API Integration'],
      icon: '📊',
      link: '#'
    },
    {
      title: 'Blog Platformu',
      description: 'SEO dostu, hızlı ve modern blog platformu. Markdown desteği ve özel temalar.',
      tags: ['Next.js', 'MDX', 'Tailwind CSS'],
      icon: '✍️',
      link: '#'
    },
    {
      title: 'Hava Durumu Uygulaması',
      description: '7 günlük hava tahmini, konum bazlı tahminler ve güzel animasyonlar.',
      tags: ['React', 'Weather API', 'Geolocation'],
      icon: '🌤️',
      link: '#'
    },
    {
      title: 'Portföy Websitesi',
      description: 'Bu websitesi! Modern tasarım, mor gradient efektler ve responsive yapı.',
      tags: ['React', 'Vite', 'CSS3'],
      icon: '🎨',
      link: '#'
    }
  ]

  return (
    <div className="page">
      <section className="section">
        <h1 className="section-title">
          <span className="gradient-text">Projelerim</span>
        </h1>
        <p className="section-subtitle">
          Üzerinde çalıştığım bazı projeler ve çalışmalar
        </p>

        <div className="cards-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                {project.icon}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="project-card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <div className="project-content">
            <h3 className="project-title">Daha Fazla Proje Yolda!</h3>
            <p className="project-description">
              Sürekli olarak yeni projeler üzerinde çalışıyorum.
              GitHub profilimi ziyaret ederek tüm çalışmalarımı görebilirsiniz.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
            >
              GitHub'ı Ziyaret Et
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
