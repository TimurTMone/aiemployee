import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Receptionist for Home Services | Dispatch, Scheduling & Lead Capture',
  description:
    'AI receptionist for HVAC, plumbing, electrical: answer calls, schedule jobs, qualify service requests 24/7. Fewer missed jobs, faster dispatch.',
};

export default function AIReceptionistForHomeServicesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        AI Receptionist for Home Services
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        HVAC, plumbing, and electrical companies lose jobs when calls go unanswered.
        AI receptionist for home services answers calls, schedules jobs, qualifies
        service requests, and captures leads—24/7. Fewer missed jobs, faster dispatch,
        higher capacity.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">The Problem</h2>
      <p className="mt-3 text-slate-700">
        Dispatch chaos. Missed calls during busy season. Scheduling errors. Customers
        call three companies—first to answer often gets the job. After-hours
        emergencies go to voicemail.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">How It Works</h2>
      <p className="mt-3 text-slate-700">
        AI dispatcher connects to your phone. When a customer calls about a repair or
        installation, the AI answers, qualifies the request, checks availability, and
        schedules the job into your calendar. Complex quotes or emergencies can be
        escalated to your team.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Results</h2>
      <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
        <li>Fewer missed jobs—every call answered</li>
        <li>Faster dispatch—AI qualifies and schedules</li>
        <li>Higher capacity without adding staff</li>
        <li>24/7 capture for after-hours emergencies</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">ROI Example</h2>
      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-slate-700">
          <strong>Before:</strong> 40% of calls go to voicemail during busy season.
          Dispatcher overwhelmed. Jobs lost to faster competitors.
        </p>
        <p className="mt-3 text-slate-700">
          <strong>After:</strong> Every call answered. AI qualifies and schedules.
          Dispatch freed for complex routing. More jobs booked.
        </p>
      </div>

      <div className="mt-12 rounded-xl border-2 border-slate-200 bg-slate-50 p-8">
        <h2 className="text-xl font-bold text-slate-900">See It for Your Business</h2>
        <p className="mt-2 text-slate-700">
          15-minute demo. We show you how the AI handles calls for home service companies.
        </p>
        <Link
          href="/#demo-form"
          className="mt-4 inline-block font-medium text-slate-900 underline hover:no-underline"
        >
          Book a demo →
        </Link>
      </div>

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
            <Link href="/" className="text-slate-900 underline">
              AI Employees homepage
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
}
