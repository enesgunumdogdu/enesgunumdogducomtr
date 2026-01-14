function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        {currentYear} <span className="gradient-text">Enes Gunumdogdu</span>. Tüm hakları saklıdır.
      </p>
    </footer>
  )
}

export default Footer
