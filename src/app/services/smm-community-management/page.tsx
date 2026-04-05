import type { Metadata } from 'next';
import { ServicePageLayout } from '@/components/pages/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Crypto Community Management & SMM | Telegram, Discord, Reddit',
  description:
    'Professional crypto community management for Telegram, Discord, Reddit, and Twitter. 3-5 posts/day, AMA sessions, moderation. 55,000+ members grown.',
  alternates: { canonical: 'https://kolweb3.com/services/smm-community-management' },
  openGraph: {
    title: 'Crypto Community Management | Telegram & Discord | kolweb3.com',
    description: 'Daily SMM and community management for crypto projects. 55,000+ members grown. 3-5 posts/day, AMA sessions, moderation.',
    url: 'https://kolweb3.com/services/smm-community-management',
  },
};

export default function SMMPage() {
  return (
    <ServicePageLayout
      badge="SMM & Community Management"
      title="Community Management &"
      titleHighlight="SMM for Crypto Projects"
      description="Your community is your most valuable asset. We build, grow, and maintain active crypto communities on Telegram, Discord, Reddit, and Twitter — 3-5 posts per day, AMA sessions, moderation, and crisis management. We grew 55,000 new members for LayerAI in 8 weeks."
      tags={['Telegram', 'Discord', 'Reddit', 'Twitter/X', 'AMA Sessions', '3-5 Posts/Day', 'Moderation', 'Community Growth']}
      breadcrumb={[{ label: 'Services', href: '/services/smm-community-management' }, { label: 'SMM & Community Management', href: '/services/smm-community-management' }]}
      results={[
        { value: '55,000+', label: 'Members Grown' },
        { value: '3-5', label: 'Posts Per Day' },
        { value: '24/7', label: 'Moderation' },
        { value: '8wk', label: 'LayerAI Growth' },
      ]}
      features={[
        { icon: '✈️', title: 'Telegram Community Management', description: 'Daily content posting (3-5 posts/day), member engagement, question answering, FUD management, and announcement amplification in your Telegram community.' },
        { icon: '🎮', title: 'Discord Server Management', description: 'Full Discord setup and management — channel structure, role systems, bot configuration, moderation, AMA hosting, and community events.' },
        { icon: '🐦', title: 'Twitter/X Management', description: 'Daily tweets, engagement with community posts, trending hashtag participation, and coordinated post campaigns during key announcements.' },
        { icon: '👾', title: 'Reddit Presence', description: 'Subreddit management, community posts, AMA coordination, and organic visibility in crypto-related subreddits (r/CryptoCurrency, r/DeFi, etc.).' },
        { icon: '🎤', title: 'AMA Sessions', description: 'Planning, promotion, and execution of AMA (Ask Me Anything) sessions on Telegram, Twitter Spaces, and Discord. Written summaries and highlights distributed post-event.' },
        { icon: '🛡️', title: 'FUD Management & Crisis PR', description: 'Real-time monitoring and rapid response to FUD, negative sentiment, and community crises. Protect your project\'s reputation with professional community management.' },
      ]}
      process={[
        { step: '01', title: 'Community Audit & Strategy', description: 'We audit your current community health, content cadence, and engagement rates. We build a tailored content calendar and moderation playbook.' },
        { step: '02', title: 'Community Manager Onboarding', description: 'Dedicated community managers learn your project deeply — tokenomics, roadmap, technical details, FAQs. We become your expert representatives.' },
        { step: '03', title: 'Content Calendar Launch', description: 'Daily content plan with 3-5 posts across platforms: educational content, announcements, community polls, memes, and project updates.' },
        { step: '04', title: 'Engagement & Growth', description: 'Proactive engagement with community members, cross-promotion with partner communities, and growth tactics to attract new quality members.' },
        { step: '05', title: 'Monthly Reporting', description: 'Monthly community health report: member growth, engagement rates, sentiment analysis, and content performance breakdown.' },
      ]}
      faqs={[
        { question: 'How many community managers do you assign per project?', answer: 'Typically 1-2 dedicated community managers per project, depending on community size and activity level. For very active communities (10,000+ daily active members), we scale to 2-3 managers for proper coverage across time zones.' },
        { question: 'What is the average community growth rate you achieve?', answer: 'Results vary by budget and campaign support, but organic community growth of 500-2,000 new members per week is typical with active SMM. During KOL campaigns or IDO launches, growth can spike to 5,000-10,000+ per week. We grew LayerAI\'s community by 55,000 members over 8 weeks.' },
        { question: 'How do you handle negative posts and FUD in the community?', answer: 'We have a clear FUD management playbook: (1) Fast response within 15-30 minutes during active hours, (2) Factual and calm counter-messaging, (3) Escalation protocol for serious issues to project leadership, (4) Proactive positive content to drown out negativity. We never delete legitimate questions without response.' },
        { question: 'Do you provide 24/7 moderation?', answer: 'Yes, for active communities we provide 24/7 moderation coverage using a combination of bot automation and human moderators across multiple time zones. This is especially important during IDO launches and major market events when FUD spreads rapidly.' },
        { question: 'Can you help set up a community from scratch?', answer: 'Absolutely. We handle Telegram group/channel setup, Discord server architecture, Reddit subreddit creation, Twitter account setup, and all associated bots and moderation tools. We then populate with initial content and begin active management from day one.' },
      ]}
    />
  );
}
