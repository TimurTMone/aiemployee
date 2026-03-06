'use client';

import Link from 'next/link';

/**
 * Sticky CTA bar for mobile - appears on scroll.
 * Improves LinkedIn conversion by keeping Book Demo visible.
 */
export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-4 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm md:hidden">
      <Link
        href="/demo"
        className="flex-1 rounded-lg border border-slate-300 py-2.5 text-center text-sm font-semibold text-slate-700"
      >
        Watch Demo
      </Link>
      <Link
        href="/#demo-form"
        className="flex-1 rounded-lg bg-slate-900 py-2.5 text-center text-sm font-semibold text-white"
      >
        Book Demo
      </Link>
    </div>
  );
}
