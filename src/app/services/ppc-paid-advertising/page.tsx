import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/pages/ServicePageLayout';

export const metadata: Metadata = {
  title: 'PPC & Paid Advertising for Crypto & Web3 | Google Ads, Meta, TikTok',
  description:
    'Crypto-compliant PPC advertising: Google Ads, Meta Ads, TikTok Ads for blockchain, DeFi, and iGaming projects. Navigate ad policies. Maximize ROI.',
  alternates: { canonical: 'https://kolweb3.com/services/ppc-paid-advertising' },
  openGraph: {
    title: 'PPC Paid Advertising for Crypto | kolweb3.com',
    description: 'Google Ads, Meta Ads, TikTok Ads for crypto and Web3 projects. Navigate advertising restrictions and maximize campaign ROI.',
    url: 'https://kolweb3.com/services/ppc-paid-advertising',
  },
};

export default function PPCPage() {
  return (
    <ServicePageLayout
      badge="PPC & Paid Advertising"
      title="PPC Advertising for"
      titleHighlight="Crypto & Web3 Projects"
      description="Paid advertising for blockchain projects requires specialized knowledge of platform policies, crypto-specific targeting, and compliant creative strategies. We navigate Google Ads, Meta, and TikTok Ads policies to run effective campaigns that don't get banned."
      tags={['Google Ads', 'Meta Ads', 'TikTok Ads', 'Native Ads', 'Display Network', 'Retargeting', 'Crypto-compliant']}
      breadcrumb={[{ label: 'Services', href: '/services/ppc-paid-advertising' }, { label: 'PPC Paid Advertising', href: '/services/ppc-paid-advertising' }]}
      results={[
        { value: 'Google', label: 'Ads Certified' },
        { value: 'Meta', label: 'Ads Partner' },
        { value: 'TikTok', label: 'Ads Managed' },
        { value: '6+', label: 'GEOs Active' },
      ]}
      features={[
        { icon: '🔍', title: 'Google Ads (Search & Display)', description: 'Search campaigns for high-intent crypto queries. Display and YouTube ads for brand awareness. We have proven compliant account structures for crypto advertisers.' },
        { icon: '📘', title: 'Meta Ads (Facebook & Instagram)', description: 'Highly targeted Facebook and Instagram campaigns for crypto, iGaming, and fintech. Custom audiences, lookalikes, and retargeting funnels.' },
        { icon: '🎵', title: 'TikTok Ads', description: 'TikTok for Business campaigns for crypto and fintech. Short-form video ads targeting crypto-curious Gen-Z and millennial audiences globally.' },
        { icon: '📰', title: 'Native & Programmatic Advertising', description: 'Outbrain, Taboola, and programmatic display placements on crypto media sites. High-relevance audiences with intent signals.' },
        { icon: '🔄', title: 'Retargeting Campaigns', description: 'Retargeting visitors who didn\'t convert. Multi-touch attribution across Google, Meta, and crypto-specific ad networks.' },
        { icon: '📊', title: 'Landing Page & Funnel Optimization', description: 'CRO for your campaign landing pages. A/B testing, conversion tracking setup, and funnel analysis to maximize ad spend efficiency.' },
      ]}
      process={[
        { step: '01', title: 'Account Audit & Compliance Review', description: 'We audit existing ad accounts for policy compliance and structure issues. For new accounts, we set up correctly from day one to avoid bans.' },
        { step: '02', title: 'Campaign Architecture', description: 'Keyword research, audience segmentation, creative strategy, and campaign structure design. We build for scale from the start.' },
        { step: '03', title: 'Creative Production', description: 'Ad copy, headlines, and visual creatives designed for crypto audiences. All creatives reviewed for platform policy compliance.' },
        { step: '04', title: 'Launch & Monitoring', description: 'Campaign launch with daily monitoring. Bid management, budget pacing, and quality score optimization from day one.' },
        { step: '05', title: 'Optimization & Scaling', description: 'Weekly optimization cycles. Pause underperformers, scale winners, expand to new audiences. Monthly reporting with full attribution.' },
      ]}
      faqs={[
        { question: 'Can crypto projects advertise on Google and Facebook?', answer: 'Yes, but with restrictions. Google requires certification for certain crypto-related ads. Facebook has specific policies around financial products and cryptocurrencies. We\'ve navigated these policies successfully for dozens of clients using compliant account structures, proper certifications, and approved creative approaches.' },
        { question: 'What types of crypto projects can run PPC ads?', answer: 'Exchange platforms (CEX/DEX), wallets, blockchain analytics tools, educational content, and infrastructure projects generally have fewer restrictions. DeFi, ICO/IDO promotions, and certain token promotions require more careful handling. iGaming requires geo-targeting to allowed jurisdictions. We assess each project individually.' },
        { question: 'How much budget is needed for effective crypto PPC?', answer: 'Google Search: $5,000/month minimum for meaningful data. Meta Ads: $3,000/month minimum. TikTok: $5,000/month for testing. Realistic campaigns with learning budget start at $10,000/month total. Performance stabilizes at $25,000+/month where optimization has meaningful data to work with.' },
        { question: 'How do you track conversions for crypto ad campaigns?', answer: 'We implement Google Analytics 4, Meta Pixel, TikTok Pixel, and custom event tracking. For exchange campaigns, we use referral tracking. For wallet apps, we use app event tracking. For token purchases, we can track on-chain events. Full attribution setup is included in campaign management.' },
        { question: 'Can you run paid ads for iGaming projects?', answer: 'Yes, in jurisdictions where online gaming is legal and properly licensed. We target allowed GEOs, implement proper age verification disclaimers, and use compliant creative strategies. Our multi-GEO fintech/iGaming experience covers Brazil, Philippines, Colombia, and other key markets.' },
      ]}
    />
  );
}
