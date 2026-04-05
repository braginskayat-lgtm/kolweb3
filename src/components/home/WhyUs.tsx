import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';

const reasons = [
  {
    number: '01',
    title: 'Crypto-Native Expertise',
    description: 'We live and breathe Web3. Our team has hands-on experience with DeFi, NFTs, IDOs, CEX exchanges, and iGaming — we understand your product and your audience.',
    icon: '🧠',
  },
  {
    number: '02',
    title: 'Verified KOL Network',
    description: '50+ vetted crypto KOLs across YouTube, Twitter/X, Telegram, TikTok. Every KOL is checked for audience authenticity, engagement rate, and niche relevance.',
    icon: '✅',
  },
  {
    number: '03',
    title: 'Performance-First Approach',
    description: 'We optimize for CPT (cost per transaction/registration), not vanity metrics. Platform pivots, creative testing, and budget reallocation — all based on real data.',
    icon: '📊',
  },
  {
    number: '04',
    title: 'Multi-GEO Execution',
    description: 'Active campaigns in Brazil, Mexico, Colombia, Philippines, Nigeria, India, Southeast Asia, and more. Local KOLs, local languages, local payment methods.',
    icon: '🌍',
  },
  {
    number: '05',
    title: 'Zero Rollover Policy',
    description: 'Every budget is fully deployed within the campaign window. Our $3.1M+ fintech campaigns closed with zero unspent budgets — full accountability on every dollar.',
    icon: '💯',
  },
  {
    number: '06',
    title: 'Full Transparency & Reporting',
    description: 'Live campaign dashboards, weekly performance reports, post-campaign analysis. You always know exactly where your budget is going and what it\'s delivering.',
    icon: '📋',
  },
];

export function WhyUs() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="The Agency That"
          titleHighlight="Delivers Results"
          description="Six reasons why crypto projects trust kolweb3.com for their influencer marketing."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.number} delay={i * 0.08}>
              <div className="glass-card p-6 h-full hover:border-white/15 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">{reason.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-gray-600 mb-1">{reason.number}</div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">{reason.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
