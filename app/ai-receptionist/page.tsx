import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Receptionist | Automated Front Desk for Service Businesses',
  description:
    'AI receptionist software that answers customers, books appointments, and qualifies leads 24/7. For dentists, real estate, med spas. Stop losing calls.',
};

export default function AIReceptionistPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        What is an AI Receptionist?
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        An AI receptionist is software that answers customer questions, books appointments,
        and handles incoming inquiries automatically—24/7. It works like a digital front
        desk, available on your website chat, SMS, WhatsApp, email, and phone.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">How AI Receptionist Software Works</h2>
      <p className="mt-3 text-slate-700">
        AI receptionist software connects to your communication channels. When a customer
        messages or calls, the AI responds instantly with relevant information, books
        appointments into your calendar, qualifies leads, and hands off complex cases to
        your staff. It is trained on your business information and industry-specific
        workflows.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Who It&apos;s For</h2>
      <p className="mt-3 text-slate-700">
        AI receptionist is for service businesses that receive frequent inquiries: dental
        practices, real estate offices, med spas, clinics, home service companies, and
        ecommerce brands. Any business that loses leads to missed calls or slow response
        benefits.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Problems It Solves</h2>
      <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
        <li>Missed calls and messages after hours</li>
        <li>Slow response times</li>
        <li>Front desk overwhelmed with routine questions</li>
        <li>No follow-up on abandoned inquiries</li>
        <li>Leads going cold before sales can respond</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Key Benefits</h2>
      <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
        <li>24/7 response—never miss an inquiry</li>
        <li>Automated booking—higher conversion</li>
        <li>Instant lead qualification</li>
        <li>Reduced staffing costs for routine work</li>
        <li>Staff freed for high-value tasks</li>
      </ul>

      <nav className="mt-12 border-t border-slate-200 pt-8">
        <p className="font-medium text-slate-700">Related:</p>
        <ul className="mt-2 space-y-1">
          <li>
            <Link href="/ai-receptionist-for-dentists" className="text-slate-900 underline">
              AI receptionist for dentists
            </Link>
          </li>
          <li>
            <Link href="/ai-receptionist-for-real-estate" className="text-slate-900 underline">
              AI receptionist for real estate
            </Link>
          </li>
          <li>
            <Link href="/ai-receptionist-for-med-spas" className="text-slate-900 underline">
              AI receptionist for med spas
            </Link>
          </li>
          <li>
            <Link href="/best-ai-receptionist" className="text-slate-900 underline">
              Best AI receptionist software
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
        <p className="font-medium text-slate-900">Ready to deploy an AI receptionist?</p>
        <Link
          href="/#demo-form"
          className="mt-2 inline-block font-medium text-slate-900 underline"
        >
          Book a demo →
        </Link>
      </div>
    </article>
  );
}
