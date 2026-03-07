const CAPABILITIES = [
  {
    title: 'Answer calls and messages',
    outcome: 'Every call and message gets a reply, day or night. No more hold music or silence.',
  },
  {
    title: 'Book appointments',
    outcome: 'Checks your calendar, offers real slots, and confirms the booking. Syncs with your scheduling tool.',
  },
  {
    title: 'Send reminders',
    outcome: 'Automated reminders cut no-shows so your schedule stays full.',
  },
  {
    title: 'Follow up with leads',
    outcome: 'New inquiries get a fast response and a clear next step so more turn into booked patients.',
  },
  {
    title: 'Re-engage canceled or missed patients',
    outcome: 'When someone cancels or misses an appointment, the system can reach out to reschedule or fill the slot.',
  },
  {
    title: 'Answer common treatment questions',
    outcome: 'Handles FAQs about hours, services, and basics so your team spends less time on the same questions.',
  },
];

export function WhatAIHandles() {
  return (
    <section
      id="what-ai-handles"
      className="bg-[#fbfbfd] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="capabilities-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2 id="capabilities-heading" className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          What the AI handles
        </h2>
        <p className="mt-4 text-center text-lg text-slate-600">
          Plain-English outcomes. One sentence each.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">{cap.title}</h3>
              <p className="mt-2 text-slate-600">{cap.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
