'use client';

import Link from 'next/link';
import { track } from '@/lib/analytics';

export function HomeHero() {
  return (
    <header
      className="relative bg-[#fbfbfd] px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-28 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1
          id="hero-heading"
          className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]"
        >
          Stop losing new patients after hours.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl lg:text-2xl">
          Your AI front desk answers calls and messages, books appointments, follows up with leads, and helps reduce no-shows — even when your team is busy.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#demo-form"
            className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-xl bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            onClick={() => track('hero_cta_click', { cta: 'book_demo' })}
          >
            Book a 15-minute demo
          </Link>
          <Link
            href="/demo"
            className="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            onClick={() => track('video_click', { location: 'hero' })}
          >
            Watch 2-minute demo
          </Link>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Works with phone, website chat, WhatsApp, SMS, Instagram, and your scheduling tools.
        </p>
      </div>
    </header>
  );
}
