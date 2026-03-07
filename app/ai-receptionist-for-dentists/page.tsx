import type { Metadata } from 'next';
import Link from 'next/link';
import { ROICalculator } from '@/components/dentists-landing/ROICalculator';
import { DentistsFAQ } from '@/components/dentists-landing/DentistsFAQ';
import { ThemeToggle } from '@/components/dentists-landing/ThemeToggle';
import { DentistsSchema } from '@/components/dentists-landing/DentistsSchema';
import { RequestDemoForm } from '@/components/dentists-landing/RequestDemoForm';
import { LanguageBar } from '@/components/dentists-landing/LanguageBar';

export const metadata: Metadata = {
  title: 'AI Receptionist for Dentists | Never Miss Another Patient Call',
  description:
    'AI receptionist for dental clinics: answers calls 24/7, books appointments, multilingual support, insurance Q&A, CRM integration. Capture every lead.',
  keywords: [
    'AI receptionist dentist',
    'dental answering service AI',
    'AI dental appointment booking',
    'AI receptionist for dental clinics',
    'dental AI answering',
  ],
  openGraph: {
    title: 'AI Receptionist for Dentists | Never Miss Another Patient Call',
    description:
      'AI receptionist for dental clinics that answers calls, books appointments, and captures new patients 24/7.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Receptionist for Dentists' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Receptionist for Dentists | Never Miss Another Patient Call',
    description: 'Answers calls, books appointments, captures new patients 24/7.',
  },
  alternates: { canonical: 'https://aiemployee-alpha.vercel.app/ai-receptionist-for-dentists' },
};

const FEATURES = [
  {
    title: '24/7 call answering',
    description: 'Every call is answered instantly, day or night. No more missed inquiries or lost patients.',
  },
  {
    title: 'Appointment booking',
    description: 'AI checks your calendar, offers available slots, and confirms bookings—syncs with your PMS.',
  },
  {
    title: 'Multilingual support',
    description: 'Serve a diverse patient base in multiple languages from one system.',
  },
  {
    title: 'Insurance Q&A',
    description: 'Answers common insurance and coverage questions; escalates complex cases to your team.',
  },
  {
    title: 'CRM integration',
    description: 'Syncs with your practice management and CRM so patient data stays in one place.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'We were losing 20+ patients a month to missed calls. Now every call is answered and we book more new patients than ever.',
    author: 'Dr. Sarah M.',
    role: 'Owner, Smile Dental',
  },
  {
    quote: 'The AI handles after-hours and overflow so our front desk can focus on patients in the chair. ROI paid for itself in the first month.',
    author: 'Jennifer L.',
    role: 'Practice Manager, Riverside Dental',
  },
  {
    quote: 'Multilingual support was a game-changer. We can finally serve our whole community without hiring extra staff.',
    author: 'Dr. James K.',
    role: 'Multi-location practice',
  },
];

