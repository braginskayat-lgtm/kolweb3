import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'iGaming & Binary Options Marketing | Influencer Campaigns | kolweb3',
  description:
    'Specialist iGaming and binary options influencer marketing. $3.1M+ managed across Brazil, Mexico, Colombia, Philippines, Nigeria, India. Record CPT $100.',
  alternates: { canonical: 'https://kolweb3.com/industries/igaming-binary' },
  openGraph: {
    title: 'iGaming & Binary Options Influencer Marketing | kolweb3.com',
    description: '$3.1M+ KOL campaigns for iGaming and binary options across 6 GEOs. Record CPT $100 in Philippines, $125 in Colombia.',
    url: 'https://kolweb3.com/industries/igaming-binary',
  },
};

export default function IGamingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <span>/</span>
            <Link href="/industries/igaming-binary" className="hover:text-gray-300">Industries</Link>
            <span>/</span>
            <span className="text-gray-400">iGaming & Binary</span>
          </nav>
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
              🎰 iGaming & Binary Options
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              iGaming & Binary Options <span className="gradient-text">Influencer Marketing</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We&apos;ve managed $3.1M+ in iGaming and binary options KOL campaigns across Brazil, Mexico, Colombia, Philippines, Nigeria, and India. Record CPT of $100 in the Philippines and $125 in Colombia. Zero budget rollovers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
                Get a Free Proposal
              </Link>
              <Link href="/cases/fintech-igaming-6-geo" className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card text-white font-medium rounded-xl hover:bg-white/[0.07] transition-all">
                See $3.1M Case Study
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* GEO stats */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { geo: '🇧🇷 Brazil', value: '$690K', sub: 'CPT from $237 (Instagram)' },
              { geo: '🇲🇽 Mexico', value: '$595K', sub: 'Multi-platform campaign' },
              { geo: '🇨🇴 Colombia', value: '$630K', sub: 'Record CPT $125' },
              { geo: '🇵🇭 Philippines', value: '$586K', sub: 'Record CPT $100' },
              { geo: '🇳🇬 Nigeria', value: '$110K', sub: 'Emerging market' },
              { geo: '🇮🇳 India', value: '$500K', sub: 'Scale campaign' },
            ].map((geo, i) => (
              <AnimatedSection key={geo.geo} delay={i * 0.08}>
                <div className="glass-card p-4 text-center">
                  <div className="text-lg mb-1">{geo.geo}</div>
                  <div className="text-xl font-bold gradient-text">{geo.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{geo.sub}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="iGaming Services" title="What We Do for" titleHighlight="iGaming Clients" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📺', title: 'YouTube & Instagram KOLs', desc: 'Finance and lifestyle influencers who reach working-age audiences with spending power. Platform selection optimized per GEO.' },
              { icon: '📱', title: 'Telegram Channel Campaigns', desc: 'Direct placement in finance, trading, and lifestyle Telegram channels with verified audiences in target GEOs.' },
              { icon: '🎯', title: 'CPT-Optimized Campaigns', desc: 'We optimize for cost per transaction (first deposit). Platform pivots, creative testing, and real-time budget reallocation.' },
              { icon: '💱', title: 'Multi-GEO Execution', desc: 'Simultaneous campaigns in 6+ countries with local KOLs, local content, and geo-specific offers.' },
              { icon: '🔒', title: 'Compliance-Aware Campaigns', desc: 'All campaigns designed with jurisdiction-specific regulatory requirements in mind. Proper disclaimers, age restrictions.' },
              { icon: '📊', title: 'FTD Tracking & Attribution', desc: 'First-time deposit tracking via partner referral systems. Full attribution to individual KOL and platform.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <GlassCard hover glow="purple" className="p-6 h-full">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">iGaming Marketing <span className="gradient-text">FAQ</span></h2>
          </AnimatedSection>
          <div className="space-y-3">
            {[
              { q: 'Which GEOs work best for iGaming influencer marketing?', a: 'Based on our experience: Philippines (CPT $100 average, highly responsive audiences), Colombia (CPT $125, strong first deposit rates), Brazil (CPT $237 on Instagram, massive market size), Mexico (high volume, mid CPT), India (large scale, competitive market), Nigeria (emerging, low CPT but smaller scale). The best GEO depends on your offer type and payment methods accepted.' },
              { q: 'YouTube vs Instagram for iGaming — which performs better?', a: 'In LATAM (Brazil, Mexico, Colombia), Instagram significantly outperforms YouTube for iGaming. We pivoted a major client from YouTube (CPT $740) to Instagram (CPT $237) in Brazil — a 68% CPT reduction. In Southeast Asia (Philippines, Indonesia), YouTube and Telegram perform better. Platform selection must be GEO-specific.' },
              { q: 'How do you ensure compliance for iGaming advertising?', a: 'We work with your compliance team to understand jurisdiction-specific requirements (age gates, responsible gambling disclaimers, license references, prohibited claims). All KOL briefs include compliance guidelines. We only target GEOs where your operator has valid licenses.' },
              { q: 'What KOL niches work for binary options and iGaming?', a: 'Personal finance, trading strategies, passive income, lifestyle/luxury, and sports content KOLs work best. Crypto trading KOLs also convert well for binary options products since the audience already understands speculative investment. We avoid pure entertainment influencers — finance-adjacent niches deliver much lower CPT.' },
              { q: 'Can you guarantee zero budget rollover like your case study?', a: 'We aim for full budget deployment within the campaign window on every engagement. Our processes — pre-approved KOL lists, negotiated rate cards, and parallel pitching — ensure we always have replacement options if a KOL falls through. Our $3.1M case study achieved zero rollovers across all 6 GEOs.' },
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
