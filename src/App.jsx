import { useState } from 'react'
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

function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false)

  return (
    <div className="bg-[#050510] text-white">
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
    </div>
  )
}

export default App
