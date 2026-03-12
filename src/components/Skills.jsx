import { useEffect, useRef } from 'react'
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiNestjs,
  SiMongodb, SiPostgresql, SiRedis,
  SiDocker, SiNginx, SiGooglecloud,
  SiGit, SiGithub, SiBitbucket,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const categories = [
  {
    name: 'Frontend',
    accent: '#06b6d4',
    border: 'border-cyan-500/20',
    hoverBorder: 'hover:border-cyan-500/50',
    skills: [
      { name: 'React.js',      icon: SiReact,       color: '#61DAFB' },
      { name: 'Next.js',       icon: SiNextdotjs,   color: '#ffffff' },
      { name: 'TypeScript',    icon: SiTypescript,  color: '#3178C6' },
      { name: 'JavaScript',    icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'Tailwind CSS',  icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Redux Toolkit', icon: SiRedux,       color: '#764ABC' },
    ],
  },
  {
    name: 'Backend',
    accent: '#6366f1',
    border: 'border-indigo-500/20',
    hoverBorder: 'hover:border-indigo-500/50',
    skills: [
      { name: 'Node.js',    icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress,   color: '#ffffff' },
      { name: 'Nest.js',    icon: SiNestjs,    color: '#E0234E' },
    ],
  },
  {
    name: 'Database',
    accent: '#10b981',
    border: 'border-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500/50',
    skills: [
      { name: 'MongoDB',    icon: SiMongodb,    color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Redis',      icon: SiRedis,      color: '#DC382D' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    accent: '#f97316',
    border: 'border-orange-500/20',
    hoverBorder: 'hover:border-orange-500/50',
    skills: [
      { name: 'AWS',    icon: FaAws,          color: '#FF9900' },
      { name: 'GCP',    icon: SiGooglecloud,  color: '#4285F4' },
      { name: 'Docker', icon: SiDocker,       color: '#2496ED' },
      { name: 'Nginx',  icon: SiNginx,        color: '#009639' },
    ],
  },
  {
    name: 'Tools & Version Control',
    accent: '#94a3b8',
    border: 'border-slate-600/20',
    hoverBorder: 'hover:border-slate-500/40',
    skills: [
      { name: 'Git',       icon: SiGit,       color: '#F05032' },
      { name: 'GitHub',    icon: SiGithub,    color: '#ffffff' },
      { name: 'Bitbucket', icon: SiBitbucket, color: '#0052CC' },
    ],
  },
]

const extras = [
  'AlloyDB', 'REST API', 'Microservices', 'CI/CD Pipelines', 'SuperTokens',
  'Okta SSO', 'D3.js', 'OpenAI API', 'CopilotKit', '.NET Core', 'C#',
  'Selenium', 'Azure', 'Stripe', 'PayPal', 'RazorPay',
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm font-medium mb-3">{'// technical_skills'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">My Tech Stack</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            Technologies I use to build scalable, performant, and maintainable applications
          </p>
        </div>

        <div ref={ref} className="reveal space-y-10">
          {categories.map(({ name, accent, border, hoverBorder, skills }) => (
            <div key={name}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  {name}
                </h3>
                <div className="flex-1 h-px bg-slate-800" />
              </div>

              {/* Skill cards */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {skills.map(({ name: skillName, icon: Icon, color }) => (
                  <div
                    key={skillName}
                    className={`group flex flex-col items-center gap-2.5 p-4 bg-[#0d0d20] border ${border} ${hoverBorder} rounded-xl cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg`}
                  >
                    <Icon
                      size={30}
                      style={{ color }}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="text-[11px] font-medium text-slate-400 text-center leading-tight">
                      {skillName}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Also familiar with */}
          <div className="p-5 bg-[#0d0d20] border border-slate-700/20 rounded-2xl">
            <p className="text-xs font-mono text-slate-600 mb-3">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-cyan-400">alsoWorkingWith</span> = [
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {extras.map(t => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-mono bg-slate-800/60 border border-slate-700/30 text-slate-400 rounded-lg hover:border-slate-500/50 hover:text-slate-300 transition-colors cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs font-mono text-slate-600">]</p>
          </div>
        </div>
      </div>
    </section>
  )
}
