import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Case Study: $3.1M+ Fintech KOL Campaigns Across 6 GEOs',
  description:
    'How we managed $3.1M+ in fintech/iGaming KOL budgets across Brazil ($690K), Mexico ($595K), Colombia ($630K), Philippines ($586K), Nigeria ($110K), India ($500K). CPT from $100.',
  alternates: { canonical: 'https://kolweb3.com/cases/fintech-igaming-6-geo' },
  openGraph: {
    title: 'Case Study: $3.1M+ Fintech KOL Marketing Across 6 GEOs | kolweb3.com',
    description: 'Platform pivot from YouTube to Instagram reduced CPT from $740 to $237 in Brazil. Record $125 CPT in Colombia. Zero budget rollovers.',
    url: 'https://kolweb3.com/cases/fintech-igaming-6-geo',
  },
};

const geoData = [
  { flag: '🇧🇷', country: 'Brazil', budget: '$690K', highlight: 'CPT pivot: $740 → $237 (Instagram)', platform: 'Instagram-first' },
  { flag: '🇲🇽', country: 'Mexico', budget: '$595K', highlight: 'Multi-platform campaign', platform: 'YouTube + Telegram' },
  { flag: '🇨🇴', country: 'Colombia', budget: '$630K', highlight: 'Record CPT $125', platform: 'Instagram + YouTube' },
  { flag: '🇵🇭', country: 'Philippines', budget: '$586K', highlight: 'Record avg CPT $100', platform: 'YouTube + Telegram' },
  { flag: '🇳🇬', country: 'Nigeria', budget: '$110K', highlight: 'Emerging market entry', platform: 'Instagram + YouTube' },
  { flag: '🇮🇳', country: 'India', budget: '$500K', highlight: 'Large-scale campaign', platform: 'YouTube + Telegram' },
];

export default function FintechCasePage() {
  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Fintech Influencer Marketing: $3.1M+ KOL Campaigns Across 6 GEOs',
    description: 'Case study of a multi-GEO fintech influencer marketing campaign managing $3.1M+ across Brazil, Mexico, Colombia, Philippines, Nigeria, and India.',
    author: { '@type': 'Organization', name: 'kolweb3.com' },
    publisher: { '@type': 'Organization', name: 'kolweb3.com', url: 'https://kolweb3.com' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <span>/</span>
            <Link href="/cases" className="hover:text-gray-300">Cases</Link>
            <span>/</span>
            <span className="text-gray-400">Fintech iGaming 6 GEOs</span>
          </nav>
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Badge variant="blue">Fintech</Badge>
              <Badge variant="purple">iGaming</Badge>
              <Badge variant="gray">NDA — Client Confidential</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
              Fintech Influencer Marketing:{' '}
              <span className="gradient-text">$3.1M+ KOL Campaigns</span> Across 6 GEOs
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-3xl">
              One of our most complex multi-GEO engagements — managing KOL influencer budgets simultaneously across 6 countries for a confidential fintech/iGaming client. Zero budget rollovers. Record CPT performance in multiple markets.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Total Budget Managed', value: '$3.1M+' },
                { label: 'Countries', value: '6 GEOs' },
                { label: 'Best CPT Achieved', value: '$100' },
                { label: 'Budget Rollovers', value: 'Zero' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Campaign Details</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Client', value: 'Confidential (NDA)' },
                    { label: 'Industry', value: 'Fintech / iGaming' },
                    { label: 'Services', value: 'KOL Influencer Marketing' },
                    { label: 'Platforms', value: 'YouTube, Instagram, Telegram' },
                    { label: 'GEOs', value: 'BR, MX, CO, PH, NG, IN' },
                    { label: 'Duration', value: 'Multi-quarter' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between gap-2">
                      <span className="text-xs text-gray-500">{item.label}</span>
                      <span className="text-xs text-white text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection delay={0.1}>
                <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-gray-400 leading-relaxed">
                  The client needed simultaneous KOL campaigns running across six distinct markets with entirely different platform preferences, audience behaviors, local regulations, and CPT benchmarks. The brief: deploy $3.1M+ in KOL budgets efficiently, hit target CPT in each GEO, and close every market period with zero unspent budget. No rollovers allowed.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h2 className="text-2xl font-bold text-white mb-4">The Platform Pivot Insight</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  The most significant strategic breakthrough came in Brazil. Initial campaigns ran on YouTube — the default assumption for "quality" crypto/fintech content. CPT was $740. Unacceptable for the client&apos;s economics.
                </p>
                <div className="glass-card p-5 bg-gradient-to-br from-blue-500/10 to-transparent">
                  <p className="text-gray-300 text-sm mb-3">We hypothesized that Brazilian fintech audiences were more reachable on Instagram (Reels and Stories) than YouTube for this specific product type.</p>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">$740</div>
                      <div className="text-xs text-gray-500">CPT on YouTube</div>
                    </div>
                    <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">$237</div>
                      <div className="text-xs text-gray-500">CPT on Instagram</div>
                    </div>
                    <div className="text-center ml-auto">
                      <div className="text-2xl font-bold gradient-text">68%</div>
                      <div className="text-xs text-gray-500">CPT Reduction</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* GEO breakdown */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <h2 className="text-2xl font-bold text-white">Results by Geography</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {geoData.map((geo, i) => (
              <AnimatedSection key={geo.country} delay={i * 0.08}>
                <div className="glass-card p-5 flex items-start gap-4">
                  <span className="text-3xl">{geo.flag}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-white">{geo.country}</span>
                      <span className="text-lg font-bold gradient-text">{geo.budget}</span>
                    </div>
                    <p className="text-sm text-primary mb-1">{geo.highlight}</p>
                    <p className="text-xs text-gray-500">{geo.platform}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key learnings */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8">
            <h2 className="text-2xl font-bold text-white">Key Learnings</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: '📱', title: 'Platform choice is GEO-specific', desc: 'Never assume YouTube dominates globally. Instagram significantly outperforms for fintech/iGaming in LATAM. Always test platform assumptions early.' },
              { icon: '🔄', title: 'Build parallel KOL pipelines', desc: 'Always have backup KOLs approved and ready. This is how we achieved zero rollovers across 6 simultaneous markets.' },
              { icon: '💰', title: 'CPT varies 7x between markets', desc: 'Philippines at $100 CPT vs. early Brazil at $740 CPT. Geographic CPT benchmarking is essential for budget planning.' },
              { icon: '📊', title: 'Weekly optimization is non-negotiable', desc: 'We made platform and KOL allocation decisions weekly. Month-long "set and forget" campaigns would have significantly underperformed.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="glass-card p-5">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
