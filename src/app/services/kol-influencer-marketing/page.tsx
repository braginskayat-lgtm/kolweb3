import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/pages/ServicePageLayout';

export const metadata: Metadata = {
  title: 'KOL & Influencer Marketing for Crypto | Web3 KOL Agency',
  description:
    'Full-cycle KOL & influencer marketing for crypto and Web3 projects. 50+ verified KOLs, multi-platform campaigns, $3.1M+ managed. Get a custom strategy.',
  alternates: { canonical: 'https://kolweb3.com/services/kol-influencer-marketing' },
  openGraph: {
    title: 'KOL & Influencer Marketing for Crypto | kolweb3.com',
    description: 'Full-cycle KOL campaign management for Web3 projects. 50+ KOLs, verified audiences, performance reporting.',
    url: 'https://kolweb3.com/services/kol-influencer-marketing',
  },
};

export default function KOLMarketingPage() {
  return (
    <ServicePageLayout
      badge="KOL Marketing"
      title="KOL & Influencer Marketing"
      titleHighlight="for Crypto & Web3"
      description="We manage end-to-end KOL campaigns for blockchain projects — from identifying the right influencers and negotiating placements to creating content briefs, monitoring performance, and delivering post-campaign ROI reports. 50+ vetted crypto KOLs per campaign."
      tags={['50+ KOLs', 'YouTube', 'Twitter/X', 'Telegram', 'TikTok', 'Multi-GEO', 'Performance-based']}
      breadcrumb={[{ label: 'Services', href: '/services/kol-influencer-marketing' }, { label: 'KOL Influencer Marketing', href: '/services/kol-influencer-marketing' }]}
      results={[
        { value: '$3.1M+', label: 'Budgets Managed' },
        { value: '50+', label: 'KOLs Per Campaign' },
        { value: '2M+', label: 'Audience Reach' },
        { value: '150+', label: 'Posts Per Campaign' },
      ]}
      features={[
        { icon: '🎯', title: 'KOL Selection & Vetting', description: 'We pitch 50+ KOLs per campaign and select only those with verified audiences, strong engagement rates, and proven conversion history in the crypto niche.' },
        { icon: '📝', title: 'Content Brief & Creative Direction', description: 'Custom content briefs tailored to your project\'s narrative, tokenomics, and target audience. We ensure every post accurately represents your product.' },
        { icon: '🤝', title: 'Negotiations & Contract Management', description: 'We handle all pricing negotiations, contract terms, exclusivity agreements, and usage rights — maximizing your budget efficiency.' },
        { icon: '📊', title: 'Performance Tracking', description: 'Real-time monitoring of views, clicks, sign-ups, and deposits. We track CPT (cost per transaction) and optimize mid-campaign based on data.' },
        { icon: '🔄', title: 'Multi-Platform Coordination', description: 'Coordinated campaign waves across YouTube, Twitter/X, Telegram, Instagram, and TikTok for maximum reach and message consistency.' },
        { icon: '📈', title: 'Post-Campaign Reporting', description: 'Detailed ROI report with all metrics, attribution data, KOL performance breakdown, and strategic recommendations for future campaigns.' },
      ]}
      process={[
        { step: '01', title: 'Project Brief & KPI Setting', description: 'We align on your goals — registrations, deposits, TVL, community growth — and set realistic KPIs based on your budget and vertical.' },
        { step: '02', title: 'KOL Research & Pitching', description: 'We identify 50+ relevant KOLs, pitch your project, collect responses, and present you with the best selection for approval.' },
        { step: '03', title: 'Content Briefing & Approval', description: 'Each KOL receives a custom content brief. All content is reviewed and approved before publishing.' },
        { step: '04', title: 'Campaign Launch & Monitoring', description: 'Coordinated launch across all selected KOLs. We monitor performance in real-time and adjust strategy as needed.' },
        { step: '05', title: 'Reporting & Optimization', description: 'Weekly performance reports during the campaign. Full post-campaign analysis with attribution and ROI breakdown.' },
      ]}
      faqs={[
        { question: 'How do you vet crypto KOLs for campaigns?', answer: 'Every KOL in our network is verified for audience authenticity using third-party tools, engagement rate analysis, demographic breakdown, and past campaign performance. We also check reputation within the crypto community.' },
        { question: 'What is a typical KOL campaign timeline?', answer: 'From brief to first live content: 7-14 business days. For urgent IDO or listing campaigns, we can compress this to 5-7 days with an expedited process.' },
        { question: 'Do you work with micro-KOLs or only large influencers?', answer: 'Both. Depending on your budget and goals, we can build campaigns with 5-10 large KOLs for mass reach, or 30-50 micro/mid-tier KOLs for higher engagement rates and better conversion. Often a combination works best.' },
        { question: 'How is campaign performance measured?', answer: 'We track CPT (cost per transaction or registration), CPC, reach, impressions, and click-through rates. For exchange campaigns, we track actual deposits. For IDOs, we track wallet connections and allocations.' },
        { question: 'Can you run KOL campaigns in specific countries?', answer: 'Yes. We have localized KOL networks in Brazil, Mexico, Colombia, Philippines, Nigeria, India, Turkey, Southeast Asia, and more. We match local KOLs speaking the native language for each GEO.' },
      ]}
    />
  );
}
