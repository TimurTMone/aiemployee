import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Receptionist vs Front Desk | When to Use Each',
  description:
    'AI receptionist vs human front desk: compare availability, cost, and use cases. Best practice: AI for first response, staff for complex situations.',
};

export default function AIReceptionistVsFrontDeskPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-white pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            AI Receptionist vs Front Desk Staff
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            AI receptionist and human front desk staff serve different roles. Understanding
            when to use each helps businesses optimize cost and customer experience.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="w-full rounded-xl bg-slate-900 px-8 py-4 text-center font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Watch Demo
            </Link>
            <Link
              href="/#demo-form"
              className="w-full rounded-xl border-2 border-slate-200 px-8 py-4 text-center font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-b border-slate-100 bg-slate-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border-2 border-emerald-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">AI Receptionist</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Works 24/7 without breaks or sick days
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Responds instantly
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Handles unlimited concurrent conversations
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Lower cost for routine inquiries and booking
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Best for: first response, booking, FAQs, after-hours
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">Human Front Desk</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  Limited hours, needs breaks and coverage
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  May be on another call or helping someone in person
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  Handles one conversation at a time
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  Essential for complex or sensitive situations
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  Best for: in-person care, complaints, nuanced decisions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best practice */}
      <section className="border-b border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Best Practice</h2>
          <p className="mt-4 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/50 py-4 pl-6 pr-4 text-slate-700">
            Use AI for first response, booking, and qualification. Escalate complex cases,
            complaints, and sensitive conversations to staff. Many businesses deploy AI for
            after-hours coverage and peak volume—freeing staff for high-value in-person
            interactions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-slate-100 bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            See AI Employees in action
          </h2>
          <p className="mt-3 text-slate-300">
            15-minute demo. No pitch.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#demo-form"
              className="w-full rounded-xl bg-white px-8 py-4 text-center font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
            >
              Book a Demo
            </Link>
            <Link
              href="/demo"
              className="w-full rounded-xl border-2 border-slate-400 px-8 py-4 text-center font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-slate-900">Related</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/ai-receptionist" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              What is an AI receptionist?
            </Link>
            <Link href="/how-ai-receptionists-work" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              How AI receptionists work
            </Link>
            <Link href="/ai-receptionist-vs-human" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              AI receptionist vs human
            </Link>
            <Link href="/" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
