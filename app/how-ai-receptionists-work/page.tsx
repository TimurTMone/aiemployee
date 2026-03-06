import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How AI Receptionists Work | Setup, Channels & Deployment',
  description:
    'How AI receptionist software works: connect channels, train on your business, go live. 24/7 automated response, booking, lead qualification.',
};

export default function HowAIReceptionistsWorkPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        How AI Receptionists Work
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        AI receptionist software connects to your communication channels, is trained on
        your business information, and handles customer conversations automatically.
        Here is how it works from setup to deployment.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Step 1: Connect Your Channels</h2>
      <p className="mt-3 text-slate-700">
        Link website chat, SMS, WhatsApp, email, and phone to a single dashboard. All
        incoming inquiries flow into one place. The AI can respond on any channel.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Step 2: Configure for Your Business</h2>
      <p className="mt-3 text-slate-700">
        Provide your business information: hours, services, pricing, FAQs. The AI is
        pre-trained for your industry (dental, real estate, med spa, etc.) and is
        customized with your specific details.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Step 3: Choose Modules</h2>
      <p className="mt-3 text-slate-700">
        Select receptionist, booking assistant, lead qualifier, support agent, or
        follow-up assistant. Each module handles specific tasks. Most businesses
        start with receptionist and booking.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Step 4: Go Live</h2>
      <p className="mt-3 text-slate-700">
        After a short training period (usually 1–2 weeks), your AI receptionist is
        live. It responds to customers, books appointments, qualifies leads, and
        escalates complex cases to your team.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">What Happens When a Customer Reaches Out</h2>
      <p className="mt-3 text-slate-700">
        A customer messages or calls. The AI greets them, answers questions using your
        business information, offers to book an appointment if relevant, captures lead
        details for sales, and hands off to staff when needed. All of this happens in
        seconds, 24/7.
      </p>

      <nav className="mt-12 border-t border-slate-200 pt-8">
        <p className="font-medium text-slate-700">Related:</p>
        <ul className="mt-2 space-y-1">
          <li>
            <Link href="/ai-receptionist" className="text-slate-900 underline">
              What is an AI receptionist?
            </Link>
          </li>
          <li>
            <Link href="/ai-receptionist-vs-front-desk" className="text-slate-900 underline">
              AI receptionist vs front desk
            </Link>
          </li>
          <li>
            <Link href="/best-ai-receptionist" className="text-slate-900 underline">
              Best AI receptionist software
            </Link>
          </li>
          <li>
            <Link href="/" className="text-slate-900 underline">
              AI Employees homepage
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-12 rounded-xl bg-slate-100 p-6">
        <p className="font-medium text-slate-900">Ready to deploy?</p>
        <Link href="/#demo-form" className="mt-2 inline-block font-medium text-slate-900 underline">
          Book a demo →
        </Link>
      </div>
    </article>
  );
}
