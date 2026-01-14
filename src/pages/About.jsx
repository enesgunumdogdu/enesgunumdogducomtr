function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Python', 'HTML5', 'CSS3', 'Tailwind CSS', 'MongoDB',
    'PostgreSQL', 'Git', 'Docker', 'AWS', 'Figma'
  ]

  return (
    <div className="page">
      <section className="section">
        <h1 className="section-title">
          <span className="gradient-text">Hakkımda</span>
        </h1>
        <p className="section-subtitle">
          Kendimi ve yolculuğumu tanıyın
        </p>

        <div className="about-content">
          <div className="about-image">
            👨‍💻
          </div>

          <div className="about-text">
            <h2>
              Merhaba! Ben <span className="gradient-text">Enes Gunumdogdu</span>
            </h2>
            <p>
              Yazılım dünyasına olan tutkum ile modern teknolojileri kullanarak
              yenilikçi çözümler üretiyorum. Her projemde kullanıcı deneyimini
              ön planda tutarak, hem estetik hem de fonksiyonel ürünler ortaya
              koyuyorum.
            </p>
            <p>
              Full-stack geliştirme konusunda uzmanlaşmış biriyim. Frontend'de
              React ve Next.js, backend'de Node.js ve Python ile çalışıyorum.
              Sürekli öğrenmeye ve kendimi geliştirmeye açık bir yapıya sahibim.
            </p>
            <p>
              Boş zamanlarımda yeni teknolojileri keşfetmeyi, açık kaynak
              projelere katkıda bulunmayı ve blog yazıları yazmayı seviyorum.
            </p>

            <div className="skills">
              {skills.map((skill, index) => (
                <span key={index} className="skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Deneyim & Eğitim</h2>
        <div className="cards-grid">
          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Yazılım Geliştirici</h3>
              <p className="project-description">
                Full-stack web uygulamaları geliştirme, API tasarımı
                ve veritabanı yönetimi konularında deneyim.
              </p>
              <div className="project-tags">
                <span className="tag">Full-Stack</span>
                <span className="tag">Web</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Freelance Projeler</h3>
              <p className="project-description">
                Çeşitli sektörlerde müşteriler için özelleştirilmiş
                web çözümleri ve uygulamalar.
              </p>
              <div className="project-tags">
                <span className="tag">Freelance</span>
                <span className="tag">Consultant</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Sürekli Öğrenme</h3>
              <p className="project-description">
                Online kurslar, sertifikalar ve kendi kendine öğrenme
                ile sürekli gelişim.
              </p>
              <div className="project-tags">
                <span className="tag">Udemy</span>
                <span className="tag">Coursera</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
