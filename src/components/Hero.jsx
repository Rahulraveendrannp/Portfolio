import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiExternalLink } from 'react-icons/fi'

const ROLES = [
  'Full Stack Developer',
  'React & Next.js Engineer',
  'Node.js Developer',
  'MERN Stack Expert',
  'Software Engineer',
]

export default function Hero() {
  const [roleIdx, setRoleIdx]     = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let timer
    if (!deleting && displayed.length < current.length) {
      timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
    } else if (!deleting && displayed.length === current.length) {
      timer = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(timer)
  }, [displayed, deleting, roleIdx])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb absolute top-1/4 left-[15%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[100px]" />
        <div className="orb-delay absolute bottom-1/4 right-[15%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px]" />
        <div className="absolute top-3/4 left-1/2 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left — main content */}
          <div className="flex-1 max-w-2xl fade-in-up">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-8">
              <span className="pulse-glow w-2 h-2 bg-emerald-400 rounded-full" />
              Open to opportunities
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-5">
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Rahul N P</span>
            </h1>

            {/* Typing role */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-300 mb-7 h-10">
              <span className="text-cyan-400 font-mono text-2xl">›</span>
              <span className="font-mono text-slate-200">{displayed}</span>
              <span className="cursor-blink text-cyan-400 font-mono">|</span>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
              Full Stack Developer with{' '}
              <span className="text-white font-semibold">3+ years</span> of end-to-end
              development experience. Specialized in{' '}
              <span className="text-cyan-400 font-medium">MERN stack</span> &amp; enterprise
              cloud applications. Based in{' '}
              <span className="text-indigo-300">Calicut, Kerala 🇮🇳</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border border-indigo-500/30 hover:border-indigo-400/60 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-indigo-500/10 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Rahulraveendrannp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-white transition-all duration-200 group"
              >
                <FiGithub size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-np-0449b1197"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-all duration-200 group"
              >
                <FiLinkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:Rahulraveendrannp@gmail.com"
                className="flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-all duration-200 group"
              >
                <FiMail size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Email</span>
              </a>
              <a
                href="https://rahulnp.online"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-purple-400 transition-all duration-200 group"
              >
                <FiExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Website</span>
              </a>
            </div>
          </div>

          {/* Right — decorative code card */}
          <div className="hidden lg:block flex-shrink-0 w-80 fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animation: 'fadeInUp 0.6s ease 0.2s forwards' }}>
            <div className="p-5 bg-[#0d0d20]/80 border border-indigo-500/20 rounded-2xl backdrop-blur-sm shadow-2xl shadow-indigo-500/5">
              {/* Window dots */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-slate-600 text-xs font-mono">developer.js</span>
              </div>
              <div className="font-mono text-sm leading-7">
                <div className="text-slate-500">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-300">developer</span>{' '}
                  <span className="text-white">=</span>{' '}
                  <span className="text-yellow-300">{'{'}</span>
                </div>
                <div className="ml-4 text-slate-400">
                  <span className="text-indigo-300">name</span>
                  <span className="text-white">: </span>
                  <span className="text-emerald-400">"Rahul N P"</span>
                  <span className="text-slate-500">,</span>
                </div>
                <div className="ml-4 text-slate-400">
                  <span className="text-indigo-300">role</span>
                  <span className="text-white">: </span>
                  <span className="text-emerald-400">"Full Stack Dev"</span>
                  <span className="text-slate-500">,</span>
                </div>
                <div className="ml-4 text-slate-400">
                  <span className="text-indigo-300">exp</span>
                  <span className="text-white">: </span>
                  <span className="text-orange-300">"3+ years"</span>
                  <span className="text-slate-500">,</span>
                </div>
                <div className="ml-4 text-slate-400">
                  <span className="text-indigo-300">stack</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">[</span>
                  <span className="text-emerald-400">"MERN"</span>
                  <span className="text-slate-500">, </span>
                  <span className="text-emerald-400">"AWS"</span>
                  <span className="text-yellow-300">]</span>
                  <span className="text-slate-500">,</span>
                </div>
                <div className="ml-4 text-slate-400">
                  <span className="text-indigo-300">location</span>
                  <span className="text-white">: </span>
                  <span className="text-emerald-400">"Kerala 🇮🇳"</span>
                  <span className="text-slate-500">,</span>
                </div>
                <div className="ml-4 text-slate-400">
                  <span className="text-indigo-300">open</span>
                  <span className="text-white">: </span>
                  <span className="text-cyan-400">true</span>
                </div>
                <div className="text-yellow-300">{'}'}</div>
              </div>
            </div>

            {/* Stats below card */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { val: '3+', label: 'Years Exp' },
                { val: '5+', label: 'Projects' },
                { val: '10+', label: 'Technologies' },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="p-3 bg-[#0d0d20]/60 border border-indigo-500/10 rounded-xl text-center"
                >
                  <div className="text-xl font-bold gradient-text">{val}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
      >
        <span className="text-xs font-mono">scroll</span>
        <FiArrowDown className="animate-bounce" size={16} />
      </a>
    </section>
  )
}
