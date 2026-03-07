'use client';

import Link from 'next/link';
import { track } from '@/lib/analytics';

export function ROISection() {
  return (
    <section
      id="roi"
      className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="roi-heading"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="roi-heading" className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          See the numbers before you hire more staff.
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
            <h3 className="font-semibold text-slate-900">Option A: Hire another front-desk employee</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• $3,000–$5,000+ per month</li>
              <li>• Limited working hours</li>
              <li>• Still misses after-hours messages</li>
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-slate-900 bg-slate-900 p-6 shadow-lg">
            <h3 className="font-semibold text-white">Option B: AI front desk</h3>
            <ul className="mt-4 space-y-2 text-slate-200">
              <li>• Starts at low monthly SaaS pricing</li>
              <li>• Works 24/7</li>
              <li>• Answers instantly</li>
              <li>• Helps capture more appointments</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 rounded-2xl border border-slate-200 bg-[#fbfbfd] p-6">
          <h3 className="font-semibold text-slate-900">Simple ROI examples</h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li><strong className="text-slate-900">Single-location clinic:</strong> Capture 15–25 more bookings per month. At $200–$300 per visit, that’s thousands in recovered revenue.</li>
            <li><strong className="text-slate-900">Cosmetic / high-value treatment clinic:</strong> Higher average visit value. Every missed call costs more. AI helps you capture more of those leads.</li>
            <li><strong className="text-slate-900">Group practice:</strong> Scale reply and booking across locations without scaling front-desk headcount the same way.</li>
          </ul>
        </div>
        <p className="mt-8 text-center">
          <Link
            href="#demo-form"
            className="font-semibold text-slate-900 underline decoration-2 underline-offset-2 hover:no-underline"
            onClick={() => track('pricing_cta_click', { location: 'roi' })}
          >
            Book a demo to see your numbers →
          </Link>
        </p>
      </div>
    </section>
  );
}
