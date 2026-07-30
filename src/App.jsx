import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import GitHubStats from './components/GitHubStats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'
import AnishaCMenon from './pages/AnishaCMenon'

function MainPortfolio() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false)

  return (
    <>
      <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
      <Navbar onResumeClick={() => setResumeModalOpen(true)} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <GitHubStats />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="bg-[#050510] text-white min-h-screen">
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/anishacmenon" element={<AnishaCMenon />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
