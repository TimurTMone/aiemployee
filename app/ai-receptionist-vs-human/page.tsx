import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Receptionist vs Human Receptionist | Compare & Choose',
  description:
    'AI receptionist vs human: cost, availability, use cases. When to use each. Best practice: AI for first response, staff for complex care.',
};

export default function AIReceptionistVsHumanPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        AI Receptionist vs Human Receptionist
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Comparing AI and human receptionists: cost, availability, and when to use each for dental clinics and service businesses.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">AI Receptionist</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Works 24/7 without breaks</li>
          <li>• Responds instantly</li>
          <li>• Handles unlimited concurrent conversations</li>
          <li>• Costs $99–$399/month</li>
          <li>• Best for: first response, booking, after-hours</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">Human Receptionist</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>• Limited hours, needs breaks</li>
          <li>• May be on another call</li>
          <li>• One conversation at a time</li>
          <li>• Costs $3,000–$5,000+/month</li>
          <li>• Best for: in-person care, complex situations, complaints</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">Best Practice</h2>
        <p className="mt-4 text-slate-700">
          Use AI for first response, booking, and routine inquiries. Escalate complex cases, complaints, and in-person needs to staff. Many dental clinics use AI for after-hours and peak volume—freeing staff for patient care.
        </p>
      </section>

      <section className="mt-12 rounded-xl border-2 border-slate-200 bg-slate-50 p-8">
        <h2 className="text-xl font-bold text-slate-900">See AI Receptionist for Dentists</h2>
        <Link href="/ai-receptionist-for-dentists" className="mt-2 inline-block font-medium text-slate-900 underline">
          AI receptionist for dental clinics →
        </Link>
      </section>

      <nav className="mt-12 border-t border-slate-200 pt-8">
        <Link href="/ai-receptionist" className="text-slate-900 underline">What is an AI receptionist?</Link>
        {' · '}
        <Link href="/best-ai-receptionist" className="text-slate-900 underline">Best AI receptionist</Link>
        {' · '}
        <Link href="/" className="text-slate-900 underline">Homepage</Link>
      </nav>
    </article>
  );
}
