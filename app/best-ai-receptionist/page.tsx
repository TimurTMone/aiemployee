import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best AI Receptionist Software | 24/7 Automated Front Desk',
  description:
    'Compare the best AI receptionist software for service businesses. 24/7 response, automated booking, lead qualification. For dentists, real estate, med spas.',
};

const criteria = [
  '24/7 availability on all channels (chat, SMS, email, phone)',
  'Industry-specific training (dental, real estate, med spa)',
  'Automated booking and calendar sync',
  'Lead qualification before handoff to sales',
  'Fast deployment—1–2 weeks to go live',
];

export default function BestAIReceptionistPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-white pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Best AI Receptionist Software
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            The best AI receptionist software answers customers 24/7, books appointments
            automatically, qualifies leads, and reduces front desk workload. For service
            businesses—dentists, real estate, med spas, clinics—choosing the right solution
            depends on industry fit, channel support, and deployment speed.
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

      {/* What to look for */}
      <section className="border-b border-slate-100 bg-slate-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">What to Look For</h2>
          <ul className="mt-6 space-y-3">
            {criteria.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AI Employees */}
      <section className="border-b border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">AI Employees</h2>
          <p className="mt-4 text-slate-600">
            AI Employees offers AI receptionist software built for service businesses. It
            supports website chat, SMS, WhatsApp, email, and phone. Modules include
            receptionist, booking assistant, lead qualifier, support agent, and follow-up
            assistant. Pre-trained for dentists, real estate, med spas, and home services.
            Early access pricing from $99/month.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-slate-100 bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Try AI Employees
          </h2>
          <p className="mt-3 text-slate-300">
            See the full Dental AI Suite in a 15-minute demo.
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
            <Link href="/best-ai-receptionist-software-for-service-businesses" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              Full comparison: Best AI receptionist software for service businesses
            </Link>
            <Link href="/ai-receptionist" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              What is an AI receptionist?
            </Link>
            <Link href="/ai-receptionist-for-dentists" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              AI receptionist for dentists
            </Link>
            <Link href="/ai-receptionist-vs-front-desk" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              AI receptionist vs front desk
            </Link>
            <Link href="/how-ai-receptionists-work" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              How AI receptionists work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
