import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { Stats } from '@/components/home/Stats';
import { Services } from '@/components/home/Services';
import { Industries } from '@/components/home/Industries';
import { CaseStudies } from '@/components/home/CaseStudies';
import { WhyUs } from '@/components/home/WhyUs';
import { Platforms } from '@/components/home/Platforms';
import { FAQ } from '@/components/home/FAQ';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Crypto KOL & Influencer Marketing Agency | Web3, DeFi, iGaming',
  description:
    'Leading crypto KOL & influencer marketing agency for Web3, RWA, DeFi & iGaming projects. $3.1M+ budgets managed, $1B+ TVL generated, 55,000+ community members. Get a free proposal.',
  alternates: { canonical: 'https://kolweb3.com' },
  openGraph: {
    title: 'Crypto KOL & Influencer Marketing Agency | kolweb3.com',
    description: '$3.1M+ budgets managed. $1B+ TVL generated. Performance-driven crypto KOL marketing for Web3, DeFi, RWA & iGaming.',
    url: 'https://kolweb3.com',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'kolweb3.com',
  url: 'https://kolweb3.com',
  logo: 'https://kolweb3.com/logo.png',
  description:
    'Crypto KOL & influencer marketing agency specializing in Web3, RWA, DeFi, iGaming and Fintech projects.',
  email: 'hello@kolweb3.com',
  sameAs: [
    'https://x.com/kolweb3agency',
    'https://t.me/kolweb3agency',
  ],
  areaServed: 'Worldwide',
  knowsAbout: ['Crypto Marketing', 'KOL Marketing', 'Web3 Marketing', 'Influencer Marketing', 'DeFi Marketing'],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <CaseStudies />
      <WhyUs />
      <Platforms />
      <FAQ />
      <CTA />
    </>
  );
}
