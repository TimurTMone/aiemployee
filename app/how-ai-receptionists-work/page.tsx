import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How AI Receptionists Work | Setup, Channels & Deployment',
  description:
    'How AI receptionist software works: connect channels, train on your business, go live. 24/7 automated response, booking, lead qualification.',
};

const steps = [
  { title: 'Connect Your Channels', desc: 'Link website chat, SMS, WhatsApp, email, and phone to a single dashboard. All incoming inquiries flow into one place. The AI can respond on any channel.' },
  { title: 'Configure for Your Business', desc: 'Provide your business information: hours, services, pricing, FAQs. The AI is pre-trained for your industry (dental, real estate, med spa, etc.) and is customized with your specific details.' },
  { title: 'Choose Modules', desc: 'Select receptionist, booking assistant, lead qualifier, support agent, or follow-up assistant. Each module handles specific tasks. Most businesses start with receptionist and booking.' },
  { title: 'Go Live', desc: 'After a short training period (usually 1–2 weeks), your AI receptionist is live. It responds to customers, books appointments, qualifies leads, and escalates complex cases to your team.' },
];

export default function HowAIReceptionistsWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-white pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            How AI Receptionists Work
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            AI receptionist software connects to your communication channels, is trained on
            your business information, and handles customer conversations automatically.
            Here is how it works from setup to deployment.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="w-full rounded-xl bg-slate-900 px-8 py-4 text-center font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Watch Demo
            </Link>
            <Link
              href="/#demo-form"
              className="w-full rounded-xl border-2 border-slate-200 px-8 py-4 text-center font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 sm:w-auto"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-b border-slate-100 bg-slate-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-xl border border-slate-200 bg-white p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h2 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h2>
                <p className="mt-2 text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens */}
      <section className="border-b border-slate-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">What Happens When a Customer Reaches Out</h2>
          <p className="mt-4 text-slate-600">
            A customer messages or calls. The AI greets them, answers questions using your
            business information, offers to book an appointment if relevant, captures lead
            details for sales, and hands off to staff when needed. All of this happens in
            seconds, 24/7.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-slate-100 bg-slate-900 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to deploy?
          </h2>
          <p className="mt-3 text-slate-300">
            See how it works in a 15-minute demo.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#demo-form"
              className="w-full rounded-xl bg-white px-8 py-4 text-center font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
            >
              Book a Demo
            </Link>
            <Link
              href="/demo"
              className="w-full rounded-xl border-2 border-slate-400 px-8 py-4 text-center font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-semibold text-slate-900">Related</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/ai-receptionist" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              What is an AI receptionist?
            </Link>
            <Link href="/ai-receptionist-vs-front-desk" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              AI receptionist vs front desk
            </Link>
            <Link href="/best-ai-receptionist" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              Best AI receptionist software
            </Link>
            <Link href="/" className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
