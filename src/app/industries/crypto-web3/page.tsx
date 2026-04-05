import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GlassCard } from '@/components/ui/GlassCard';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Crypto & Web3 Marketing Agency | DeFi, NFT, Layer-2 Marketing',
  description:
    'Specialist crypto & Web3 marketing agency for DeFi protocols, NFT collections, Layer-2 chains, AI blockchain, and DAO projects. KOL campaigns, community, PR.',
  alternates: { canonical: 'https://kolweb3.com/industries/crypto-web3' },
  openGraph: {
    title: 'Crypto & Web3 Marketing Agency | kolweb3.com',
    description: 'KOL marketing, community management, and PR for DeFi, NFT, Layer-2, and AI blockchain projects.',
    url: 'https://kolweb3.com/industries/crypto-web3',
  },
};

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Crypto & Web3 Marketing',
  provider: { '@type': 'Organization', name: 'kolweb3.com', url: 'https://kolweb3.com' },
  description: 'KOL marketing, influencer campaigns, community management and PR for crypto, Web3, DeFi, NFT, and Layer-2 blockchain projects.',
  areaServed: 'Worldwide',
  serviceType: 'Crypto Marketing Agency',
};

export default function CryptoWeb3Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <span>/</span>
            <Link href="/industries/crypto-web3" className="hover:text-gray-300">Industries</Link>
            <span>/</span>
            <span className="text-gray-400">Crypto & Web3</span>
          </nav>
          <AnimatedSection className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
              ⛓️ Crypto & Web3
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Marketing for <span className="gradient-text">Crypto & Web3</span> Projects
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              From DeFi protocols and NFT collections to Layer-2 chains and AI blockchains — we&apos;ve built and executed marketing campaigns for every corner of the Web3 ecosystem. $1B+ TVL generated for a single IDO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
                Get a Free Proposal
              </Link>
              <Link href="/cases/layerai-ido-1b-tvl" className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card text-white font-medium rounded-xl hover:bg-white/[0.07] transition-all">
                LayerAI Case Study
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sub-sectors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Web3 Verticals" title="Every Web3" titleHighlight="Sub-Sector" description="Deep expertise across the full Web3 stack." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '📈', title: 'DeFi Protocols', desc: 'DEX, lending, yield farming, liquid staking — TVL growth campaigns that attract real liquidity.' },
              { icon: '🖼️', title: 'NFT Collections', desc: 'Mint campaigns, Discord community building, allowlist growth, and secondary market support.' },
              { icon: '⚡', title: 'Layer-2 & Layer-1 Chains', desc: 'Ecosystem building, developer adoption, and consumer-facing campaigns for new blockchain networks.' },
              { icon: '🤖', title: 'AI Blockchain Projects', desc: 'AI-meets-crypto narrative building. We launched LayerAI (CryptoGPT) — $1B TVL at IDO.' },
              { icon: '🏦', title: 'DAOs & Governance', desc: 'Voter participation campaigns, governance proposal promotion, and DAO contributor recruitment.' },
              { icon: '🎮', title: 'GameFi & Metaverse', desc: 'Player acquisition, guild partnerships, and in-game event marketing for blockchain games.' },
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

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Crypto & Web3 Marketing <span className="gradient-text">FAQ</span></h2>
          </AnimatedSection>
          <div className="space-y-3">
            {[
              { q: 'What makes crypto marketing different from traditional marketing?', a: 'Crypto audiences are technically sophisticated, skeptical of hype, and value authenticity. They respond to credible peer recommendations (KOLs), on-chain proof, and genuine utility — not polished advertising copy. Campaigns that work in traditional finance often fail in crypto. Native knowledge of tokenomics, DeFi mechanics, and blockchain technology is essential for effective messaging.' },
              { q: 'How important is community for a Web3 project?', a: 'Community is the product in Web3. Without an engaged community, tokens have no demand, protocols have no liquidity, and NFTs have no floor. A strong Telegram or Discord community provides social proof, organic marketing, and holder retention. We treat community building as the foundation of every Web3 campaign, not an afterthought.' },
              { q: 'What metrics matter most for Web3 marketing?', a: 'Depends on the project type: DeFi = TVL, liquidity depth, unique wallet users. IDO/ICO = registered participants, wallet connections, oversubscription rate. NFT = mint rate, floor price, holder diversity. CEX/DEX = registered users, trading volume, deposit amounts. We set project-specific KPIs aligned to your tokenomics and growth stage.' },
              { q: 'When should a Web3 project start marketing?', a: 'Earlier than you think. For IDOs, marketing should start 8-12 weeks before launch. For protocol launches, 4-6 weeks of community building pre-launch is minimum. For NFT collections, 3-4 weeks of Discord and allowlist building. Starting too late is the most common mistake — last-minute campaigns significantly underperform.' },
              { q: 'Do you work with early-stage Web3 projects?', a: 'Yes. We work with projects from pre-seed to post-listing. For early-stage projects, we focus on community building, narrative development, and targeted KOL outreach to crypto VCs and early adopters. Budget efficiency is critical at early stages — we structure campaigns to generate maximum traction per dollar spent.' },
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
