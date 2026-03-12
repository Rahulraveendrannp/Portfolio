import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { name: 'Home',       href: '#home' },
  { name: 'About',      href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Contact',    href: '#contact' },
]

// Add your profile photo as public/profile.jpg to show before your name
const PROFILE_IMAGE = '/profile.jpg'

export default function Navbar({ onResumeClick }) {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeId, setActiveId]    = useState('home')
  const [profileImgError, setProfileImgError] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { threshold: 0.4 }
    )
    links.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050510]/85 backdrop-blur-xl border-b border-indigo-500/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — profile image or initial */}
        <a href="#home" className="group flex items-center gap-2.5">
          {!profileImgError ? (
            <img
              src={PROFILE_IMAGE}
              alt="Rahul N P"
              className="w-8 h-8 rounded-lg object-cover border border-indigo-500/20 shadow-lg"
              onError={() => setProfileImgError(true)}
            />
          ) : (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/30">
              R
            </div>
          )}
          <span className="font-mono font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">
            rahul<span className="text-indigo-400">.np</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ name, href }) => {
            const id = href.slice(1)
            return (
              <li key={name}>
                <a
                  href={href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeId === id
                      ? 'text-white bg-indigo-500/15 border border-indigo-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {name}
                </a>
              </li>
            )
          })}
          <li>
            <button
              type="button"
              onClick={() => onResumeClick?.()}
              className="ml-3 px-5 py-2 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/20"
            >
              Resume
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a0a1a] border-t border-indigo-500/10 px-6 py-4">
          {links.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center py-3 text-slate-400 hover:text-white border-b border-slate-800 last:border-0 transition-colors text-sm font-medium"
            >
              {name}
            </a>
          ))}
          <button
            type="button"
            onClick={() => { onResumeClick?.(); setMenuOpen(false) }}
            className="w-full mt-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-sm transition-colors"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  )
}
