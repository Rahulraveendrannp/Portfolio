import { useEffect, useRef } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    tag: 'AI / Enterprise',
    title: 'AI-Powered Enterprise Data Analytics Platform',
    description:
      'An autonomous AI analytics agent enabling natural-language querying across enterprise data sources — databases, Jira, and third-party platforms. Features KPI monitoring, contextual business insights, and spreadsheet-based data exploration.',
    highlights: [
      'Natural-language querying across enterprise data sources',
      'Secure multi-tenant auth with SuperTokens & role-based access',
      'Scalable microservices architecture for conversational analysis',
      'Spreadsheet & chat-based interactive interfaces',
    ],
    stack: ['Next.js', 'React.js', 'Node.js', 'AlloyDB', 'OpenAI API', 'CopilotKit', 'SuperTokens', 'GCP'],
    gradient: 'from-indigo-600/25 via-purple-600/10 to-transparent',
    border: 'border-indigo-500/25',
    tagColor: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300',
    featured: true,
  },
  {
    tag: 'Analytics',
    title: 'Enterprise Operations & Workforce Analytics Dashboard',
    description:
      'Internal admin dashboard for workforce, operational, and organizational analytics. Provides interactive D3.js visualizations and enterprise SSO integration for role-based access control.',
    highlights: [
      'Role-based access control with Okta SSO',
      'Interactive D3.js charts & visualizations',
      'Real-time operational and workforce insights',
    ],
    stack: ['React.js', 'PostgreSQL', 'Okta SSO', 'D3.js', 'Node.js'],
    gradient: 'from-cyan-600/20 via-blue-600/10 to-transparent',
    border: 'border-cyan-500/20',
    tagColor: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
    featured: true,
  },
  {
    tag: 'E-Commerce',
    title: 'Enterprise E-Commerce Solutions',
    description:
      'Full-stack e-commerce platforms with multiple payment gateway integrations, Redis caching for performance, and scalable AWS deployment.',
    highlights: [
      'Stripe, PayPal & RazorPay payment integrations',
      'Redis caching for high-traffic performance',
      'AWS EC2/S3/RDS production deployment',
    ],
    stack: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Redis', 'Stripe'],
    gradient: 'from-emerald-600/20 to-transparent',
    border: 'border-emerald-500/20',
    tagColor: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
    featured: false,
  },
  {
    tag: 'Automation',
    title: 'Automated Cargo Tracking System',
    description:
      'Automated data extraction pipelines for real-time cargo and airline tracking using .NET and Selenium. Fault-tolerant architecture ensuring continuous data availability.',
    highlights: [
      'Automated web scraping for airline & cargo tracking',
      'Fault-tolerant monitoring & alerting',
      'Real-time data synchronization across sources',
    ],
    stack: ['C#', '.NET Core', 'Selenium', 'PostgreSQL', 'Azure'],
    gradient: 'from-orange-600/20 to-transparent',
    border: 'border-orange-500/20',
    tagColor: 'bg-orange-500/15 border-orange-500/30 text-orange-300',
    featured: false,
  },
  {
    tag: 'Gaming',
    title: 'Interactive Gaming Application Platform',
    description:
      'Engaging online gaming platform with responsive UI, game completion workflows, progress tracking, and instructional screens. Deployed on AWS.',
    highlights: [
      'Online & offline gaming experiences',
      'Game completion workflows with progress tracking',
      'Engaging instructional UI/UX',
    ],
    stack: ['Next.js', 'Node.js', 'AWS'],
    gradient: 'from-purple-600/20 to-transparent',
    border: 'border-purple-500/20',
    tagColor: 'bg-purple-500/15 border-purple-500/30 text-purple-300',
    featured: false,
  },
]

function ProjectCard({ project, large = false }) {
  return (
    <div
      className={`group relative flex flex-col p-6 bg-[#0a0a1a] border ${project.border} hover:border-opacity-60 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden`}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

      <div className="relative z-10 flex flex-col h-full">
        {/* Tag */}
        <div className="mb-4">
          <span className={`px-2.5 py-1 text-xs font-semibold border rounded-full ${project.tagColor}`}>
            {project.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-white mb-3 leading-snug ${large ? 'text-xl' : 'text-lg'}`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
              <span className="mt-1.5 w-1 h-1 bg-cyan-500/70 rounded-full flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.map(t => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] font-mono bg-[#0d0d20] border border-slate-700/30 text-slate-500 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const featured = projects.filter(p => p.featured)
  const rest      = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 bg-[#050510] grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm font-medium mb-3">{'// projects'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What I've Built</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            Enterprise-scale applications built with modern technologies and best practices
          </p>
        </div>

        <div ref={ref} className="reveal space-y-6">
          {/* Featured — 2 columns */}
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((p, i) => (
              <ProjectCard key={i} project={p} large />
            ))}
          </div>

          {/* Rest — 3 columns */}
          <div className="grid md:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Rahulraveendrannp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-indigo-500/30 hover:border-indigo-400/60 text-slate-300 hover:text-white rounded-xl transition-all duration-200 hover:bg-indigo-500/10 font-medium text-sm"
          >
            <FiGithub size={17} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
