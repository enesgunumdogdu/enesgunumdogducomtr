import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>

        <div className="hero-content fade-in">
          <h1 className="hero-title">
            Merhaba, Ben{' '}
            <span className="gradient-text">Enes</span>
          </h1>
          <p className="hero-subtitle">
            Yazılım geliştirici ve teknoloji tutkunu. Modern web teknolojileri
            ile yaratıcı ve kullanıcı dostu dijital deneyimler tasarlıyorum.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              Projelerimi Gör
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">
          <span className="gradient-text">Neler Yapıyorum?</span>
        </h2>
        <p className="section-subtitle">
          Full-stack geliştirme, UI/UX tasarım ve modern teknolojilerle çalışıyorum
        </p>

        <div className="cards-grid">
          <div className="project-card">
            <div className="project-image">
              💻
            </div>
            <div className="project-content">
              <h3 className="project-title">Web Geliştirme</h3>
              <p className="project-description">
                React, Next.js ve modern JavaScript framework'leri ile
                performanslı web uygulamaları geliştiriyorum.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Next.js</span>
                <span className="tag">TypeScript</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              🎨
            </div>
            <div className="project-content">
              <h3 className="project-title">UI/UX Tasarım</h3>
              <p className="project-description">
                Kullanıcı odaklı, estetik ve işlevsel arayüzler
                tasarlayarak mükemmel kullanıcı deneyimleri sunuyorum.
              </p>
              <div className="project-tags">
                <span className="tag">Figma</span>
                <span className="tag">CSS</span>
                <span className="tag">Tailwind</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              🚀
            </div>
            <div className="project-content">
              <h3 className="project-title">Backend Geliştirme</h3>
              <p className="project-description">
                Node.js, Python ve veritabanı teknolojileri ile
                güçlü ve ölçeklenebilir API'lar oluşturuyorum.
              </p>
              <div className="project-tags">
                <span className="tag">Node.js</span>
                <span className="tag">Python</span>
                <span className="tag">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
