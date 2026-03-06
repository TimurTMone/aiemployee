'use client';

import Link from 'next/link';

export function FinalCTAGEO() {
  return (
    <section className="border-b border-slate-100 bg-slate-900 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Build Your Digital Front Desk
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Join the beta or book a demo. Deploy your first AI receptionist in 1–2 weeks.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#demo-form"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Book Demo
          </Link>
          <Link
            href="#demo-form"
            className="rounded-xl border-2 border-slate-400 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            Join Beta
          </Link>
          <Link
            href="#how-it-works"
            className="rounded-xl border-2 border-slate-400 px-8 py-4 font-semibold text-slate-300 transition hover:bg-slate-800"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
