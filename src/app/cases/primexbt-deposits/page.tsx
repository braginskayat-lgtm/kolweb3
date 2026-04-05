import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Case Study: $1,340,000+ Deposits for PrimeXBT Exchange',
  description:
    'How KOL marketing + live web panel conference drove $1.34M+ in deposits, 12,000 new users, and 89,000 followers for PrimeXBT. Afterparty content = 40% of registrations.',
  alternates: { canonical: 'https://kolweb3.com/cases/primexbt-deposits' },
  openGraph: {
    title: 'PrimeXBT Case Study: $1.34M+ Deposits via KOL Marketing | kolweb3.com',
    description: '15 KOLs, live conference, afterparty content wave — 40% of registrations from post-event content. $1.34M+ verified deposits.',
    url: 'https://kolweb3.com/cases/primexbt-deposits',
  },
};

export default function PrimeXBTCasePage() {
  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'CEX Marketing Case Study: $1,340,000+ Deposits for PrimeXBT Exchange',
    description: 'KOL influencer marketing campaign for PrimeXBT crypto trading platform generating over $1.34 million in verified deposits.',
    author: { '@type': 'Organization', name: 'kolweb3.com' },
    publisher: { '@type': 'Organization', name: 'kolweb3.com', url: 'https://kolweb3.com' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <span>/</span>
            <Link href="/cases" className="hover:text-gray-300">Cases</Link>
            <span>/</span>
            <span className="text-gray-400">PrimeXBT Deposits</span>
          </nav>
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Badge variant="green">CEX Exchange</Badge>
              <Badge variant="blue">KOL Marketing</Badge>
              <Badge variant="gray">PrimeXBT</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
              CEX Marketing:{' '}
              <span className="gradient-text">$1,340,000+ Deposits</span>{' '}
              for PrimeXBT Exchange
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-3xl">
              PrimeXBT is a multi-asset trading platform for Crypto, Commodities, and Forex. We ran a KOL campaign combined with a live web panel conference — and discovered that the afterparty content wave delivered 40% of all registrations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Total Deposits', value: '$1.34M+' },
                { label: 'New Users', value: '12,000' },
                { label: 'Followers Gained', value: '89,000' },
                { label: 'Afterparty Registrations', value: '40%' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center border border-emerald-500/20">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Campaign Details</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Client', value: 'PrimeXBT' },
                    { label: 'Type', value: 'Crypto Trading Platform' },
                    { label: 'Markets', value: 'Crypto, Commodities, Forex' },
                    { label: 'KOLs Selected', value: '15 from 50+ pitched' },
                    { label: 'Total Posts', value: '100+' },
                    { label: 'Event Type', value: 'Web Panel (Live Conference)' },
                    { label: 'Campaign Type', value: 'KOL + Event + Afterparty' },
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
                <h2 className="text-2xl font-bold text-white mb-4">About PrimeXBT</h2>
                <p className="text-gray-400 leading-relaxed">
                  PrimeXBT is an award-winning multi-asset crypto trading platform offering exposure to Cryptocurrency, Commodities, Forex, and Stock indices. The platform targets sophisticated traders looking for leverage and diverse market access beyond simple spot crypto trading.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h2 className="text-2xl font-bold text-white mb-4">Campaign Structure</h2>
                <div className="space-y-4">
                  {[
                    { icon: '🎯', title: 'KOL Selection — 15 from 50+ Pitched', desc: 'We pitched 50+ crypto trading and finance KOLs to PrimeXBT. Through audience analysis, engagement rate review, and brand fit assessment, we selected 15 high-performing KOLs across YouTube and Telegram. The strict selection process ensured every KOL had a demonstrably relevant audience for a trading platform.' },
                    { icon: '📡', title: 'Web Panel — Live Online Conference', desc: 'A live web panel event featuring KOLs and PrimeXBT representatives discussing crypto market trends, platform features, and exclusive promotions for attendees. The live format created urgency and direct engagement — attendees who joined live converted at a significantly higher rate than those who watched recordings.' },
                    { icon: '🎉', title: 'Afterparty Content Wave — The Surprise Win', desc: 'The most significant discovery of this campaign: after the main event, we coordinated a "afterparty" content wave where KOLs shared highlights, behind-the-scenes moments, and exclusive post-event offers. This afterparty wave, originally planned as supplementary content, delivered 40% of all campaign registrations — dramatically outperforming expectations.' },
                    { icon: '📊', title: '100+ Posts Across Campaign Duration', desc: 'Pre-event buildup, live event coverage, and post-event afterparty content combined for 100+ total KOL posts. This content cadence maintained platform visibility throughout the campaign lifecycle rather than spiking on a single day.' },
                  ].map((item, i) => (
                    <div key={item.title} className="glass-card p-5 flex gap-4">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="glass-card p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
                  <h2 className="text-xl font-bold text-white mb-3">The Afterparty Insight</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    The 40% afterparty registration figure was unexpected and changed how we structure CEX campaigns. The pattern we observed: live event creates urgency and awareness → afterparty content reaches people who missed the event and those who needed multiple touchpoints to convert.
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We now build afterparty content waves into every event-based campaign as a standard component. The post-event audience is warm but not yet converted — the right content at the right time captures them.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
