import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Receptionist vs Human Receptionist | Compare & Choose',
  description:
    'AI receptionist vs human: cost, availability, use cases. When to use each. Best practice: AI for first response, staff for complex care.',
};

export default function AIReceptionistVsHumanPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-white pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            AI Receptionist vs Human Receptionist
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Comparing AI and human receptionists: cost, availability, and when to use each
            for dental clinics and service businesses.
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
                  Works 24/7 without breaks
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
                  Costs $99–$499/month
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Best for: first response, booking, after-hours
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-bold text-slate-900">Human Receptionist</h2>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  Limited hours, needs breaks
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  May be on another call
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  One conversation at a time
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  Costs $3,000–$5,000+/month
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  Best for: in-person care, complex situations, complaints
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
            Use AI for first response, booking, and routine inquiries. Escalate complex cases,
            complaints, and in-person needs to staff. Many dental clinics use AI for after-hours
            and peak volume—freeing staff for patient care.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-slate-100 bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            See AI Receptionist for Dental Clinics
          </h2>
          <p className="mt-3 text-slate-300">
            The full Dental AI Suite. 15-minute demo.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/ai-receptionist-for-dentists"
              className="w-full rounded-xl bg-white px-8 py-4 text-center font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
            >
              Dental AI Suite →
            </Link>
            <Link
              href="/#demo-form"
              className="w-full rounded-xl border-2 border-slate-400 px-8 py-4 text-center font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Book a Demo
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
            <Link href="/best-ai-receptionist" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              Best AI receptionist
            </Link>
            <Link href="/ai-receptionist-vs-front-desk" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              AI receptionist vs front desk
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