export default function AIReceptionistForDentistsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <DentistsSchema />
      {/* Theme toggle - top right */}
      <div className="fixed right-4 top-24 z-40 md:top-20">
        <ThemeToggle />
      </div>

      {/* ——— HERO ——— */}
      <section className="relative border-b border-slate-200/80 bg-slate-900 px-4 pt-28 pb-24 sm:px-6 sm:pt-36 sm:pb-32 lg:px-8 dark:border-slate-700/50 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            Never Miss Another Patient Call
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl lg:text-2xl">
            AI Receptionist for Dental Clinics that answers calls, books appointments, and captures new patients 24/7.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center">
            <Link
              href="#demo-form"
              className="w-full rounded-xl bg-white px-10 py-4 text-center text-base font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 sm:w-auto"
            >
              Request Demo
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            Trusted by dental practices. No long-term contract. Setup in days.
          </p>
          <div className="mt-6">
            <LanguageBar />
          </div>
        </div>
      </section>

      {/* ——— SCALE & LANGUAGE (cayu-style value prop) ——— */}
      <section className="border-b border-slate-200/80 bg-slate-50/50 py-16 sm:py-20 dark:border-slate-700/50 dark:bg-slate-800/30">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Built to scale. Built for every patient.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800/50">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">100+</p>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">conversations at once</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Our AI employees serve 100 people instantly. No queue, no hold.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800/50">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">Any language</p>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">AI speaks what your patients speak</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">English, Spanish, Russian, Kyrgyz, Mandarin—and more. One system, every community.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800/50">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">24/7</p>
              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">always on</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Calls and messages answered every hour of every day. No missed inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— PROBLEM ——— */}
      <section id="problem" className="border-b border-slate-200/80 bg-white py-20 sm:py-28 dark:border-slate-700/50 dark:bg-slate-900/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Lost revenue from missed calls is real
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            When a patient calls and nobody answers, they call the next clinic. Dental practices lose thousands every month to missed calls—and most never know the true number.
          </p>

          <div className="mt-10 rounded-2xl border-2 border-red-200 bg-red-50/50 p-8 dark:border-red-900/50 dark:bg-red-950/30">
            <p className="font-semibold text-slate-900 dark:text-white">Typical dental practice:</p>
            <ul className="mt-4 space-y-1 text-slate-700 dark:text-slate-300">
              <li>• 120+ inquiries per month</li>
              <li>• 30–40 missed calls</li>
              <li>• 15–25 patients lost to competitors</li>
              <li>• $200–$300 average patient value</li>
            </ul>
            <p className="mt-6 text-xl font-bold text-red-700 dark:text-red-400">
              Lost revenue: $5,000–$7,500+ per month
            </p>
          </div>

          <p className="mt-8 text-lg text-slate-700 dark:text-slate-300">
            An AI receptionist answers every call instantly, books appointments, and captures leads 24/7—so you stop losing patients to the phone.
          </p>
        </div>
      </section>

      {/* ——— HOW IT WORKS (value + sample, no demo link) ——— */}
      <section id="how-it-works" className="border-b border-slate-200/80 bg-slate-50/50 py-20 sm:py-28 dark:border-slate-700/50 dark:bg-slate-800/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              How it works
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Patient calls → AI answers → Appointment booked. In any language, at scale.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
            <div className="border-b border-slate-200 p-6 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Example conversation</p>
              <div className="mt-4 space-y-3">
                <div className="flex justify-end">
                  <span className="max-w-[85%] rounded-2xl rounded-br-md bg-slate-200 px-4 py-2 text-sm text-slate-800 dark:bg-slate-600 dark:text-slate-200">
                    Hi, do you accept new patients? I need a cleaning.
                  </span>
                </div>
                <div className="flex justify-start">
                  <span className="max-w-[85%] rounded-2xl rounded-bl-md bg-slate-900 px-4 py-2 text-sm text-white dark:bg-slate-700">
                    Yes, we do. I have Tuesday at 2pm or Thursday at 10am. Which works for you?
                  </span>
                </div>
                <div className="flex justify-end">
                  <span className="max-w-[85%] rounded-2xl rounded-br-md bg-slate-200 px-4 py-2 text-sm text-slate-800 dark:bg-slate-600 dark:text-slate-200">
                    Tuesday 2pm. My name is Maria.
                  </span>
                </div>
                <div className="flex justify-start">
                  <span className="max-w-[85%] rounded-2xl rounded-bl-md bg-slate-900 px-4 py-2 text-sm text-white dark:bg-slate-700">
                    Done. You’re booked for Tuesday at 2pm. We’ll send a confirmation and reminder.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 bg-slate-50/50 p-4 dark:bg-slate-900/30">
              <span className="text-sm text-slate-600 dark:text-slate-400">Request a demo to see it live for your practice.</span>
              <Link
                href="#demo-form"
                className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— FEATURES ——— */}
      <section id="features" className="border-b border-slate-200/80 bg-white py-20 sm:py-28 dark:border-slate-700/50 dark:bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Built for dental practices
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              One AI receptionist. Every channel. Your existing tools.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-700 dark:bg-slate-800/30"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— ROI CALCULATOR ——— */}
      <ROICalculator />

      {/* ——— SOCIAL PROOF ——— */}
      <section id="social-proof" className="border-b border-slate-200/80 bg-white py-20 sm:py-28 dark:border-slate-700/50 dark:bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Trusted by dental clinics
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Practices like yours are already capturing more patients with AI.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-700 dark:bg-slate-800/30"
              >
                <p className="text-slate-700 dark:text-slate-300">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4">
                  <p className="font-semibold text-slate-900 dark:text-white">{t.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ——— PRICING (hidden details, demo CTA) ——— */}
      <section id="pricing" className="border-b border-slate-200/80 bg-slate-50/50 py-20 sm:py-28 dark:border-slate-700/50 dark:bg-slate-800/30">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Pricing that scales with you
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            We tailor plans to your practice size and call volume. No surprise fees.
          </p>
          <p className="mt-6 text-slate-700 dark:text-slate-300">
            Request a demo and we’ll show you options and ROI for your clinic—no commitment.
          </p>
          <Link
            href="#demo-form"
            className="mt-8 inline-block rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            Request Demo
          </Link>
        </div>
      </section>

      {/* ——— CTA (Request Demo form – fake door validation) ——— */}
      <section
        id="demo-form"
        className="border-b border-slate-200/80 bg-slate-900 py-20 sm:py-28 dark:border-slate-700/50 dark:bg-slate-950"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Request a demo
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Tell us a bit about your practice. We’ll get back to you to schedule a walkthrough—no pitch, just how it works for you.
          </p>
        </div>
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <RequestDemoForm />
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <DentistsFAQ />

      {/* Bottom CTA bar */}
      <section className="bg-slate-900 py-12 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg font-semibold text-white">Ready to stop missing patient calls?</p>
          <Link
            href="#demo-form"
            className="mt-4 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Request Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
