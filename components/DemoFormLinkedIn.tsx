'use client';

import { useState } from 'react';
import { linkedinContent } from '@/lib/linkedin-content';

export function DemoFormLinkedIn() {
  const { linkedinCta } = linkedinContent;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section id="demo-form" className="border-b border-slate-100 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-slate-900">
          {linkedinCta.bookDemo}
        </h2>
        <p className="mt-2 text-center text-slate-600">
          15-minute call. No pitch. We show you how it works for your practice.
        </p>
        <p className="mt-1 text-center text-sm font-medium text-slate-600">
          {linkedinCta.respondTime}
        </p>

        {submitted ? (
          <div className="mt-10 rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <p className="font-medium text-emerald-800">
              Thanks. We&apos;ll reach out within 4 hours to schedule your demo.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name *</label>
              <input id="name" name="name" type="text" required className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email *</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
              <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" />
            </div>
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-slate-700">Business type *</label>
              <select id="businessType" name="businessType" required className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3">
                <option value="">Select</option>
                <option value="dental">Dental</option>
                <option value="med-spa">Med Spa</option>
                <option value="real-estate">Real Estate</option>
                <option value="home-services">Home Services</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company</label>
              <input id="company" name="company" type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3" />
            </div>
            <div>
              <label htmlFor="biggestChallenge" className="block text-sm font-medium text-slate-700">What&apos;s your biggest challenge?</label>
              <select id="biggestChallenge" name="biggestChallenge" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3">
                <option value="">Select</option>
                <option value="missed-calls">Missed calls</option>
                <option value="slow-response">Slow response</option>
                <option value="scheduling">Manual scheduling</option>
                <option value="after-hours">After-hours inquiries</option>
                <option value="staff-overload">Staff overwhelmed</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-70"
            >
              {loading ? 'Sending...' : 'Book Demo'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
