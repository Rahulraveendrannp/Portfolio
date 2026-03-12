export default function GitHubStats() {
  return (
    <section className="py-16 bg-[#050510]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">GitHub Stats</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="rounded-2xl overflow-hidden border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=rahulraveendrannp&theme=transparent&hide_border=true&ring=6366f1&fire=a855f7&currStreakLabel=06b6d4&stroke=1e293b&dates=64748b"
              alt="GitHub Streak"
              className="h-48"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
            <img
              src="https://github-readme-stats.vercel.app/api?username=rahulraveendrannp&show_icons=true&theme=transparent&hide_border=true&title_color=6366f1&icon_color=a855f7&text_color=94a3b8&ring_color=6366f1"
              alt="GitHub Stats"
              className="h-48"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
