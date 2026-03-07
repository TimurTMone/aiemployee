'use client';

import { useState, useEffect } from 'react';
import { track } from '@/lib/analytics';
import { getUTMParams } from '@/lib/utm';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_DEMO_ENDPOINT || '';

export function DemoFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    setUtm(getUTMParams());
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (FORMSPREE_ENDPOINT) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        if (res.ok) {
          setSubmitted(true);
          form.reset();
          track('form_submit', { form_id: 'demo_form' });
        } else {
          setError('Something went wrong. Please try again or email us.');
        }
      } catch {
        setError('Something went wrong. Please try again or email us.');
      } finally {
        setLoading(false);
      }
    } else {
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
      setLoading(false);
      track('form_submit', { form_id: 'demo_form' });
      form.reset();
    }
  }

  return (
    <section
      id="demo-form"
      className="bg-slate-900 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="demo-form-heading"
    >
      <div className="mx-auto max-w-xl">
        <h2 id="demo-form-heading" className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Book a 15-minute demo
        </h2>
        <p className="mt-4 text-center text-lg text-slate-300">
          We’ll show you how this can work for your clinic, your workflow, and your patient volume.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl bg-emerald-500/20 p-8 text-center">
            <p className="font-medium text-emerald-100">
              Thanks. We’ll reach out within a few hours to schedule your demo.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-4"
            aria-label="Book a demo"
          >
            {error && (
              <div className="rounded-xl bg-red-500/20 p-3 text-sm text-red-200" role="alert">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="home-name" className="block text-sm font-medium text-slate-300">
                Name *
              </label>
              <input
                id="home-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="home-clinic" className="block text-sm font-medium text-slate-300">
                Clinic name *
              </label>
              <input
                id="home-clinic"
                name="clinic"
                type="text"
                required
                autoComplete="organization"
                className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
                placeholder="Your clinic name"
              />
            </div>
            <div>
              <label htmlFor="home-email" className="block text-sm font-medium text-slate-300">
                Email *
              </label>
              <input
                id="home-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
                placeholder="you@clinic.com"
              />
            </div>
            <div>
              <label htmlFor="home-phone" className="block text-sm font-medium text-slate-300">
                Phone
              </label>
              <input
                id="home-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
                placeholder="Optional"
              />
            </div>
            <div>
              <label htmlFor="home-challenge" className="block text-sm font-medium text-slate-300">
                Biggest challenge
              </label>
              <select
                id="home-challenge"
                name="biggestChallenge"
                className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 [&>option]:bg-slate-800 [&>option]:text-white"
              >
                <option value="">Select (optional)</option>
                <option value="missed-calls">Missed calls</option>
                <option value="after-hours">After-hours inquiries</option>
                <option value="front-desk-overload">Front desk overload</option>
                <option value="no-shows">No-shows</option>
                <option value="slow-response">Slow response to leads</option>
                <option value="other">Other</option>
              </select>
            </div>
            <input type="hidden" name="_subject" value="[Homepage] Demo Request - AI Employees" />
            {Object.entries(utm).map(([key, value]) => (
              <input key={key} type="hidden" name={key} value={value} />
            ))}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-white py-4 font-semibold text-slate-900 transition hover:bg-slate-100 disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {loading ? 'Sending...' : 'Request demo'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
