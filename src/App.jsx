import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/animations/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import CartoonWeatherPrivacyPolicy from './pages/CartoonWeatherPrivacyPolicy'
import CartoonWeatherTermsOfUse from './pages/CartoonWeatherTermsOfUse'
import SeasonsPrivacyPolicy from './pages/SeasonsPrivacyPolicy'
import SeasonsTermsOfUse from './pages/SeasonsTermsOfUse'
import MagnetifyPrivacyPolicy from './pages/MagnetifyPrivacyPolicy'
import MagnetifyTermsOfUse from './pages/MagnetifyTermsOfUse'
import NotFound from './pages/NotFound'
import './App.css'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/cartoon-weather-privacy-policy" element={<PageTransition><CartoonWeatherPrivacyPolicy /></PageTransition>} />
        <Route path="/cartoon-weather-terms-of-use" element={<PageTransition><CartoonWeatherTermsOfUse /></PageTransition>} />
        <Route path="/seasons-privacy-policy" element={<PageTransition><SeasonsPrivacyPolicy /></PageTransition>} />
        <Route path="/seasons-terms-of-use" element={<PageTransition><SeasonsTermsOfUse /></PageTransition>} />
        <Route path="/magnetify-privacy-policy" element={<PageTransition><MagnetifyPrivacyPolicy /></PageTransition>} />
        <Route path="/magnetify-terms-of-use" element={<PageTransition><MagnetifyTermsOfUse /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </MotionConfig>
  )
}

export default App
