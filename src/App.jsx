import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import CartoonWeatherPrivacyPolicy from './pages/CartoonWeatherPrivacyPolicy'
import CartoonWeatherTermsOfUse from './pages/CartoonWeatherTermsOfUse'
import SeasonsPrivacyPolicy from './pages/SeasonsPrivacyPolicy'
import SeasonsTermsOfUse from './pages/SeasonsTermsOfUse'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cartoon-weather-privacy-policy" element={<CartoonWeatherPrivacyPolicy />} />
            <Route path="/cartoon-weather-terms-of-use" element={<CartoonWeatherTermsOfUse />} />
            <Route path="/seasons-privacy-policy" element={<SeasonsPrivacyPolicy />} />
            <Route path="/seasons-terms-of-use" element={<SeasonsTermsOfUse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
