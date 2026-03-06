import type { Metadata } from 'next';
import Link from 'next/link';
import { DemoPageContent } from '@/components/DemoPageContent';

export const metadata: Metadata = {
  title: 'Watch Demo | AI Receptionist for Dental Clinics',
  description:
    'See how our AI receptionist answers patient inquiries, books appointments, and follows up automatically. 2-minute demo for dental clinics.',
};

export default function DemoPage() {
  return (
    <>
      <DemoPageContent />
    </>
  );
}
