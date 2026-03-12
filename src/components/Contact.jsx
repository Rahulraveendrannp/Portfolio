import { useState, useRef, useEffect } from 'react'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiExternalLink } from 'react-icons/fi'

const contactCards = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'Rahulraveendrannp@gmail.com',
    href: 'mailto:Rahulraveendrannp@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 7907996240',
    href: 'tel:+917907996240',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Calicut, Kerala, India',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Rahulraveendrannp',
    href: 'https://github.com/Rahulraveendrannp',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rahul-np-0449b1197',
    href: 'https://www.linkedin.com/in/rahul-np-0449b1197',
  },
  {
    icon: FiExternalLink,
    label: 'Website',
    value: 'rahulnp.online',
    href: 'https://rahulnp.online',
  },
]

const INITIAL = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm]       = useState(INITIAL)
  const [sending, setSending] = useState(false)
  const [sent, setSent]       = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setForm(INITIAL)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm font-medium mb-3">{'// contact'}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            Have a project in mind, a job opportunity, or just want to say hello? I'd love to
            hear from you.
          </p>
        </div>

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-12">
          {/* Left — contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-5">Let's Connect</h3>
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 bg-[#0d0d20] border border-indigo-500/10 hover:border-indigo-500/25 rounded-xl transition-colors group"
              >
                <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={17} className="text-indigo-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate-300 hover:text-cyan-400 transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-300">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-[#0d0d20] border border-indigo-500/10 focus:border-indigo-400/50 rounded-xl text-sm text-slate-200 placeholder-slate-700 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-[#0d0d20] border border-indigo-500/10 focus:border-indigo-400/50 rounded-xl text-sm text-slate-200 placeholder-slate-700 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-2">Subject *</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className="w-full px-4 py-3 bg-[#0d0d20] border border-indigo-500/10 focus:border-indigo-400/50 rounded-xl text-sm text-slate-200 placeholder-slate-700 outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-500 mb-2">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                required
                className="w-full px-4 py-3 bg-[#0d0d20] border border-indigo-500/10 focus:border-indigo-400/50 rounded-xl text-sm text-slate-200 placeholder-slate-700 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending || sent}
              className={`w-full flex items-center justify-center gap-2.5 py-4 font-semibold rounded-xl transition-all duration-200 text-sm ${
                sent
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-500/25'
              } disabled:opacity-70`}
            >
              {sent ? (
                <>✓ Message Sent!</>
              ) : sending ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend size={15} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
