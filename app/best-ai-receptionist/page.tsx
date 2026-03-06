import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best AI Receptionist Software | 24/7 Automated Front Desk',
  description:
    'Compare the best AI receptionist software for service businesses. 24/7 response, automated booking, lead qualification. For dentists, real estate, med spas.',
};

export default function BestAIReceptionistPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Best AI Receptionist Software
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        The best AI receptionist software answers customers 24/7, books appointments
        automatically, qualifies leads, and reduces front desk workload. For service
        businesses—dentists, real estate, med spas, clinics—choosing the right solution
        depends on industry fit, channel support, and deployment speed.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">What to Look For</h2>
      <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
        <li>24/7 availability on all channels (chat, SMS, email, phone)</li>
        <li>Industry-specific training (dental, real estate, med spa)</li>
        <li>Automated booking and calendar sync</li>
        <li>Lead qualification before handoff to sales</li>
        <li>Fast deployment—1–2 weeks to go live</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">AI Employees</h2>
      <p className="mt-3 text-slate-700">
        AI Employees offers AI receptionist software built for service businesses. It
        supports website chat, SMS, WhatsApp, email, and phone. Modules include
        receptionist, booking assistant, lead qualifier, support agent, and follow-up
        assistant. Pre-trained for dentists, real estate, med spas, and home services.
        Early access pricing from $99/month.
      </p>

        <nav className="mt-12 border-t border-slate-200 pt-8">
        <p className="font-medium text-slate-700">Related:</p>
        <ul className="mt-2 space-y-1">
          <li>
            <Link href="/best-ai-receptionist-software-for-service-businesses" className="text-slate-900 underline">
              Full comparison: Best AI receptionist software for service businesses
            </Link>
          </li>
          <li>
            <Link href="/ai-receptionist" className="text-slate-900 underline">
              What is an AI receptionist?
            </Link>
          </li>
          <li>
            <Link href="/ai-receptionist-for-dentists" className="text-slate-900 underline">
              AI receptionist for dentists
            </Link>
          </li>
          <li>
            <Link href="/ai-receptionist-vs-front-desk" className="text-slate-900 underline">
              AI receptionist vs front desk
            </Link>
          </li>
          <li>
            <Link href="/how-ai-receptionists-work" className="text-slate-900 underline">
              How AI receptionists work
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-12 rounded-xl bg-slate-100 p-6">
        <p className="font-medium text-slate-900">Try AI Employees</p>
        <Link href="/#demo-form" className="mt-2 inline-block font-medium text-slate-900 underline">
          Book a demo →
        </Link>
      </div>
    </article>
  );
}
