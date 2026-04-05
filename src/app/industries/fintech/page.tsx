import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Fintech Influencer Marketing Agency | Crypto Trading, Payment Apps',
  description:
    'Fintech influencer marketing for trading platforms, payment apps, and prop trading firms. Multi-GEO campaigns, CPT optimization, $3.1M+ managed.',
  alternates: { canonical: 'https://kolweb3.com/industries/fintech' },
  openGraph: {
    title: 'Fintech Influencer Marketing | kolweb3.com',
    description: 'Influencer marketing for fintech: crypto trading platforms, payment apps, prop firms. $3.1M+ managed across 6 GEOs.',
    url: 'https://kolweb3.com/industries/fintech',
  },
};

export default function FintechPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <span>/</span>
            <Link href="/industries/fintech" className="hover:text-gray-300">Industries</Link>
            <span>/</span>
            <span className="text-gray-400">Fintech</span>
          </nav>
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
              💳 Fintech
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Fintech <span className="gradient-text">Influencer Marketing</span> That Drives Users
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We run performance-driven influencer campaigns for crypto trading platforms, payment apps, and prop trading firms across LATAM, Southeast Asia, and Africa. $3.1M+ managed with zero budget rollovers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
                Get a Free Proposal
              </Link>
              <Link href="/cases/primexbt-deposits" className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card text-white font-medium rounded-xl hover:bg-white/[0.07] transition-all">
                PrimeXBT Case Study
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📊', title: 'Crypto Trading Platforms (CEX)', desc: 'User acquisition campaigns for centralized exchanges. KOL marketing, live events, and post-event content waves drove $1.34M+ in deposits for PrimeXBT.' },
              { icon: '💹', title: 'Forex & Prop Trading', desc: 'Influencer campaigns for forex brokers and prop trading firms targeting trading-savvy audiences in emerging markets.' },
              { icon: '💸', title: 'Payment & Remittance Apps', desc: 'Conversion-focused influencer campaigns for fintech payment apps targeting unbanked and underbanked populations in high-growth markets.' },
              { icon: '🤖', title: 'Trading Bots & Tools', desc: 'Product review campaigns and tutorial content for algorithmic trading platforms and copy trading services.' },
              { icon: '🏦', title: 'Neo-Banks & Digital Banks', desc: 'Customer acquisition campaigns for digital banking products targeting crypto-savvy demographics.' },
              { icon: '📱', title: 'DeFi Lending & Borrowing', desc: 'TVL growth campaigns for decentralized lending protocols targeting yield-seeking DeFi users globally.' },
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
            <h2 className="text-3xl font-bold text-white">Fintech Marketing <span className="gradient-text">FAQ</span></h2>
          </AnimatedSection>
          <div className="space-y-3">
            {[
              { q: 'What fintech products do you have experience marketing?', a: 'Crypto exchanges (CEX and DEX), forex brokers, prop trading firms, payment apps, digital wallets, trading bots, copy trading platforms, and DeFi lending protocols. Our $1.34M+ deposit result for PrimeXBT demonstrates our CEX acquisition expertise.' },
              { q: 'How do you drive actual deposits and registrations, not just clicks?', a: 'We structure campaigns with clear conversion goals from the start. KOL content includes direct CTAs with tracked referral links. We select KOLs specifically for their audience\'s buying intent, not just reach. We monitor conversion rates per KOL and optimize in real-time — cutting low converters and scaling high performers.' },
              { q: 'What was the afterparty content strategy for PrimeXBT?', a: 'After the main web panel (live online conference), we coordinated a post-event "afterparty" content wave — KOLs sharing behind-the-scenes content, event highlights, and exclusive offers to their audiences. This afterparty wave delivered 40% of all registrations, significantly outperforming expectations and demonstrating the power of event-driven content sequencing.' },
              { q: 'Can you help with fintech user acquisition in emerging markets?', a: 'Yes — emerging markets are our specialty. We have established KOL networks in Brazil, Mexico, Colombia, Philippines, Nigeria, and India. Local KOLs speaking native languages with relevant financial audiences. We understand the specific payment methods, regulatory environment, and cultural context for each market.' },
              { q: 'How do you handle compliance for financial product marketing?', a: 'We work with your legal and compliance team to review all content before publication. Our KOL briefs include mandatory disclaimers, prohibited claims lists, and regulatory references. We ensure all creative is appropriate for the target jurisdiction. This is especially important for trading platforms, which have strict advertising requirements in most markets.' },
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
