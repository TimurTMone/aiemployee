'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageProvider';

export function Nav() {
  const { t, locale, setLocale } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-slate-900">
            AI Employees
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#solution"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            {t.nav.product}
          </Link>
          <Link
            href="#use-cases"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            {t.nav.industries}
          </Link>
          <Link
            href="/ai-receptionist-for-dentists"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Dental AI Suite
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            {t.nav.pricing}
          </Link>

          <div className="flex items-center gap-3">
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as 'en' | 'es' | 'ru')}
              className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="ru">RU</option>
            </select>
            <Link
              href="/demo"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Watch Demo
            </Link>
            <Link
              href="#demo-form"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Book Demo
            </Link>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <Link
            href="#solution"
            className="block py-2 text-slate-600"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.product}
          </Link>
          <Link
            href="#use-cases"
            className="block py-2 text-slate-600"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.industries}
          </Link>
          <Link
            href="/ai-receptionist-for-dentists"
            className="block py-2 text-slate-600"
            onClick={() => setMobileOpen(false)}
          >
            Dental AI Suite
          </Link>
          <Link
            href="#pricing"
            className="block py-2 text-slate-600"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.pricing}
          </Link>
          <div className="mt-3 flex gap-2">
            <Link
              href="/demo"
              className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-center text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Watch Demo
            </Link>
            <Link
              href="#demo-form"
              className="flex-1 rounded-lg bg-slate-900 px-4 py-2 text-center text-sm font-medium text-white"
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
