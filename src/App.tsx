import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Download from './components/Download'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import FeedbackButton from './components/FeedbackButton'

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Download />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <FeedbackButton />
      </div>
    </BrowserRouter>
  )
}

export default App
