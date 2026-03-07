'use client';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'ru', label: 'Русский' },
  { code: 'ky', label: 'Кыргызча' },
] as const;

export function LanguageBar() {
  return (
    <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
      <span>Site available in:</span>
      <span className="font-medium text-slate-700 dark:text-slate-300">
        {LANGUAGES.map((l) => l.label).join(' · ')}
      </span>
    </p>
  );
}
