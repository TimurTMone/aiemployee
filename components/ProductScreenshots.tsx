'use client';

import Link from 'next/link';

/**
 * Product UI mockups based on PRODUCT-UI-SPECIFICATIONS.md.
 * Replace placeholder content with actual screenshots when available.
 */
export function ProductScreenshots() {
  const screens = [
    {
      title: 'AI Receptionist',
      desc: 'Chat and phone answered 24/7. Books appointments, answers FAQs, captures every inquiry.',
      placeholder: 'Chat & call interface',
    },
    {
      title: 'Appointment Optimizer',
      desc: 'Smart scheduling, reminders, gap-filling. Reduces no-shows.',
      placeholder: 'Calendar & scheduling',
    },
    {
      title: 'Follow-Up & Lead Conversion',
      desc: 'Post-visit follow-ups, recalls, lead nurturing. Converts inquiries into booked patients.',
      placeholder: 'Follow-up workflow',
    },
    {
      title: 'Treatment Education',
      desc: 'Explains procedures and options. Reduces front-desk questions.',
      placeholder: 'Education flow',
    },
    {
      title: 'Analytics Dashboard',
      desc: 'Inquiries, bookings, response time, AI employee performance. Full visibility.',
      placeholder: 'Dashboard',
    },
  ];

  return (
    <section id="product-screenshots" className="border-b border-slate-100 bg-slate-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
          See the Product
        </h2>
        <p className="mt-4 text-center text-slate-600">
          All five AI employees in one platform. See the product in action.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {screens.map((screen) => (
            <div
              key={screen.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex aspect-video items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                {screen.placeholder}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{screen.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{screen.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link href="/demo" className="font-semibold text-slate-900 underline hover:no-underline">
            Watch full demo →
          </Link>
        </p>
      </div>
    </section>
  );
}
