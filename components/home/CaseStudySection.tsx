export function CaseStudySection() {
  return (
    <section
      className="bg-[#fbfbfd] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="case-study-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="case-study-heading" className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Before and after
        </h2>
        <p className="mt-4 text-center text-lg text-slate-600">
          One clinic. Believable numbers.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-red-200 bg-red-50/30 p-6">
            <h3 className="font-semibold text-slate-900">Before</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Missed calls during busy hours</li>
              <li>• Manual follow-ups; many fell through</li>
              <li>• Slow response to new inquiries</li>
              <li>• Underbooked schedule and last-minute no-shows</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">After</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Faster replies; fewer missed calls</li>
              <li>• More booked appointments from the same inquiry volume</li>
              <li>• Less front-desk overload during peaks</li>
              <li>• Stronger recall and follow-up so fewer patients slip away</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-slate-600">
          Results vary by clinic. Example: one practice saw ~40% fewer missed calls and 20+ more bookings per month. We share more detail on the demo.
        </p>
      </div>
    </section>
  );
}
