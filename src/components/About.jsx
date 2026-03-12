import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { useEffect, useRef } from 'react'

const softSkills  = ['Problem Solving', 'Team Player', 'Quick Learner', 'Leadership', 'Flexible', 'Optimistic']
const languages   = ['English', 'Hindi', 'Tamil', 'Malayalam']

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Who Am I?</h2>
        </div>

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-14 items-start">
          {/* Left column — avatar & social only (contact details are in Contact section) */}
          <div className="space-y-7">
            {/* Avatar */}
            <div className="relative inline-block">
              <div className="w-44 h-44 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center text-5xl font-extrabold text-white shadow-2xl shadow-indigo-500/30 select-none">
                RNP
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/Rahulraveendrannp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#0d0d20] border border-slate-700/50 hover:border-indigo-400/40 rounded-xl text-slate-400 hover:text-white transition-all text-sm font-medium"
              >
                <FiGithub size={15} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-np-0449b1197"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#0d0d20] border border-slate-700/50 hover:border-cyan-400/40 rounded-xl text-slate-400 hover:text-cyan-400 transition-all text-sm font-medium"
              >
                <FiLinkedin size={15} /> LinkedIn
              </a>
              <a
                href="https://rahulraveendrannp.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#0d0d20] border border-slate-700/50 hover:border-purple-400/40 rounded-xl text-slate-400 hover:text-purple-400 transition-all text-sm font-medium"
              >
                🌐 rahulraveendrannp.shop
              </a>
            </div>
            <p className="text-slate-500 text-sm">
              For email, phone & location, see the <a href="#contact" className="text-cyan-400 hover:underline">Contact</a> section below.
            </p>
          </div>

          {/* Right column — bio */}
          <div className="space-y-7">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                Full Stack Developer & Cloud Enthusiast
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm a{' '}
                  <span className="text-white font-medium">Full Stack Developer</span> with{' '}
                  <span className="text-cyan-400 font-medium">3+ years</span> of hands-on
                  experience building end-to-end web applications. My core strength lies in the{' '}
                  <span className="text-indigo-300">MERN stack</span> — React, Node.js, Express,
                  and MongoDB — along with Next.js, TypeScript, and PostgreSQL for enterprise-grade
                  systems.
                </p>
                <p>
                  My background in{' '}
                  <span className="text-indigo-400">Mechanical Engineering</span> gives me a
                  distinct analytical mindset that I bring to every technical challenge. I transitioned
                  into software development with a focus on building scalable, high-performance
                  solutions that drive real business value.
                </p>
                <p>
                  I thrive in collaborative environments, closely partnering with UI/UX designers
                  and product teams. I'm always exploring emerging tech — from AI integrations to
                  cloud-native architectures — to stay ahead in a rapidly evolving landscape.
                </p>
              </div>
            </div>

            {/* Soft skills */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map(s => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {languages.map(l => (
                  <span
                    key={l}
                    className="px-3 py-1.5 text-xs font-medium bg-slate-800/60 border border-slate-700/40 text-slate-300 rounded-full"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* DOB only (no age) */}
            <p className="text-slate-500 text-sm">Born 18 May 1996</p>
          </div>
        </div>
      </div>
    </section>
  )
}
