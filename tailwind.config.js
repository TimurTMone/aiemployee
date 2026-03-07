/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        apple: {
          bg: 'var(--apple-bg)',
          fg: 'var(--apple-fg)',
          'fg-secondary': 'var(--apple-fg-secondary)',
        },
      },
      fontSize: {
        'apple-hero': ['clamp(2.5rem, 5vw + 1.5rem, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'apple-section': ['clamp(2rem, 4vw + 1rem, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 7rem)',
      },
    },
  },
  plugins: [],
};
