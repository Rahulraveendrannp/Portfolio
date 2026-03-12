import { useEffect, useRef } from 'react'
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Pumex Infotech Pvt Ltd',
    location: 'Infopark Phase 2, Kochi, Kerala',
    period: 'Aug 2023 – Present',
    current: true,
    color: 'emerald',
    responsibilities: [
      'Developed enterprise web applications using React, Next.js, TypeScript, Node.js, and Express.js',
      'Engineered automated data extraction systems using .NET, C#, and Selenium for airline and cargo tracking services',
      'Designed and maintained PostgreSQL databases handling millions of tracking records with sub-second query performance',
      'Collaborated with cross-functional teams including UI/UX designers to deliver intuitive, responsive interfaces',
      'Built RESTful APIs and microservices architecture supporting real-time data synchronization across multiple sources',
      'Resolved critical performance bottlenecks through profiling, optimization, and architectural improvements',
      'Managed AWS cloud deployments ensuring high availability, security compliance, and system reliability',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'MERN Stack Developer',
    company: 'Self Stack',
    location: 'Calicut, Kerala',
    period: 'Feb 2023 – Aug 2023',
    current: false,
    color: 'indigo',
    responsibilities: [
      'Architected full-stack e-commerce solutions using React, Redux, Node.js, Express, and MongoDB',
      'Managed production infrastructure on AWS (EC2, S3, RDS) with Nginx configuration and SSL implementation',
      'Designed and optimized database schemas, implementing indexing strategies for improved query performance',
      'Developed responsive user interfaces with focus on conversion optimization and seamless user experience',
      'Integrated multiple payment gateways (Stripe, PayPal, RazorPay) with secure transaction processing',
      'Deployed scalable applications with automated CI/CD pipelines and monitoring solutions',
    ],
    stack: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB', 'AWS', 'Nginx', 'Stripe'],
  },
  {
    title: 'Production Engineer',
    company: 'VKC Group of Companies',
    location: 'Calicut, Kerala',
    period: 'Nov 2019 – May 2022',
    current: false,
    color: 'slate',
    responsibilities: [
      'Managed end-to-end operational planning and scheduling using data-driven approaches to meet delivery and quality targets',
      'Collaborated with cross-functional teams to streamline processes and optimize resource utilization',
      'Leveraged SAP systems for data management, inventory tracking, reporting, and process monitoring',
      'Analyzed workflows to improve efficiency, reduce downtime, and enhance system reliability',
    ],
    stack: ['SAP', 'Data Analysis', 'Operations Management', 'Process Optimization'],
  },
]

const dotColor = {
  emerald: 'bg-emerald-400 border-emerald-400 shadow-emerald-400/40',
  indigo:  'bg-[#050510] border-indigo-500/50',
  slate:   'bg-[#050510] border-slate-600/50',
}

const cardBorder = {
  emerald: 'border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-emerald-500/5',
  indigo:  'border-indigo-500/15 hover:border-indigo-500/30 hover:shadow-indigo-500/5',
  slate:   'border-slate-700/30 hover:border-slate-600/50',
}

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }) },
      { threshold: 0.05 }
    )
    const items = ref.current?.querySelectorAll('.reveal')
    items?.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-24 bg-[#050510] grid-bg" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm font-medium mb-3">{'// work_experience'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Where I've Worked</h2>
          <p className="text-slate-500 mt-3 text-sm">3+ years of professional experience</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-emerald-500/60 via-indigo-500/40 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="reveal relative md:pl-20 group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-5 top-7 w-5 h-5 rounded-full border-2 shadow-lg hidden md:flex items-center justify-center transition-all ${dotColor[exp.color]}`}
                />

                <div
                  className={`p-6 bg-[#0a0a1a] border rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${cardBorder[exp.color]}`}
                >
                  {/* Card header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-indigo-400 font-semibold text-sm">
                        <FiBriefcase size={13} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center justify-end gap-1.5 text-slate-400 text-xs">
                        <FiCalendar size={11} /> {exp.period}
                      </div>
                      <div className="flex items-center justify-end gap-1.5 text-slate-500 text-xs">
                        <FiMapPin size={11} /> {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-5">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-cyan-500/70 rounded-full flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono bg-[#0d0d20] border border-slate-700/40 text-slate-400 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
