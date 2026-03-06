'use client';

import { useState } from 'react';

export function DemoForm() {
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
          Book a Demo or Join Beta
        </h2>
        <p className="mt-2 text-center text-slate-600">
          Get early access and see how AI Employees can work for your business.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <p className="font-medium text-emerald-800">Thank you. We&apos;ll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-slate-700">
                Business type *
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3"
              >
                <option value="">Select</option>
                <option value="dental">Dental</option>
                <option value="real-estate">Real Estate</option>
                <option value="med-spa">Med Spa</option>
                <option value="clinic">Clinic</option>
                <option value="home-services">Home Services</option>
                <option value="ecommerce">Ecommerce</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3"
              />
            </div>
            <div>
              <label htmlFor="monthlyInquiries" className="block text-sm font-medium text-slate-700">
                Monthly inquiries (approx.)
              </label>
              <select
                id="monthlyInquiries"
                name="monthlyInquiries"
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-3"
              >
                <option value="">Select</option>
                <option value="0-100">0–100</option>
                <option value="100-500">100–500</option>
                <option value="500-1000">500–1,000</option>
                <option value="1000-5000">1,000–5,000</option>
                <option value="5000+">5,000+</option>
              </select>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                name="action"
                value="demo"
                disabled={loading}
                className="flex-1 rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-slate-800 disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Book Demo'}
              </button>
              <button
                type="submit"
                name="action"
                value="beta"
                disabled={loading}
                className="flex-1 rounded-xl border-2 border-slate-200 px-6 py-4 font-semibold text-slate-900 transition hover:bg-slate-50 disabled:opacity-70"
              >
                Join Beta
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
