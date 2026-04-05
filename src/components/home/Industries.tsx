import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';

const industries = [
  {
    title: 'Exchanges & Trading Platforms',
    description: 'User acquisition campaigns for CEXs, DEXs, brokerages, and trading platforms focused on registrations, deposits, and funded accounts.',
    href: '/industries/crypto-web3',
    emoji: '⛓️',
    color: 'text-blue-400',
    bg: 'from-blue-500/10 to-transparent',
  },
  {
    title: 'DeFi Protocols',
    description: 'Growth campaigns for lending, staking, yield, and trading protocols built around adoption, deposits, and on-chain participation.',
    href: '/industries/crypto-web3',
    emoji: '📈',
    color: 'text-cyan-400',
    bg: 'from-cyan-500/10 to-transparent',
  },
  {
    title: 'RWA & Tokenized Assets',
    description: 'Marketing for tokenized asset platforms and RWA projects that need credibility, education, and investor acquisition.',
    href: '/industries/rwa-token',
    emoji: '🏛️',
    color: 'text-orange-400',
    bg: 'from-orange-500/10 to-transparent',
  },
  {
    title: 'Fintech & Prop Trading',
    description: 'Performance campaigns for payment apps, trading products, and fintech platforms focused on qualified acquisition and conversion.',
    href: '/industries/fintech',
    emoji: '💳',
    color: 'text-green-400',
    bg: 'from-green-500/10 to-transparent',
  },
  {
    title: 'iGaming & Betting',
    description: 'Acquisition campaigns for casinos, sportsbooks, and prediction markets built around deposits, FTDs, and retention.',
    href: '/industries/igaming-binary',
    emoji: '🎰',
    color: 'text-purple-400',
    bg: 'from-purple-500/10 to-transparent',
  },
  {
    title: 'NFT, Gaming & GameFi',
    description: 'Launch and growth campaigns for gaming ecosystems, NFT products, and digital asset communities.',
    href: '/industries/crypto-web3',
    emoji: '🎮',
    color: 'text-pink-400',
    bg: 'from-pink-500/10 to-transparent',
  },
];

export function Industries() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Industries We Serve"
          title="Marketing Built for"
          titleHighlight="High-Growth Web3 Sectors"
          description="We adapt campaigns to the growth mechanics of each vertical, from deposits and funded accounts to token adoption, community growth, and user acquisition."
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.title} delay={i * 0.08}>
              <Link href={industry.href} className="group block">
                <div className={`glass-card p-5 h-full hover:border-white/15 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${industry.bg}`}>
                  <div className="text-3xl mb-3">{industry.emoji}</div>
                  <h3 className={`text-base font-bold mb-1.5 ${industry.color}`}>{industry.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{industry.description}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
