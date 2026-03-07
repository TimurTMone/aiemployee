const STEPS = [
  {
    step: 1,
    title: 'Patient contacts your clinic',
    description: 'By phone, website chat, WhatsApp, or SMS. Any channel you use.',
  },
  {
    step: 2,
    title: 'AI responds instantly and books or qualifies',
    description: 'It answers questions, checks availability, and either books the appointment or captures the lead for your team.',
  },
  {
    step: 3,
    title: 'Your team gets a confirmed appointment and fewer interruptions',
    description: 'Less hold music. Fewer missed calls. More time for patients in the chair.',
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="how-heading" className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          How it works
        </h2>
        <p className="mt-4 text-center text-lg text-slate-600">
          Three steps. No complexity.
        </p>
        <div className="mt-14 space-y-10 sm:space-y-14">
          {STEPS.map((s) => (
            <div key={s.step} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white shadow-md" aria-hidden>
                {s.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
