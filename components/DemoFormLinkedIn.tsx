'use client';

import { useState } from 'react';
import { linkedinContent } from '@/lib/linkedin-content';

const FORMSPREE_DEMO_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_DEMO_ENDPOINT || '';

export function DemoFormLinkedIn() {
  const { linkedinCta } = linkedinContent;
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (FORMSPREE_DEMO_ENDPOINT) {
      try {
        const res = await fetch(FORMSPREE_DEMO_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          setError('Something went wrong. Please try again or email us.');
        }
      } catch {
        setError('Something went wrong. Please try again or email us.');
      } finally {
        setLoading(false);
      }
    } else {
      await new Promise((r) => setTimeout(r, 800));
      setSubmitted(true);
      setLoading(false);
    }
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
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {error}
              </div>
            )}
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
            <input type="hidden" name="_subject" value="[Demo Request] AI Employees" />
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
