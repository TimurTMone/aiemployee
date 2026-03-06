'use client';

import Link from 'next/link';

/**
 * Placeholder for demo video and product visualization.
 * LinkedIn prospects expect to see the product before booking.
 */
export function ProductDemo() {

  return (
    <section id="demo" className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            See It in Action
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            How the AI Receptionist handles a real call or message — and how the full suite works together.
          </p>
        </div>

        {/* Video placeholder - replace with actual embed */}
        <div className="mt-12 aspect-video w-full overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-100">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-slate-500">
            <svg className="h-20 w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg font-medium">2-minute product demo</p>
            <p className="text-sm">Watch how the AI answers questions, books appointments, and qualifies leads. See the full Dental AI Suite.</p>
            <Link
              href="/demo"
              className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* UI visualization placeholders - describe for design team */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">AI Chat Widget</h3>
            <p className="mt-2 text-sm text-slate-600">
              Screenshot: Website chat bubble with AI responding to a patient asking about availability. Clean, minimal UI.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Call Flow</h3>
            <p className="mt-2 text-sm text-slate-600">
              Screenshot: Incoming call screen with AI greeting, option to book, qualify lead, or transfer to staff.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Booking Flow</h3>
            <p className="mt-2 text-sm text-slate-600">
              Screenshot: Calendar picker with available slots. AI confirms booking and sends confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
