import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'About kolweb3.com | Crypto KOL Marketing Agency',
  description:
    'About kolweb3.com — a performance-driven crypto KOL & influencer marketing agency specializing in Web3, DeFi, iGaming and Fintech. $3.1M+ managed.',
  alternates: { canonical: 'https://kolweb3.com/about' },
  openGraph: {
    title: 'About kolweb3.com | Crypto KOL Marketing Agency',
    description: 'Performance-driven crypto KOL marketing agency. $3.1M+ budgets managed. Meet our approach to Web3 influencer marketing.',
    url: 'https://kolweb3.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Crypto-Native Agency for{' '}
              <span className="gradient-text">Web3 Growth</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              kolweb3.com is a performance-driven influencer marketing agency built exclusively for the crypto and Web3 ecosystem. We don&apos;t come from traditional marketing — we come from crypto. That difference matters.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-6">Our <span className="gradient-text">Philosophy</span></h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>Crypto audiences are different. They&apos;re sophisticated, skeptical of hype, and deeply research-driven. They respond to peer trust — KOLs they follow, communities they belong to, projects backed by people they respect.</p>
                <p>Traditional marketing agencies miss this. They apply brand awareness playbooks to audiences that have already seen every version of that playbook. The result: high spend, low conversion, frustrated clients.</p>
                <p>We built kolweb3.com to do it differently. Every campaign is designed around conversion metrics — CPT (cost per transaction), registrations, deposits, TVL — not vanity metrics like impressions or follower counts.</p>
                <p>Our team has been inside crypto since the DeFi summer. We understand tokenomics, we know what makes an IDO succeed or fail, and we&apos;ve experienced bear and bull markets from the inside. That context shapes every recommendation we make.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '$3.1M+', label: 'Budgets Managed', icon: '💰' },
                  { value: '$1B+', label: 'TVL Generated', icon: '📈' },
                  { value: '55,000+', label: 'Community Members', icon: '👥' },
                  { value: '50+', label: 'KOLs Per Campaign', icon: '⭐' },
                  { value: '6', label: 'GEOs Covered', icon: '🌍' },
                  { value: '$100', label: 'Record CPT (PH)', icon: '🎯' },
                ].map((stat, i) => (
                  <AnimatedSection key={stat.label} delay={0.1 + i * 0.07}>
                    <GlassCard hover className="p-5 text-center">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-xl font-bold gradient-text mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </GlassCard>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">What We <span className="gradient-text">Stand For</span></h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '🎯', title: 'Performance Over Vanity', desc: 'We measure success in CPT, deposits, TVL, and registrations. Views and impressions are reported, but never presented as the primary success metric.' },
              { icon: '🔍', title: 'Radical Transparency', desc: 'Every campaign gets a full performance breakdown. We report what worked, what didn\'t, and what we\'d do differently. Including the bad numbers.' },
              { icon: '🧠', title: 'Crypto-Native Thinking', desc: 'We live in the same ecosystems as your target audience. We hold tokens, use DeFi protocols, and participate in the communities we market to.' },
              { icon: '⚡', title: 'Speed of Execution', desc: 'Crypto moves fast. We can go from brief to first live content in 7 days when needed. IDO deadlines and listing dates don\'t wait.' },
              { icon: '🤝', title: 'Long-Term Partnerships', desc: 'Our best client relationships are multi-year. We learn your project deeply and become genuine extensions of your marketing team.' },
              { icon: '💯', title: 'Zero Rollover Commitment', desc: 'Every budget is fully deployed. We build parallel KOL pipelines to ensure this — you never lose campaign momentum to a KOL cancellation.' },
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

      {/* Contact prompt */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-white mb-4">Ready to work together?</h2>
            <p className="text-gray-400 mb-8">Tell us about your project and we&apos;ll come back with a tailored strategy and KOL recommendations within 24 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
                Contact Us
              </Link>
              <Link href="/cases" className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card text-white font-medium rounded-xl hover:bg-white/[0.07] transition-all">
                View Case Studies
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  );
}
