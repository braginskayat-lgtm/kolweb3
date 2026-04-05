import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Case Study: LayerAI IDO — 50,000 Participants & $1B TVL',
  description:
    'How we launched LayerAI (CryptoGPT) IDO: 50+ KOLs, 55,000 community members, $1B TVL, $40M daily trading volume. DAO Maker + WePad launchpads.',
  alternates: { canonical: 'https://kolweb3.com/cases/layerai-ido-1b-tvl' },
  openGraph: {
    title: 'LayerAI IDO Case Study: $1B TVL, 50,000 Participants | kolweb3.com',
    description: 'Full IDO launch campaign results: 50+ KOLs, 150+ posts, 2M+ audience reach, 55,000 community members, $1B TVL at IDO.',
    url: 'https://kolweb3.com/cases/layerai-ido-1b-tvl',
  },
};

export default function LayerAICasePage() {
  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'IDO Marketing Case Study: 50,000 Participants & $1B TVL for LayerAI',
    description: 'How kolweb3.com executed the LayerAI (CryptoGPT) IDO marketing campaign, generating $1B TVL and 55,000 community members.',
    author: { '@type': 'Organization', name: 'kolweb3.com' },
    publisher: { '@type': 'Organization', name: 'kolweb3.com', url: 'https://kolweb3.com' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <span>/</span>
            <Link href="/cases" className="hover:text-gray-300">Cases</Link>
            <span>/</span>
            <span className="text-gray-400">LayerAI IDO $1B TVL</span>
          </nav>
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Badge variant="purple">Web3</Badge>
              <Badge variant="blue">IDO Marketing</Badge>
              <Badge variant="gray">LayerAI (CryptoGPT)</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-6">
              IDO Marketing:{' '}
              <span className="gradient-text">50,000 Participants & $1B TVL</span>{' '}
              for LayerAI
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-3xl">
              LayerAI (formerly CryptoGPT) is an Ethereum Layer-2 AI blockchain with native token $GPT. This is how we took their IDO from zero to $1B in TVL, 55,000 community members, and $40M daily trading volume post-listing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'TVL at IDO', value: '$1B' },
                { label: 'New Community Members', value: '55,000' },
                { label: 'Daily Trading Volume', value: '$40M' },
                { label: 'IDO Participants', value: '50,000' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center border border-purple-500/20">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Details */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="glass-card p-6 sticky top-24">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Campaign Details</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Client', value: 'LayerAI (CryptoGPT)' },
                    { label: 'Token', value: '$GPT' },
                    { label: 'Type', value: 'Ethereum L2, AI Blockchain' },
                    { label: 'KOLs', value: '50+ deployed' },
                    { label: 'Posts', value: '150+ total' },
                    { label: 'Audience Reach', value: '2M+' },
                    { label: 'Launchpads', value: 'DAO Maker + WePad' },
                    { label: 'Community Posts', value: '3-5 / day' },
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
                <h2 className="text-2xl font-bold text-white mb-4">About LayerAI</h2>
                <p className="text-gray-400 leading-relaxed">
                  LayerAI (formerly CryptoGPT) is an Ethereum Layer-2 blockchain designed specifically for AI applications. The $GPT token powers the ecosystem and was the subject of a major IDO campaign on DAO Maker and WePad launchpads. We were engaged to build the community, execute KOL marketing, and design the airdrop mechanics.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <h2 className="text-2xl font-bold text-white mb-4">Campaign Components</h2>
                <div className="space-y-4">
                  {[
                    { icon: '👥', title: 'KOL Marketing — 50+ KOLs, 150+ Posts', desc: 'We deployed 50+ verified crypto KOLs across YouTube, Twitter/X, and Telegram. Each KOL received a tailored content brief covering LayerAI\'s AI-meets-blockchain narrative, tokenomics, and IDO mechanics. 150+ total posts reaching 2M+ combined audience.' },
                    { icon: '🪂', title: 'Airdrop Campaign Tied to IDO Registration', desc: 'We designed airdrop mechanics that tied token distribution to IDO registration — creating a direct incentive loop. Social tasks (follow, retweet, join Telegram) unlocked airdrop eligibility, which required IDO wallet connection. This mechanic drove massive registrations organically.' },
                    { icon: '📣', title: 'Community Management — 3-5 Posts/Day', desc: 'Our community team posted 3-5 times daily in the LayerAI Telegram channel across 8 weeks. Content mix: educational threads about Layer-2 tech, AI use cases, IDO progress updates, and community AMAs. This cadence grew the community from 0 to 55,000 members.' },
                    { icon: '🚀', title: 'Launchpad Coordination — DAO Maker + WePad', desc: 'Dual launchpad listing maximized IDO reach and investor diversity. DAO Maker brought institutional and experienced IDO participants. WePad contributed additional tier-specific allocation pools. Coordination between both platforms required careful timing and consistent messaging.' },
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
                <h2 className="text-2xl font-bold text-white mb-4">The Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { value: '$1,000,000,000', label: 'Total Value Locked at IDO', sub: 'At time of IDO completion' },
                    { value: '55,000', label: 'New Community Members', sub: 'Telegram growth in 8 weeks' },
                    { value: '$40,000,000', label: 'Daily Trading Volume', sub: 'After exchange listing' },
                  ].map((r) => (
                    <div key={r.label} className="glass-card p-5 border border-purple-500/20 text-center">
                      <div className="text-xl font-bold gradient-text mb-1">{r.value}</div>
                      <div className="text-sm font-semibold text-white mb-1">{r.label}</div>
                      <div className="text-xs text-gray-500">{r.sub}</div>
                    </div>
                  ))}
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
