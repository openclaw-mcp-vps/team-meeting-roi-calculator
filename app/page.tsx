export default function Home() {
  const faqs = [
    {
      q: 'How does MeetingROI calculate meeting cost?',
      a: 'We multiply each attendee\'s hourly rate by the meeting duration, sum all attendee costs, then compare against the outcome value you assign to compute a clear ROI percentage.'
    },
    {
      q: 'What kind of optimization suggestions do I get?',
      a: 'Based on your meeting data, we flag recurring low-ROI meetings, suggest shorter durations, recommend reducing attendee lists, and highlight which meeting types deliver the most value.'
    },
    {
      q: 'Can I cancel my subscription anytime?',
      a: 'Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For Team Leads &amp; Project Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate the actual cost and value of every team meeting
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop guessing. Input meeting duration, attendee salaries, and outcome value — get instant ROI reports and actionable optimization recommendations.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $9/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required to start. Cancel anytime.</p>

        {/* Mini demo stat strip */}
        <div className="mt-14 grid grid-cols-3 gap-4">
          {[['$24,000', 'avg annual meeting waste per employee'], ['68%', 'of meetings have no clear outcome'], ['3.2x', 'ROI from optimized meeting cadence']].map(([val, label]) => (
            <div key={val} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, transparent pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to run leaner meetings</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited meeting entries',
              'Real-time cost calculator',
              'ROI reports & dashboards',
              'Optimization recommendations',
              'CSV export',
              'Up to 10 team members',
              'Email support'
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} MeetingROI. All rights reserved.
      </footer>
    </main>
  )
}
