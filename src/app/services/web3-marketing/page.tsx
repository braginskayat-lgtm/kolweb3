import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/pages/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Web3 Marketing Agency | IDO, DeFi, NFT, Token Launch Marketing',
  description:
    'Full-stack Web3 marketing for IDO launches, DeFi protocols, NFT collections, and token projects. $1B+ TVL generated. Airdrop, community, KOL campaigns.',
  alternates: { canonical: 'https://kolweb3.com/services/web3-marketing' },
  openGraph: {
    title: 'Web3 Marketing Agency | IDO, DeFi & Token Launch | kolweb3.com',
    description: 'Comprehensive Web3 marketing services — IDO launch campaigns, DeFi protocol marketing, NFT drops, airdrop campaigns. $1B+ TVL generated.',
    url: 'https://kolweb3.com/services/web3-marketing',
  },
};

export default function Web3MarketingPage() {
  return (
    <ServicePageLayout
      badge="Web3 Marketing"
      title="Web3 Marketing for"
      titleHighlight="IDOs, DeFi & Token Launches"
      description="Comprehensive marketing for the Web3 ecosystem. From IDO/IEO launches and DeFi protocol awareness to NFT drops, airdrop campaigns, and token listings. We've generated $1B+ in TVL for a single IDO launch."
      tags={['IDO Marketing', 'DeFi Marketing', 'NFT Marketing', 'Airdrop Campaigns', 'Token Launch', 'Launchpad', 'Community Growth']}
      breadcrumb={[{ label: 'Services', href: '/services/web3-marketing' }, { label: 'Web3 Marketing', href: '/services/web3-marketing' }]}
      results={[
        { value: '$1B+', label: 'TVL at IDO' },
        { value: '55,000+', label: 'New Community Members' },
        { value: '$40M', label: 'Daily Trading Volume' },
        { value: '50,000', label: 'IDO Participants' },
      ]}
      features={[
        { icon: '🚀', title: 'IDO / IEO Launch Marketing', description: 'End-to-end IDO launch campaigns: launchpad coordination (DAO Maker, WePad, etc.), KOL blast, community buildout, and airdrop mechanics design.' },
        { icon: '🔗', title: 'DeFi Protocol Marketing', description: 'TVL growth campaigns for DeFi protocols. Liquidity mining awareness, yield aggregator coverage, and ecosystem partner integrations.' },
        { icon: '🖼️', title: 'NFT Collection Launches', description: 'NFT drop marketing across Twitter/X, Discord, and OpenSea. Allowlist building, whitelist campaigns, and mint event coverage by KOLs.' },
        { icon: '🪂', title: 'Airdrop Campaigns', description: 'Design and execution of airdrop mechanics tied to IDO registration, social tasks, and community participation — driving organic growth.' },
        { icon: '📣', title: 'Token Listing Support', description: 'Pre-listing hype building, CEX listing announcement campaigns, and post-listing volume support through coordinated influencer activity.' },
        { icon: '🏗️', title: 'Ecosystem Building', description: 'Builder community growth, developer relations amplification, and ecosystem partner announcements for Layer-1 and Layer-2 chains.' },
      ]}
      process={[
        { step: '01', title: 'Launch Strategy & Timeline', description: 'We map your launch phases (private → public → listing) and build a marketing calendar that amplifies each milestone.' },
        { step: '02', title: 'Community Foundation', description: 'Telegram and Discord setup and moderation. Pre-launch community building creates FOMO and organic anticipation.' },
        { step: '03', title: 'KOL & Media Campaign', description: 'Coordinated KOL campaign timed with launchpad opening. 50+ KOLs, airdrop integration, and PR placements firing simultaneously.' },
        { step: '04', title: 'IDO Execution', description: 'Real-time community management during IDO. Responding to questions, managing FUD, and keeping momentum through the allocation period.' },
        { step: '05', title: 'Post-IDO Retention', description: 'Post-listing content wave. Holder engagement, staking announcements, and partner integrations to maintain token price momentum.' },
      ]}
      faqs={[
        { question: 'What marketing is needed for a successful IDO?', answer: 'A successful IDO requires: (1) Strong community built 4-8 weeks before launch (Telegram, Discord), (2) KOL campaign timed 2 weeks before IDO opening, (3) Airdrop or task-based campaign tied to IDO registration, (4) Launchpad selection and coordination (DAO Maker, WePad, Polkastarter, etc.), (5) PR coverage on crypto media, (6) Real-time community management during IDO.' },
        { question: 'How did you generate $1B TVL for LayerAI\'s IDO?', answer: 'LayerAI\'s IDO success came from a multi-layered approach: 50+ KOLs with 2M+ combined reach, an airdrop campaign tied to IDO registration mechanics, community growth from 0 to 55,000 members before launch, dual launchpad listing on DAO Maker and WePad, and 3-5 daily community posts maintaining engagement momentum over 8 weeks.' },
        { question: 'Can you help with an NFT collection launch?', answer: 'Yes. NFT marketing combines Twitter/X narrative building, Discord community management, allowlist campaigns, and KOL coverage timed with mint. We coordinate the full cycle from mint announcement to post-secondary market support.' },
        { question: 'How far in advance should marketing start for an IDO?', answer: 'Ideally 8-12 weeks before the IDO date. Community building takes 6-8 weeks to get meaningful traction. KOL campaigns should start 2-3 weeks before opening. Starting marketing too late is the most common IDO failure mode.' },
        { question: 'Do you handle airdrop campaign design?', answer: 'Yes. We design airdrop mechanics (social tasks, referral systems, IDO registration gates), manage distribution logistics, and integrate the airdrop with your IDO registration funnel to maximize qualified participant counts.' },
      ]}
    />
  );
}
