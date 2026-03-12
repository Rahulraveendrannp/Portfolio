import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const links = [
  { name: 'Home',       href: '#home' },
  { name: 'About',      href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Contact',    href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050510] border-t border-indigo-500/10">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs">
                R
              </div>
              <span className="font-mono font-bold text-white text-sm">
                rahul<span className="text-indigo-400">.np</span>
              </span>
            </div>
            <p className="text-xs text-slate-600">Full Stack Developer · Calicut, Kerala</p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-4">
            {links.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {name}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Rahulraveendrannp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-white transition-colors"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-np-0449b1197"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-cyan-400 transition-colors"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:Rahulraveendrannp@gmail.com"
              className="text-slate-600 hover:text-indigo-400 transition-colors"
            >
              <FiMail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Rahul N P. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with <FiHeart size={11} className="text-red-500 mx-1" /> using React & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  )
}
