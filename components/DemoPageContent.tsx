'use client';

import Link from 'next/link';

export function DemoPageContent() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-slate-100 bg-slate-50/50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            See How Our AI Receptionist Works
          </h1>
          <p className="mt-4 text-center text-lg text-slate-600">
            2-minute demo. No signup required. See how dental clinics capture every inquiry.
          </p>

          {/* Video placeholder - replace with YouTube/Vimeo embed */}
          <div className="mt-12 aspect-video w-full overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-100">
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-slate-500">
              <svg className="h-24 w-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl font-medium">2-Minute Product Demo</p>
              <p className="text-sm">Replace with YouTube/Vimeo embed</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#demo-form"
              className="rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
            >
              Book a 15-Minute Demo
            </Link>
            <Link
              href="/ai-receptionist-for-dentists"
              className="rounded-xl border-2 border-slate-200 px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Back to Dentist Page
            </Link>
          </div>
        </div>
      </section>

      {/* How the AI receptionist works */}
      <section className="border-b border-slate-100 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">How the AI Receptionist Works</h2>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">1. Patient reaches out</h3>
              <p className="mt-2 text-slate-600">
                Via phone, website chat, WhatsApp, or SMS. The AI greets them instantly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">2. AI answers and qualifies</h3>
              <p className="mt-2 text-slate-600">
                Answers questions (hours, services, new patients). Captures name, phone, preferred time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">3. Appointment booked</h3>
              <p className="mt-2 text-slate-600">
                AI syncs with your calendar, offers available slots, and confirms the booking.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">4. Follow-up</h3>
              <p className="mt-2 text-slate-600">
                Sends reminders, handles reschedules, and follows up with no-shows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live example conversation */}
      <section className="border-b border-slate-100 bg-slate-50/50 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Example Conversation</h2>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-br-md bg-slate-200 px-4 py-2 text-slate-800">
                  Hi, do you accept new patients?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-slate-900 px-4 py-2 text-white">
                  Yes! We welcome new patients. What type of appointment do you need?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl rounded-br-md bg-slate-200 px-4 py-2 text-slate-800">
                  I need a cleaning. When's your next available?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-slate-900 px-4 py-2 text-white">
                  We have Tuesday 2pm and Thursday 10am. Which works for you? I'll need your name and phone to book.
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">AI conversation in seconds — 24/7</p>
          </div>
        </div>
      </section>

      {/* Calendar booking widget placeholder */}
      <section className="border-b border-slate-100 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900">Appointment Booking</h2>
          <p className="mt-2 text-slate-600">
            The AI connects to your calendar and shows available slots. Patient picks a time. Booking confirmed.
          </p>
          <div className="mt-8 rounded-2xl border-2 border-slate-200 bg-white p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 p-4">
                <p className="text-sm font-medium text-slate-500">Select date</p>
                <p className="mt-2 font-semibold text-slate-900">Tuesday, Mar 12</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <p className="text-sm font-medium text-slate-500">Available times</p>
                <p className="mt-2 font-semibold text-slate-900">2:00 PM • 3:30 PM • 4:00 PM</p>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-slate-500">Syncs with Google Calendar, Calendly</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Ready to see it for your clinic?</h2>
          <p className="mt-2 text-slate-600">Book a 15-minute demo. We'll show you how it works with your setup.</p>
          <Link
            href="/#demo-form"
            className="mt-6 inline-block rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            Book Demo
          </Link>
        </div>
      </section>
    </article>
  );
}
