'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Nav() {
  const pathname = usePathname() ?? '';
  const isHome = pathname === '/';
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = isHome
    ? [
        { href: '#how-it-works', label: 'How It Works' },
        { href: '#roi', label: 'ROI' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#faq', label: 'FAQ' },
      ]
    : [
        { href: '#solution', label: 'Product' },
        { href: '#use-cases', label: 'Industries' },
        { href: '/ai-receptionist-for-dentists', label: 'For Dentists' },
        { href: '#pricing', label: 'Pricing' },
      ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm" aria-label="Main">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="AI Employees home">
          <span className="text-xl font-semibold tracking-tight text-slate-900">AI Employees</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            {isHome && (
              <Link
                href="/demo"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Watch 2-min demo
              </Link>
            )}
            {!isHome && (
              <Link
                href="/demo"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Watch Demo
              </Link>
            )}
            <Link
              href="#demo-form"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Book Demo
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded p-2 md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden" role="dialog" aria-label="Mobile menu">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-slate-600 hover:text-slate-900"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-2">
            {isHome && (
              <Link
                href="/demo"
                className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Watch 2-min demo
              </Link>
            )}
            {!isHome && (
              <Link
                href="/demo"
                className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-center text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Watch Demo
              </Link>
            )}
            <Link
              href="#demo-form"
              className="flex-1 rounded-lg bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Book Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
