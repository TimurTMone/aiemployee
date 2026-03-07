const STORIES = [
  {
    title: 'After-hours Invisalign inquiry',
    problem: 'A potential patient messages at 9 p.m. asking about Invisalign. No one replies until the next morning.',
    action: 'AI replies within seconds, answers basic questions, and captures their name and preferred callback time.',
    result: 'The lead is warm when your team calls back. You book the consultation instead of losing them to a competitor.',
  },
  {
    title: 'Busy front desk misses a call',
    problem: 'Reception is on the phone and two more lines are ringing. One caller hangs up and tries another clinic.',
    action: 'AI picks up every call. It qualifies the inquiry, checks availability, and either books or leaves a clear note for your team.',
    result: 'No more lost calls during peak hours. Your front desk can focus on in-person patients.',
  },
  {
    title: 'Same-day cancellation leaves an empty slot',
    problem: 'A patient cancels the morning of their appointment. The slot stays empty.',
    action: 'AI detects the opening, checks the waitlist or recent inquiries, and reaches out to fill the slot.',
    result: 'Fewer gaps in the schedule. More productive days without extra manual work.',
  },
];

export function RealLifeStories() {
  return (
    <section
      className="bg-[#fbfbfd] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="stories-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2 id="stories-heading" className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Real-life situations. Real results.
        </h2>
        <p className="mt-4 text-center text-lg text-slate-600">
          Problem → what the AI does → business outcome.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {STORIES.map((story, i) => (
            <article
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">{story.title}</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Problem</p>
                  <p className="mt-1 text-slate-700">{story.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">AI action</p>
                  <p className="mt-1 text-slate-700">{story.action}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Result</p>
                  <p className="mt-1 font-medium text-slate-900">{story.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
