import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Receptionist for Real Estate | Lead Qualification & Showing Scheduling',
  description:
    'AI receptionist for real estate: qualify leads, answer property questions, schedule showings 24/7. Faster lead conversion, more qualified prospects for agents.',
};

export default function AIReceptionistForRealEstatePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        AI Receptionist for Real Estate
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Real estate leads go cold when nobody responds quickly. An AI receptionist for
        real estate qualifies leads, answers property questions, schedules showings, and
        captures contact details 24/7—so agents get warm, ready prospects instead of
        cold callbacks.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">The Problem</h2>
      <p className="mt-3 text-slate-700">
        Leads inquire outside office hours. By the time someone calls back, they&apos;ve
        already contacted three other agencies. Slow response means lost deals.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">How It Works</h2>
      <p className="mt-3 text-slate-700">
        AI leasing assistant connects to your website, listing sites, and phone. When a
        lead asks about a property or wants to schedule a showing, the AI responds
        instantly, qualifies intent, captures contact info, and books showings. Complex
        negotiations are escalated to agents.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Results</h2>
      <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
        <li>Faster lead conversion—instant response</li>
        <li>More qualified prospects for agents</li>
        <li>24/7 inquiry capture</li>
        <li>Agents focus on closings, not cold follow-up</li>
      </ul>

      <nav className="mt-12 border-t border-slate-200 pt-8">
        <p className="font-medium text-slate-700">Related:</p>
        <ul className="mt-2 space-y-1">
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
            <Link href="/ai-receptionist-for-med-spas" className="text-slate-900 underline">
              AI receptionist for med spas
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
        <p className="font-medium text-slate-900">Ready for your agency?</p>
        <Link href="/#demo-form" className="mt-2 inline-block font-medium text-slate-900 underline">
          Book a demo →
        </Link>
      </div>
    </article>
  );
}
