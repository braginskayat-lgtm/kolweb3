import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'RWA & Token Marketing Agency | Real World Asset Tokenization Marketing',
  description:
    'Marketing agency specializing in RWA (Real World Assets) tokenization and security token projects. KOL campaigns, institutional outreach, community building.',
  alternates: { canonical: 'https://kolweb3.com/industries/rwa-token' },
  openGraph: {
    title: 'RWA & Token Marketing Agency | kolweb3.com',
    description: 'Specialized marketing for Real World Asset tokenization and security token projects. KOL campaigns, institutional investor outreach.',
    url: 'https://kolweb3.com/industries/rwa-token',
  },
};

export default function RWAPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <span>/</span>
            <Link href="/industries/rwa-token" className="hover:text-gray-300">Industries</Link>
            <span>/</span>
            <span className="text-gray-400">RWA & Token</span>
          </nav>
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6">
              🏛️ RWA & Token
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              RWA & Token <span className="gradient-text">Marketing Agency</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Real World Asset tokenization is the biggest narrative in crypto. We build marketing campaigns that connect traditional investors with on-chain asset opportunities — from real estate tokens to commodity-backed assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
                Get a Free Proposal
              </Link>
              <Link href="/cases" className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card text-white font-medium rounded-xl hover:bg-white/[0.07] transition-all">
                View Case Studies
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🏠', title: 'Real Estate Tokenization', desc: 'Marketing campaigns targeting both traditional real estate investors and crypto-native DeFi audiences for tokenized property platforms.' },
              { icon: '🥇', title: 'Commodity Tokens (Gold, Oil)', desc: 'Campaigns for commodity-backed token platforms reaching store-of-value seekers and inflation-hedge investors across multiple geographies.' },
              { icon: '📜', title: 'Security Token Offerings', desc: 'Investor outreach and educational campaigns for STOs targeting accredited investors in compliant jurisdictions.' },
              { icon: '🏛️', title: 'Treasury & Bond Tokenization', desc: 'Institutional and retail marketing for tokenized treasury products, building credibility with both TradFi and DeFi audiences.' },
              { icon: '🌿', title: 'Carbon Credit Tokens', desc: 'ESG-narrative campaigns for carbon credit tokenization projects, targeting sustainability-focused institutional and retail investors.' },
              { icon: '🎨', title: 'Art & Collectibles Tokenization', desc: 'Community and influencer campaigns for fractional ownership platforms allowing investment in luxury art, watches, and collectibles.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <GlassCard hover glow="blue" className="p-6 h-full">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">RWA & Token Marketing <span className="gradient-text">FAQ</span></h2>
          </AnimatedSection>
          <div className="space-y-3">
            {[
              { q: 'What makes RWA token marketing unique?', a: 'RWA marketing bridges two worlds: traditional finance audiences who understand the underlying asset (real estate, commodities, bonds) but are new to blockchain, and crypto-native audiences who understand blockchain but need to be educated on the traditional asset class. Effective campaigns speak both languages — emphasizing on-chain transparency and liquidity to TradFi investors, while highlighting the real-world backing and yield to DeFi users.' },
              { q: 'Which KOLs work best for RWA projects?', a: 'A combination: DeFi/yield-focused crypto KOLs explain the on-chain mechanics and APY potential. Traditional finance YouTubers and podcasters (focused on investing, real estate, or commodities) reach TradFi-crossover audiences. LinkedIn thought leaders for institutional outreach. The mix depends heavily on your specific asset class and target investor profile.' },
              { q: 'How do you handle regulatory compliance for security tokens?', a: 'We only promote in jurisdictions where the security token offering has proper regulatory clearance. All content includes required disclosures and avoids prohibited claims. We work closely with your legal team to review all marketing materials. For accredited investor offerings, we ensure audience targeting is appropriate and proper gates are in place.' },
              { q: 'Can you help launch a new RWA token project from scratch?', a: 'Yes. We build the full marketing stack: narrative development, community setup (Telegram + Discord), whitepaper promotion, KOL campaign, media placements, and investor relations. Timeline depends on your TGE or listing schedule — ideally starting 8-12 weeks before launch.' },
              { q: 'What metrics do you track for RWA campaigns?', a: 'Primary: AUM (assets under management) growth, token holder count, TVL, and trading volume post-listing. Secondary: whitelist registrations, investor inquiries, KYC completions, and community member quality. For real estate tokenization specifically, we track property investment amounts and rental yield subscriptions.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <details className="glass-card group" open={i === 0}>
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer hover:bg-white/[0.02] list-none">
                    <span className="text-sm font-semibold text-white">{item.q}</span>
                    <svg className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 border-t border-white/5 pt-4">
                    <p className="text-sm text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
