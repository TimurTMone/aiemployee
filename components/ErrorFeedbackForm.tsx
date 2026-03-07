'use client';

import { useState } from 'react';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_FEEDBACK_ENDPOINT || '';

export function ErrorFeedbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!FORMSPREE_ENDPOINT) {
      setSubmitted(true);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) setSubmitted(true);
      else setSubmitted(true); // Still show thanks to not block UX
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center">
        <p className="font-medium text-emerald-800">
          Thanks! We&apos;ll take a look. Great ideas fuel our roadmap.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input
        type="hidden"
        name="_subject"
        value="[$1B Idea] Error/404 page feedback"
      />
      <div>
        <label htmlFor="feedback-email" className="block text-left text-sm font-medium text-slate-700">
          Your email
        </label>
        <input
          id="feedback-email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="feedback-idea" className="block text-left text-sm font-medium text-slate-700">
          Your $1B idea
        </label>
        <textarea
          id="feedback-idea"
          name="message"
          required
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3"
          placeholder="What should we build that would be a game-changer for your business?"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-70"
      >
        {loading ? 'Sending...' : 'Send idea'}
      </button>
    </form>
  );
}
