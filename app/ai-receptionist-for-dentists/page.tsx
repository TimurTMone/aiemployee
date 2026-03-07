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
    'AI receptionist for dental clinics: answers calls 24/7, books appointments, captures leads. Multilingual, insurance Q&A, CRM integration. Request a demo.',
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
      'AI receptionist for dental clinics: answers calls 24/7, books appointments, captures new patients. Multilingual, CRM integration. Request a demo.',
    type: 'website',
    url: 'https://aiemployee-alpha.vercel.app/ai-receptionist-for-dentists',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Receptionist for Dentists' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Receptionist for Dentists | Never Miss Another Patient Call',
    description: 'AI receptionist for dental clinics: 24/7 calls, booking, multilingual. Request a demo.',
  },
  alternates: { canonical: 'https://aiemployee-alpha.vercel.app/ai-receptionist-for-dentists' },
  robots: { index: true, follow: true },
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
    <article className="min-h-screen bg-[var(--apple-bg)] dark:bg-slate-950">
      <DentistsSchema />

      {/* Theme toggle — fixed, minimal */}
      <div className="fixed right-5 top-24 z-40 md:top-20" aria-hidden>
        <ThemeToggle />
      </div>

      {/* ——— HERO (Apple: one message, huge type, single CTA) ——— */}
      <header
        className="bg-black px-5 pt-28 pb-32 sm:px-8 sm:pt-36 sm:pb-40 dark:bg-black"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto max-w-4xl">
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden>/</li>
              <li className="text-slate-400" aria-current="page">AI Receptionist for Dentists</li>
            </ol>
          </nav>
          <div className="text-center">
          <h1
            id="hero-heading"
            className="apple-display text-apple-hero font-semibold tracking-tight text-white"
          >
            Never miss another patient call.
          </h1>
          <p className="apple-body mt-6 text-xl leading-relaxed text-slate-400 sm:text-2xl">
            AI receptionist for dental clinics. Answers calls, books appointments, captures new patients—24/7.
          </p>
          <div className="mt-12">
            <Link
              href="#demo-form"
              className="inline-block rounded-full bg-white px-8 py-4 text-center text-base font-semibold text-black transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request Demo
            </Link>
          </div>
          <p className="mt-10 text-sm text-slate-500">
            Trusted by dental practices. No long-term contract. Setup in days.
          </p>
          <div className="mt-8">
            <LanguageBar darkBg />
          </div>
        </div>
        </div>
      </header>

      {/* ——— SCALE & LANGUAGE (Apple: clean cards, no borders) ——— */}
      <section
        id="scale"
        className="bg-[#fbfbfd] px-5 py-section dark:bg-slate-900/50"
        aria-labelledby="scale-heading"
      >
        <div className="mx-auto max-w-5xl">
          <h2 id="scale-heading" className="apple-title text-apple-section text-center font-semibold tracking-tight text-slate-900 dark:text-white">
            Built to scale. Built for every patient.
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">100+</p>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">conversations at once</p>
              <p className="apple-body mt-3 text-slate-600 dark:text-slate-400">
                Our AI serves 100 people instantly. No queue, no hold.
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Any language</p>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">AI speaks what patients speak</p>
              <p className="apple-body mt-3 text-slate-600 dark:text-slate-400">
                English, Spanish, Russian, Kyrgyz, Mandarin—and more. One system, every community.
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">24/7</p>
              <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">always on</p>
              <p className="apple-body mt-3 text-slate-600 dark:text-slate-400">
                Calls and messages answered every hour of every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— PROBLEM ——— */}
      <section
        id="problem"
        className="bg-white px-5 py-section dark:bg-slate-900"
        aria-labelledby="problem-heading"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="problem-heading" className="apple-title text-apple-section font-semibold tracking-tight text-slate-900 dark:text-white">
            Lost revenue from missed calls is real.
          </h2>
          <p className="apple-body mt-6 text-lg text-slate-600 dark:text-slate-400">
            When a patient calls and nobody answers, they call the next clinic. Dental practices lose thousands every month—and most never know the true number.
          </p>
          <div className="mt-12 rounded-3xl bg-red-50 p-8 dark:bg-red-950/30">
            <p className="font-semibold text-slate-900 dark:text-white">Typical dental practice</p>
            <ul className="apple-body mt-4 space-y-1 text-slate-700 dark:text-slate-300">
              <li>120+ inquiries per month</li>
              <li>30–40 missed calls</li>
              <li>15–25 patients lost to competitors</li>
              <li>$200–$300 average patient value</li>
            </ul>
            <p className="mt-6 text-xl font-semibold text-red-600 dark:text-red-400">
              Lost revenue: $5,000–$7,500+ per month
            </p>
          </div>
          <p className="apple-body mt-8 text-lg text-slate-700 dark:text-slate-300">
            An AI receptionist answers every call instantly, books appointments, and captures leads 24/7.
          </p>
        </div>
      </section>

      {/* ——— HOW IT WORKS ——— */}
      <section
        id="how-it-works"
        className="bg-[#fbfbfd] px-5 py-section dark:bg-slate-900/50"
        aria-labelledby="how-heading"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="how-heading" className="apple-title text-apple-section text-center font-semibold tracking-tight text-slate-900 dark:text-white">
            How it works.
          </h2>
          <p className="apple-body mt-4 text-center text-lg text-slate-600 dark:text-slate-400">
            Patient calls → AI answers → Appointment booked. In any language, at scale.
          </p>
          <div className="mt-14 overflow-hidden rounded-3xl bg-white shadow-sm dark:bg-slate-800/50">
            <div className="p-6 sm:p-8">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Example conversation</p>
              <div className="mt-5 space-y-4">
                <div className="flex justify-end">
                  <span className="max-w-[85%] rounded-2xl rounded-br-md bg-slate-200 px-4 py-3 text-slate-800 dark:bg-slate-600 dark:text-slate-200">
                    Hi, do you accept new patients? I need a cleaning.
                  </span>
                </div>
                <div className="flex justify-start">
                  <span className="max-w-[85%] rounded-2xl rounded-bl-md bg-slate-900 px-4 py-3 text-white dark:bg-slate-700">
                    Yes, we do. I have Tuesday at 2pm or Thursday at 10am. Which works for you?
                  </span>
                </div>
                <div className="flex justify-end">
                  <span className="max-w-[85%] rounded-2xl rounded-br-md bg-slate-200 px-4 py-3 text-slate-800 dark:bg-slate-600 dark:text-slate-200">
                    Tuesday 2pm. My name is Maria.
                  </span>
                </div>
                <div className="flex justify-start">
                  <span className="max-w-[85%] rounded-2xl rounded-bl-md bg-slate-900 px-4 py-3 text-white dark:bg-slate-700">
                    Done. You’re booked for Tuesday at 2pm. We’ll send a confirmation and reminder.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 border-t border-slate-100 bg-slate-50/50 px-6 py-5 dark:border-slate-700 dark:bg-slate-900/30">
              <span className="text-sm text-slate-600 dark:text-slate-400">Request a demo to see it live for your practice.</span>
              <Link
                href="#demo-form"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— FEATURES ——— */}
      <section
        id="features"
        className="bg-white px-5 py-section dark:bg-slate-900"
        aria-labelledby="features-heading"
      >
        <div className="mx-auto max-w-5xl">
          <h2 id="features-heading" className="apple-title text-apple-section text-center font-semibold tracking-tight text-slate-900 dark:text-white">
            Built for dental practices.
          </h2>
          <p className="apple-body mt-4 text-center text-lg text-slate-600 dark:text-slate-400">
            One AI receptionist. Every channel. Your existing tools.
          </p>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl bg-[#fbfbfd] p-6 dark:bg-slate-800/50">
                <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">{f.title}</h3>
                <p className="apple-body mt-2 text-slate-600 dark:text-slate-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ROICalculator />

      {/* ——— SOCIAL PROOF ——— */}
      <section
        id="social-proof"
        className="bg-[#fbfbfd] px-5 py-section dark:bg-slate-900/50"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-5xl">
          <h2 id="testimonials-heading" className="apple-title text-apple-section text-center font-semibold tracking-tight text-slate-900 dark:text-white">
            Trusted by dental clinics.
          </h2>
          <p className="apple-body mt-4 text-center text-lg text-slate-600 dark:text-slate-400">
            Practices like yours are already capturing more patients with AI.
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-800/50"
                cite={t.author}
              >
                <p className="apple-body text-slate-700 dark:text-slate-300">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-5">
                  <p className="font-semibold text-slate-900 dark:text-white">{t.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ——— PRICING CTA ——— */}
      <section
        id="pricing"
        className="bg-white px-5 py-section dark:bg-slate-900"
        aria-labelledby="pricing-heading"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="pricing-heading" className="apple-title text-apple-section font-semibold tracking-tight text-slate-900 dark:text-white">
            Pricing that scales with you.
          </h2>
          <p className="apple-body mt-6 text-lg text-slate-600 dark:text-slate-400">
            We tailor plans to your practice size and call volume. No surprise fees.
          </p>
          <p className="apple-body mt-4 text-slate-700 dark:text-slate-300">
            Request a demo and we’ll show you options and ROI for your clinic—no commitment.
          </p>
          <Link
            href="#demo-form"
            className="mt-10 inline-block rounded-full bg-slate-900 px-10 py-4 font-semibold text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            Request Demo
          </Link>
        </div>
      </section>

      {/* ——— CTA FORM ——— */}
      <section
        id="demo-form"
        className="bg-black px-5 py-section dark:bg-black"
        aria-labelledby="demo-form-heading"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="demo-form-heading" className="apple-title text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Request a demo.
          </h2>
          <p className="apple-body mt-4 text-lg text-slate-400">
            Tell us about your practice. We’ll get back to you to schedule a walkthrough—no pitch, just how it works for you.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-lg">
          <RequestDemoForm />
        </div>
      </section>

      <DentistsFAQ />

      {/* ——— BOTTOM CTA ——— */}
      <section className="bg-black px-5 py-16 dark:bg-black" aria-label="Call to action">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-semibold text-white">Ready to stop missing patient calls?</p>
          <Link
            href="#demo-form"
            className="mt-6 inline-block rounded-full bg-white px-10 py-4 font-semibold text-black transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Request Demo
          </Link>
        </div>
      </section>
    </article>
  );
}
