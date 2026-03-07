import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Receptionist | Automated Front Desk for Service Businesses',
  description:
    'AI receptionist software that answers customers, books appointments, and qualifies leads 24/7. For dentists, real estate, med spas. Stop losing calls.',
};

export default function AIReceptionistPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-white pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            What is an AI Receptionist?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            An AI receptionist is software that answers customer questions, books appointments,
            and handles incoming inquiries automatically—24/7. It works like a digital front
            desk on your website chat, SMS, WhatsApp, email, and phone.
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

      {/* How it works */}
      <section className="border-b border-slate-100 bg-slate-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">How AI Receptionist Software Works</h2>
          <p className="mt-4 text-slate-600">
            AI receptionist software connects to your communication channels. When a customer
            messages or calls, the AI responds instantly with relevant information, books
            appointments into your calendar, qualifies leads, and hands off complex cases to
            your staff. It is trained on your business information and industry-specific
            workflows.
          </p>
        </div>
      </section>

      {/* Who / Problems / Benefits - grid */}
      <section className="border-b border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Who It&apos;s For</h3>
              <p className="mt-3 text-slate-600">
                Dental practices, real estate offices, med spas, clinics, home service
                companies, and ecommerce brands. Any business that loses leads to missed
                calls or slow response.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Problems It Solves</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  Missed calls and messages after hours
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  Slow response times
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  Front desk overwhelmed with routine questions
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  No follow-up on abandoned inquiries
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  Leads going cold before sales can respond
                </li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Key Benefits</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  24/7 response—never miss an inquiry
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Automated booking—higher conversion
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Instant lead qualification
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Reduced staffing costs for routine work
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  Staff freed for high-value tasks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-slate-100 bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to deploy an AI receptionist?
          </h2>
          <p className="mt-3 text-slate-300">
            See how it works in a 15-minute demo. No pitch.
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
            <Link
              href="/ai-receptionist-for-dentists"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              AI receptionist for dentists
            </Link>
            <Link
              href="/ai-receptionist-for-real-estate"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              AI receptionist for real estate
            </Link>
            <Link
              href="/ai-receptionist-for-med-spas"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              AI receptionist for med spas
            </Link>
            <Link
              href="/best-ai-receptionist"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              Best AI receptionist software
            </Link>
            <Link
              href="/how-ai-receptionists-work"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              How AI receptionists work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
