import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';

const cases = [
  {
    slug: 'fintech-igaming-6-geo',
    category: 'Fintech · Influencer Marketing',
    title: 'Fintech KOL Campaigns Across 6 GEOs',
    subtitle: '$3.1M+ budgets managed',
    description: 'Platform pivot from YouTube to Instagram reduced CPT from $740 to $237 in Brazil. Record $125 CPT in Colombia. All budgets closed with zero rollovers.',
    metrics: [
      { label: 'Budget Managed', value: '$3.1M+' },
      { label: 'GEOs Covered', value: '6' },
      { label: 'Best CPT', value: '$100' },
    ],
    tags: ['iGaming', 'Fintech', 'Brazil', 'Colombia', 'Philippines'],
    gradient: 'from-blue-500/20 via-transparent',
    accent: 'border-blue-500/30',
  },
  {
    slug: 'layerai-ido-1b-tvl',
    category: 'Web3 · IDO Marketing',
    title: 'LayerAI IDO: $1B TVL & 50,000 Participants',
    subtitle: '$40M daily trading volume',
    description: '50+ KOLs, 150+ posts, 2M+ audience reach. DAO Maker + WePad launchpads. Airdrop campaign tied to IDO registration drove massive organic growth.',
    metrics: [
      { label: 'TVL at IDO', value: '$1B' },
      { label: 'New Community', value: '55,000' },
      { label: 'Daily Volume', value: '$40M' },
    ],
    tags: ['IDO', 'Layer-2', 'AI Blockchain', 'DAO Maker'],
    gradient: 'from-purple-500/20 via-transparent',
    accent: 'border-purple-500/30',
  },
  {
    slug: 'primexbt-deposits',
    category: 'CEX · Exchange Marketing',
    title: 'PrimeXBT: $1.34M+ in Exchange Deposits',
    subtitle: '12,000 new users acquired',
    description: '15 KOLs from 50+ pitched. Web panel live conference. Afterparty content wave delivered 40% of all registrations — an unexpected performance multiplier.',
    metrics: [
      { label: 'Deposits', value: '$1.34M+' },
      { label: 'New Users', value: '12,000' },
      { label: 'Followers Gained', value: '89,000' },
    ],
    tags: ['CEX', 'Trading', 'Live Event', 'KOL Marketing'],
    gradient: 'from-emerald-500/20 via-transparent',
    accent: 'border-emerald-500/30',
  },
];

export function CaseStudies() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Case Studies"
          title="Real Results, Verified"
          titleHighlight="Performance"
          description="Not just promises — here's exactly what we've delivered for our clients."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <AnimatedSection key={c.slug} delay={i * 0.12}>
              <Link href={`/cases/${c.slug}`} className="group block h-full">
                <div className={`glass-card h-full overflow-hidden hover:border-white/15 transition-all duration-300 hover:-translate-y-1 border ${c.accent}`}>
                  {/* Top gradient bar */}
                  <div className={`h-1 bg-gradient-to-r ${c.gradient.replace('via-transparent', '')} opacity-60`} />

                  <div className="p-6">
                    <p className="text-xs text-gray-500 mb-3">{c.category}</p>
                    <h3 className="text-lg font-bold text-white mb-1">{c.title}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">{c.subtitle}</p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-5">{c.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-5 py-4 border-t border-b border-white/5">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="text-lg font-bold gradient-text">{m.value}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {c.tags.map((tag) => (
                        <Badge key={tag} variant="gray">{tag}</Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
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

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card text-white font-medium rounded-xl hover:bg-white/[0.07] transition-all"
          >
            View All Case Studies
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
