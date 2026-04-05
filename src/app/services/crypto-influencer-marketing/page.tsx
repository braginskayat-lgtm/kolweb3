import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/pages/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Crypto Influencer Marketing Agency | YouTube, Twitter, Telegram',
  description:
    'Crypto influencer marketing across YouTube, Twitter/X, Telegram, Instagram & TikTok. Reach 2M+ crypto audiences with verified influencers. Free proposal.',
  alternates: { canonical: 'https://kolweb3.com/services/crypto-influencer-marketing' },
  openGraph: {
    title: 'Crypto Influencer Marketing Agency | kolweb3.com',
    description: 'YouTube reviews, Twitter threads, Telegram blasts. Targeted crypto influencer campaigns that drive real token holders and users.',
    url: 'https://kolweb3.com/services/crypto-influencer-marketing',
  },
};

export default function CryptoInfluencerPage() {
  return (
    <ServicePageLayout
      badge="Crypto Influencer Marketing"
      title="Crypto Influencer Marketing"
      titleHighlight="That Converts"
      description="Targeted crypto influencer campaigns on YouTube, Twitter/X, Telegram, Instagram, and TikTok. We match your project with the right influencers for your niche and geography to drive real sign-ups, deposits, and token purchases."
      tags={['YouTube', 'Twitter/X', 'Telegram', 'Instagram', 'TikTok', 'Crypto-native', 'Performance tracking']}
      breadcrumb={[{ label: 'Services', href: '/services/crypto-influencer-marketing' }, { label: 'Crypto Influencer Marketing', href: '/services/crypto-influencer-marketing' }]}
      results={[
        { value: '2M+', label: 'Audience Reach' },
        { value: '150+', label: 'Posts Per Campaign' },
        { value: '$237', label: 'Best CPT (Brazil)' },
        { value: '6', label: 'GEOs Covered' },
      ]}
      features={[
        { icon: '📺', title: 'YouTube Reviews & Tutorials', description: 'Long-form sponsored content from crypto YouTubers with 10K-1M subscribers. Project spotlights, portfolio reviews, protocol tutorials.' },
        { icon: '🐦', title: 'Twitter/X Campaigns', description: 'Sponsored tweets, threads, and X Spaces appearances. Real-time audience engagement during market events and launches.' },
        { icon: '📱', title: 'Telegram Channel Posts', description: 'Direct placement in crypto Telegram channels with 10K-500K subscribers. High engagement, native audience, instant reach.' },
        { icon: '📸', title: 'Instagram Reels & Stories', description: 'Visual-first content for iGaming and fintech audiences in LATAM and Southeast Asia. Reduced CPT from $740 to $237 via Instagram-first strategy in Brazil.' },
        { icon: '🎵', title: 'TikTok Crypto Content', description: 'Short-form viral content for mass reach in emerging markets. Gen-Z and millennial crypto audiences in Asia and LATAM.' },
        { icon: '🎮', title: 'Discord & Community Posts', description: 'Authentic integration into crypto Discord servers. NFT and gaming community reach with high member engagement.' },
      ]}
      process={[
        { step: '01', title: 'Audience & Platform Analysis', description: 'We analyze your target audience and determine which platforms will deliver the best CPT for your specific product and geography.' },
        { step: '02', title: 'Influencer Selection', description: 'We match 20-50 crypto influencers to your campaign based on niche fit, audience demographics, and historical performance data.' },
        { step: '03', title: 'Creative Production', description: 'Content briefs, talking points, visual guidelines. We ensure every piece of content accurately represents your project and drives action.' },
        { step: '04', title: 'Multi-Platform Launch', description: 'Coordinated campaign wave across 2-5 platforms simultaneously for maximum impact and message reinforcement.' },
        { step: '05', title: 'Analytics & Optimization', description: 'Real-time performance monitoring. We reallocate budget from underperforming placements to high-converting channels mid-campaign.' },
      ]}
      faqs={[
        { question: 'Which crypto influencer platform delivers the best ROI?', answer: 'It varies by geography and product. YouTube delivers the highest trust and conversion for complex products (DeFi, L2 chains). Instagram excels in LATAM (Brazil, Colombia, Mexico). Telegram is most effective in Eastern Europe and Southeast Asia. TikTok is best for mass awareness in emerging markets. We typically recommend combining 2-3 platforms.' },
        { question: 'How do you ensure influencer content is accurate about my project?', answer: 'Every influencer receives a detailed content brief covering tokenomics, key features, regulatory disclaimers, and prohibited claims. All content is reviewed and approved by your team before publishing. We also provide a compliance checklist for each GEO.' },
        { question: 'What is the minimum budget for a crypto influencer campaign?', answer: 'Single-platform, 3-5 KOL campaigns start from $5,000. Multi-platform campaigns with 15-20 KOLs typically require $25,000-$100,000. Large multi-GEO campaigns scale to $3M+. We provide detailed budget breakdowns upfront.' },
        { question: 'Can you track actual conversions, not just views?', answer: 'Yes. We implement UTM tracking links for all placements. For exchange campaigns, we track actual registrations and deposits via partner referral systems. For IDOs, we track wallet connections. For apps, we track downloads and activations.' },
        { question: 'Do crypto influencers actually deliver results or just vanity metrics?', answer: 'The difference is in KOL selection and campaign structure. Low-quality KOLs deliver views but no conversions. Our vetting process focuses on engagement-to-conversion ratios, not just follower counts. We\'ve driven $1.34M+ in exchange deposits and 50,000 IDO participants through properly structured influencer campaigns.' },
      ]}
    />
  );
}
