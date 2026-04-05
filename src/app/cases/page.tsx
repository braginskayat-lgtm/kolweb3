import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Crypto KOL Marketing Case Studies | Proven Results',
  description:
    'Real crypto KOL marketing case studies: $3.1M+ managed, $1B TVL for LayerAI, $1.34M+ deposits for PrimeXBT. Verified performance data.',
  alternates: { canonical: 'https://kolweb3.com/cases' },
  openGraph: {
    title: 'Crypto KOL Marketing Case Studies | kolweb3.com',
    description: 'Verified case studies: $3.1M fintech KOL campaigns, $1B TVL IDO, $1.34M+ exchange deposits.',
    url: 'https://kolweb3.com/cases',
  },
};

const cases = [
  {
    slug: 'fintech-igaming-6-geo',
    category: 'Fintech · iGaming · Influencer Marketing',
    title: 'Fintech Influencer Marketing: $3.1M+ KOL Campaigns Across 6 GEOs',
    description: 'How we managed $3.1M+ in KOL budgets across Brazil, Mexico, Colombia, Philippines, Nigeria, and India — including a platform pivot that reduced CPT from $740 to $237.',
    tags: ['iGaming', 'Fintech', 'Multi-GEO', 'KOL Marketing', 'NDA'],
    metrics: [
      { label: 'Total Budget', value: '$3.1M+' },
      { label: 'GEOs', value: '6' },
      { label: 'Best CPT', value: '$100' },
      { label: 'Rollovers', value: '0' },
    ],
    accent: 'border-blue-500/30',
  },
  {
    slug: 'layerai-ido-1b-tvl',
    category: 'Web3 · IDO Marketing · Community',
    title: 'IDO Marketing: 50,000 Participants & $1B TVL for LayerAI',
    description: 'Full IDO launch campaign for LayerAI (CryptoGPT) — 50+ KOLs, airdrop mechanics, community growth from 0 to 55,000, and dual launchpad execution.',
    tags: ['IDO', 'Layer-2', 'AI Blockchain', 'DAO Maker', 'WePad', 'Airdrop'],
    metrics: [
      { label: 'TVL at IDO', value: '$1B' },
      { label: 'Community', value: '55,000' },
      { label: 'Daily Volume', value: '$40M' },
      { label: 'KOLs', value: '50+' },
    ],
    accent: 'border-purple-500/30',
  },
  {
    slug: 'primexbt-deposits',
    category: 'CEX · Exchange Marketing · Live Event',
    title: 'CEX Marketing: $1,340,000+ Deposits for PrimeXBT Exchange',
    description: 'KOL campaign + live web panel conference for PrimeXBT. The afterparty content wave delivered 40% of all registrations — an unexpected performance multiplier.',
    tags: ['CEX', 'Trading Platform', 'Live Event', 'KOL Marketing', 'Afterparty Content'],
    metrics: [
      { label: 'Deposits', value: '$1.34M+' },
      { label: 'New Users', value: '12,000' },
      { label: 'Followers', value: '89,000' },
      { label: 'Afterparty %', value: '40%' },
    ],
    accent: 'border-emerald-500/30',
  },
];

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Verified Case Studies
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Crypto KOL Marketing <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Not promises — proven results. Here are three campaigns we&apos;re proud to share (where client NDA allows). Real budgets, real results, real numbers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cases */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {cases.map((c, i) => (
              <AnimatedSection key={c.slug} delay={i * 0.1}>
                <Link href={`/cases/${c.slug}`} className="group block">
                  <div className={`glass-card overflow-hidden border hover:border-white/20 transition-all duration-300 hover:-translate-y-1 ${c.accent}`}>
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 mb-2">{c.category}</p>
                          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{c.title}</h2>
                          <p className="text-gray-400 text-sm leading-relaxed mb-4">{c.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {c.tags.map((tag) => (
                              <Badge key={tag} variant="gray">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="lg:w-64 grid grid-cols-2 gap-3">
                          {c.metrics.map((m) => (
                            <div key={m.label} className="glass-card p-3 text-center">
                              <div className="text-xl font-bold gradient-text">{m.value}</div>
                              <div className="text-xs text-gray-500 mt-1">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Read full case study
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
