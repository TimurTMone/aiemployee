import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Receptionist vs Front Desk | When to Use Each',
  description:
    'AI receptionist vs human front desk: compare availability, cost, and use cases. Best practice: AI for first response, staff for complex situations.',
};

export default function AIReceptionistVsFrontDeskPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        AI Receptionist vs Front Desk Staff
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        AI receptionist and human front desk staff serve different roles. Understanding
        when to use each helps businesses optimize cost and customer experience.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">AI Receptionist</h2>
      <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
        <li>Works 24/7 without breaks or sick days</li>
        <li>Responds instantly</li>
        <li>Handles unlimited concurrent conversations</li>
        <li>Lower cost for routine inquiries and booking</li>
        <li>Best for: first response, booking, FAQs, after-hours</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Human Front Desk</h2>
      <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
        <li>Limited hours, needs breaks and coverage</li>
        <li>May be on another call or helping someone in person</li>
        <li>Handles one conversation at a time</li>
        <li>Essential for complex or sensitive situations</li>
        <li>Best for: in-person care, complaints, nuanced decisions</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Best Practice</h2>
      <p className="mt-3 text-slate-700">
        Use AI for first response, booking, and qualification. Escalate complex cases,
        complaints, and sensitive conversations to staff. Many businesses deploy AI for
        after-hours coverage and peak volume—freeing staff for high-value in-person
        interactions.
      </p>

      <nav className="mt-12 border-t border-slate-200 pt-8">
        <p className="font-medium text-slate-700">Related:</p>
        <ul className="mt-2 space-y-1">
          <li>
            <Link href="/ai-receptionist" className="text-slate-900 underline">
              What is an AI receptionist?
            </Link>
          </li>
          <li>
            <Link href="/how-ai-receptionists-work" className="text-slate-900 underline">
              How AI receptionists work
            </Link>
          </li>
          <li>
            <Link href="/" className="text-slate-900 underline">
              AI Employees homepage
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-12 rounded-xl bg-slate-100 p-6">
        <p className="font-medium text-slate-900">See AI Employees in action</p>
        <Link href="/#demo-form" className="mt-2 inline-block font-medium text-slate-900 underline">
          Book a demo →
        </Link>
      </div>
    </article>
  );
}
