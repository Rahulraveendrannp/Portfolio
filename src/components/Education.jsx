import { FiBook, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#0a0a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative p-6 bg-[#0d0d20] border border-indigo-500/20 hover:border-indigo-500/40 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/5">
            {/* Gradient edge */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-l-2xl" />

            <div className="flex items-start gap-4 pl-3">
              <div className="w-12 h-12 bg-indigo-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <FiBook size={22} className="text-indigo-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">B.Tech in Mechanical Engineering</h3>
                <div className="flex items-center gap-1.5 text-indigo-400 font-semibold text-sm mt-1">
                  <FiAward size={13} />
                  NSS College of Engineering, Palakkad
                </div>
                <p className="text-slate-500 text-xs mt-0.5">Calicut University</p>

                <div className="flex flex-wrap items-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <FiCalendar size={11} />
                    Graduated 2017
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <FiMapPin size={11} />
                    Palakkad, Kerala
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
