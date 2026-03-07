'use client';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'ru', label: 'Русский' },
  { code: 'ky', label: 'Кыргызча' },
] as const;

type Props = { darkBg?: boolean };

export function LanguageBar({ darkBg }: Props) {
  return (
    <p className={`flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm ${darkBg ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
      <span>Site available in:</span>
      <span className={darkBg ? 'font-medium text-slate-300' : 'font-medium text-slate-700 dark:text-slate-300'}>
        {LANGUAGES.map((l) => l.label).join(' · ')}
      </span>
    </p>
  );
}
