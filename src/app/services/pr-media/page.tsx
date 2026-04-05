import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/pages/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Crypto PR & Media Agency | CoinTelegraph, Decrypt, BeInCrypto Placements',
  description:
    'Crypto PR and media placement agency. Get featured on CoinTelegraph, Decrypt, BeInCrypto, and 50+ crypto media outlets. Press release distribution, thought leadership.',
  alternates: { canonical: 'https://kolweb3.com/services/pr-media' },
  openGraph: {
    title: 'Crypto PR & Media Placement | CoinTelegraph, Decrypt | kolweb3.com',
    description: 'Press releases and editorial coverage on CoinTelegraph, Decrypt, BeInCrypto, and 50+ crypto media outlets. Reputation management for Web3 projects.',
    url: 'https://kolweb3.com/services/pr-media',
  },
};

export default function PRMediaPage() {
  return (
    <ServicePageLayout
      badge="PR & Media"
      title="Crypto PR & Media"
      titleHighlight="Placement Agency"
      description="Strategic press coverage for crypto and Web3 projects. From press release distribution to editorial placements on CoinTelegraph, Decrypt, and BeInCrypto — we build your project's credibility with tier-1 crypto media. Also covers crisis PR and reputation management."
      tags={['CoinTelegraph', 'Decrypt', 'BeInCrypto', 'Press Releases', 'Thought Leadership', 'Crisis PR', '50+ Outlets']}
      breadcrumb={[{ label: 'Services', href: '/services/pr-media' }, { label: 'PR & Media', href: '/services/pr-media' }]}
      results={[
        { value: '50+', label: 'Media Outlets' },
        { value: 'Tier-1', label: 'Crypto Publications' },
        { value: '24hr', label: 'Crisis Response' },
        { value: 'Global', label: 'Media Coverage' },
      ]}
      features={[
        { icon: '📰', title: 'Press Release Distribution', description: 'Professional press release writing and distribution to 50+ crypto media outlets including CoinTelegraph, Decrypt, BeInCrypto, CoinDesk, and regional publications.' },
        { icon: '✍️', title: 'Editorial & Thought Leadership', description: 'Bylined articles and thought leadership pieces placed on tier-1 crypto publications under your team\'s name. Builds authority and backlink profile.' },
        { icon: '🎙️', title: 'Media Interviews & Podcasts', description: 'Securing podcast interviews, media Q&As, and press interviews for your founders and key team members on crypto-focused media channels.' },
        { icon: '🔍', title: 'Project Listings & Reviews', description: 'Coordinated project listings on CoinGecko, CoinMarketCap, DeFiLlama, and editorial reviews on major crypto media at launch.' },
        { icon: '🛡️', title: 'Crisis PR & Reputation Management', description: 'Rapid response crisis PR for negative press, hack disclosures, team changes, or community controversies. Protect and rebuild your project\'s reputation.' },
        { icon: '📊', title: 'Ongoing Media Relations', description: 'Monthly media relations retainer — keeping your project visible in crypto press with regular updates, milestone announcements, and feature pitching.' },
      ]}
      process={[
        { step: '01', title: 'Media Strategy & Target List', description: 'We build a prioritized list of target publications based on your audience, geography, and project type. Tier-1 focus with tier-2 fill coverage.' },
        { step: '02', title: 'Press Materials Production', description: 'Press release drafting, project one-pager, media kit, and spokesperson briefing. All materials reviewed for accuracy and compliance.' },
        { step: '03', title: 'Outreach & Pitching', description: 'Direct outreach to editors and journalists at target publications. We leverage established relationships for faster placement times.' },
        { step: '04', title: 'Publication & Amplification', description: 'Once live, we amplify placements through KOL sharing, community announcements, and social media to maximize the PR impact.' },
        { step: '05', title: 'Coverage Tracking & Reporting', description: 'Monthly PR coverage report with all placements, domain authority, estimated reach, and backlink tracking.' },
      ]}
      faqs={[
        { question: 'Which crypto media outlets do you work with?', answer: 'We work with 50+ crypto media outlets including: Tier 1 (CoinTelegraph, CoinDesk, Decrypt, BeInCrypto), Tier 2 (The Block, CryptoSlate, NewsBTC, Bitcoinist), Regional (AMBCrypto for India, Livecoins for Brazil, and others). We also cover mainstream business press for crypto stories (Forbes, Business Insider crypto sections).' },
        { question: 'How long does it take to get coverage on CoinTelegraph or Decrypt?', answer: 'Editorial placement timelines vary: Press release distribution: 24-48 hours. Sponsored content: 3-7 business days. Organic editorial pitching: 1-4 weeks depending on newsworthiness. We recommend starting media outreach 2-3 weeks before any major announcement.' },
        { question: 'What\'s the difference between press release distribution and editorial coverage?', answer: 'Press releases are paid placements that appear in the "press release" section of media sites — fast, reliable, but lower editorial authority. Editorial coverage is earned media — reporters and editors cover your project as a news story. Editorial coverage has far higher credibility but requires genuine newsworthiness. We pursue both strategically.' },
        { question: 'Do you offer crisis PR for crypto projects?', answer: 'Yes. Crisis PR is one of our specialized services. Whether it\'s a hack disclosure, team controversy, regulatory news, or coordinated FUD campaign — we provide rapid response media management, holding statements, and reputation recovery campaigns. Speed is critical; we aim to have a crisis response plan live within 24 hours.' },
        { question: 'How do PR placements affect SEO for crypto projects?', answer: 'Significantly. Backlinks from tier-1 crypto publications (CoinTelegraph DA 90+, Decrypt DA 85+, BeInCrypto DA 75+) dramatically improve your domain authority and search rankings. A single editorial placement on CoinTelegraph can generate 50-200 organic ranking improvements over 6-12 months. We track all backlinks and domain authority changes.' },
      ]}
    />
  );
}
