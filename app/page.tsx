import type { Metadata } from 'next';
import { HomeSchema } from '@/components/home/HomeSchema';
import { HomeHero } from '@/components/home/HomeHero';
import { LostRevenue } from '@/components/home/LostRevenue';
import { RealLifeStories } from '@/components/home/RealLifeStories';
import { HowItWorks } from '@/components/home/HowItWorks';
import { WhatAIHandles } from '@/components/home/WhatAIHandles';
import { ROISection } from '@/components/home/ROISection';
import { CaseStudySection } from '@/components/home/CaseStudySection';
import { PricingSection } from '@/components/home/PricingSection';
import { HomeFAQ } from '@/components/home/HomeFAQ';
import { DemoFormSection } from '@/components/home/DemoFormSection';

export const metadata: Metadata = {
  title: 'AI Receptionist for Dental Clinics | Stop Losing Patients After Hours',
  description:
    'Answer missed calls, book more patients, reduce no-shows. Your AI front desk works 24/7. Book a 15-minute demo.',
  keywords: [
    'AI receptionist for dental clinics',
    'dental AI receptionist',
    'dental appointment booking AI',
    'dental clinic automation',
    'AI for dental front desk',
  ],
  openGraph: {
    title: 'AI Receptionist for Dental Clinics | Stop Losing Patients After Hours',
    description:
      'Answer missed calls, book more patients, reduce no-shows. Your AI front desk works 24/7. Book a 15-minute demo.',
    type: 'website',
    url: 'https://aiemployee-alpha.vercel.app',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Employees - AI receptionist for dental clinics' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Receptionist for Dental Clinics | Stop Losing Patients After Hours',
    description: 'Answer missed calls, book more patients, reduce no-shows. AI front desk 24/7. Book a demo.',
  },
  alternates: { canonical: 'https://aiemployee-alpha.vercel.app' },
  robots: { index: true, follow: true },
};

export default function Home() {
  return (
    <article>
      <HomeSchema />
      <HomeHero />
      <LostRevenue />
      <RealLifeStories />
      <HowItWorks />
      <WhatAIHandles />
      <ROISection />
      <CaseStudySection />
      <PricingSection />
      <HomeFAQ />
      <DemoFormSection />
    </article>
  );
}
