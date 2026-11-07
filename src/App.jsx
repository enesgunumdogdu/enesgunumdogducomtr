import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/animations/PageTransition'
import Home from './pages/Home'
import './App.css'

// Everything except Home is code-split (cto-decisions §15).
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))
const CartoonWeatherPrivacyPolicy = lazy(() => import('./pages/CartoonWeatherPrivacyPolicy'))
const CartoonWeatherTermsOfUse = lazy(() => import('./pages/CartoonWeatherTermsOfUse'))
const SeasonsPrivacyPolicy = lazy(() => import('./pages/SeasonsPrivacyPolicy'))
const SeasonsTermsOfUse = lazy(() => import('./pages/SeasonsTermsOfUse'))
const MagnetifyPrivacyPolicy = lazy(() => import('./pages/MagnetifyPrivacyPolicy'))
const MagnetifyTermsOfUse = lazy(() => import('./pages/MagnetifyTermsOfUse'))
const NsAiPrivacyPolicy = lazy(() => import('./pages/NsAiPrivacyPolicy'))
const NsAiTermsOfUse = lazy(() => import('./pages/NsAiTermsOfUse'))
const DavetlyPrivacyPolicy = lazy(() => import('./pages/DavetlyPrivacyPolicy'))
const DavetlyTermsOfUse = lazy(() => import('./pages/DavetlyTermsOfUse'))
const LumoraPrivacyPolicy = lazy(() => import('./pages/LumoraPrivacyPolicy'))
const LumoraTermsOfUse = lazy(() => import('./pages/LumoraTermsOfUse'))
const NotFound = lazy(() => import('./pages/NotFound'))

const routes = [
  ['/', <Home />],
  ['/about', <About />],
  ['/projects', <Projects />],
  ['/contact', <Contact />],
  ['/cartoon-weather-privacy-policy', <CartoonWeatherPrivacyPolicy />],
  ['/cartoon-weather-terms-of-use', <CartoonWeatherTermsOfUse />],
  ['/seasons-privacy-policy', <SeasonsPrivacyPolicy />],
  ['/seasons-terms-of-use', <SeasonsTermsOfUse />],
  ['/magnetify-privacy-policy', <MagnetifyPrivacyPolicy />],
  ['/magnetify-terms-of-use', <MagnetifyTermsOfUse />],
  ['/nsai-privacy-policy', <NsAiPrivacyPolicy />],
  ['/nsai-terms-of-use', <NsAiTermsOfUse />],
  ['/davetly-privacy-policy', <DavetlyPrivacyPolicy />],
  ['/davetly-terms-of-use', <DavetlyTermsOfUse />],
  ['/lumora-privacy-policy', <LumoraPrivacyPolicy />],
  ['/lumora-terms-of-use', <LumoraTermsOfUse />],
  // Invite was renamed to Davetly; older app builds still link to these URLs.
  // public/_redirects sends them on with a 301, this covers client-side navigation.
  ['/invite-privacy-policy', <Navigate to="/davetly-privacy-policy" replace />],
  ['/invite-terms-of-use', <Navigate to="/davetly-terms-of-use" replace />],
  ['*', <NotFound />],
]

// Blank block (no spinner) while a lazy route loads.
const RouteFallback = () => <div style={{ minHeight: '100vh' }} aria-hidden="true" />

function AppRoutes() {
  const location = useLocation()

  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes location={location} key={location.pathname}>
        {routes.map(([path, page]) => (
          <Route key={path} path={path} element={<PageTransition>{page}</PageTransition>} />
        ))}
      </Routes>
    </Suspense>
  )
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        <a className="skip-link" href="#main">Skip to content</a>
        <div className="app">
          <Navbar />
          <main id="main" tabIndex={-1}>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </MotionConfig>
  )
}

export default App
