import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { LanguageProvider } from '@/components/LanguageProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'The AI Operating System for Dental Clinics | Vertical AI Platform',
  description:
    'Vertical AI platform for dental clinics: 5 AI employees — Receptionist, Appointment Optimizer, Follow-Up Agent, Lead Conversion Agent, Treatment Education. 24/7 automation. 10x–30x ROI.',
  keywords: [
    'AI operating system for dental clinics',
    'Vertical AI dental',
    'AI receptionist',
    'AI appointment optimizer',
    'AI for dentists',
    'dental AI suite',
    'AI employees',
    'AI automation for dental',
  ],
  openGraph: {
    title: 'AI Operating System for Dental Clinics | Vertical AI Platform',
    description:
      'Five AI employees for dental clinics: Receptionist, Appointment Optimizer, Follow-Up, Lead Conversion, Treatment Education. Full platform. 24/7 automation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Operating System for Dental Clinics | Vertical AI Platform',
    description:
      'Five AI employees for dental clinics. Full platform. 24/7 automation.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AI Employees',
      url: 'https://aiemployee-alpha.vercel.app',
      description: 'The AI Operating System for Dental Clinics. Vertical AI platform with 5 AI employees: Receptionist, Appointment Optimizer, Follow-Up, Lead Conversion, Treatment Education.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'AI Employees',
      applicationCategory: 'BusinessApplication',
      description:
        'The AI Operating System for Dental Clinics. A Vertical AI platform with five specialized AI employees: AI Receptionist, AI Appointment Optimizer, AI Patient Follow-Up Agent, AI Lead Conversion Agent, and AI Treatment Education Assistant. Automates front desk, scheduling, follow-ups, lead conversion, and patient education 24/7.',
      offers: { '@type': 'Offer', price: '99', priceCurrency: 'USD' },
      featureList: [
        'AI Receptionist - 24/7 call and message answering',
        'AI Appointment Optimizer - scheduling and no-show reduction',
        'AI Patient Follow-Up Agent - recalls and post-visit automation',
        'AI Lead Conversion Agent - qualify and convert leads',
        'AI Treatment Education Assistant - patient education',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is the AI Operating System for Dental Clinics?', acceptedAnswer: { '@type': 'Answer', text: "It's a Vertical AI platform with five specialized AI employees: Receptionist, Appointment Optimizer, Patient Follow-Up Agent, Lead Conversion Agent, and Treatment Education Assistant. They work together to automate front desk and patient journey." } },
        { '@type': 'Question', name: 'Can we start with one AI employee?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Start with the AI Receptionist, then add the Appointment Optimizer, Follow-Up Agent, and others as you scale.' } },
        { '@type': 'Question', name: 'Can it replace staff?', acceptedAnswer: { '@type': 'Answer', text: 'No. It automates repetitive tasks so staff can focus on patient care.' } },
        { '@type': 'Question', name: 'How long does setup take?', acceptedAnswer: { '@type': 'Answer', text: 'Typically 1–3 days per module.' } },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Dental AI Suite',
      description: 'The AI Operating System for Dental Clinics. Five AI employees: Receptionist, Appointment Optimizer, Follow-Up Agent, Lead Conversion Agent, Treatment Education Assistant.',
      brand: { '@type': 'Brand', name: 'AI Employees' },
      offers: { '@type': 'Offer', price: '499', priceCurrency: 'USD' },
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
