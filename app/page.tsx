import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { HowItWorks } from '@/components/HowItWorks';
import { ROI } from '@/components/ROI';
import { Industries } from '@/components/Industries';
import { Beta } from '@/components/Beta';
import { SocialProof } from '@/components/SocialProof';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Channels } from '@/components/Channels';

export default function Home() {
  return (
    <>
      <Hero />
      <Channels />
      <Problem />
      <Solution />
      <HowItWorks />
      <ROI />
      <Industries />
      <Beta />
      <SocialProof />
      <FAQ />
      <FinalCTA />
    </>
  );
}
