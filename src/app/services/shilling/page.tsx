import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Crypto Shilling Agency - Compliant Community Promotion for Web3 | KolWeb3',
  description:
    'Run compliant crypto shilling campaigns across Telegram, Discord and X. KolWeb3 builds disclosed, authentic promotion for Web3, DeFi and RWA projects - without the bans, fines or burned reputation.',
  alternates: { canonical: 'https://www.kolweb3.com/services/shilling' },
  openGraph: {
    title: 'Crypto Shilling Agency - Compliant Community Promotion for Web3 | KolWeb3',
    description:
      'Run compliant crypto shilling campaigns across Telegram, Discord and X. KolWeb3 builds disclosed, authentic promotion for Web3, DeFi and RWA projects - without the bans, fines or burned reputation.',
    url: 'https://www.kolweb3.com/services/shilling',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is crypto shilling and is it legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shilling means promoting a token or project, often for compensation. It is legal when compensation and affiliation are disclosed. It becomes illegal undisclosed promotion when a paid relationship is hidden from the audience - this is what regulators like the SEC and FTC actively penalize.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do paid promotions on X (Twitter) need to be disclosed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Since late February 2026, X requires all paid partnership content to carry explicit Paid Partnership or Ad labels. Accounts that fail to disclose face automated warnings, and repeated violations lead to suspension.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a shilling campaign is not disclosed properly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regulatory exposure is real and growing. The SEC can fine individuals up to $250,000 and companies up to $1,000,000 per violation for undisclosed token promotions. High-profile cases include Kim Kardashian ($1.26M) and Paul Pierce ($1.4M) for undisclosed crypto promotions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is your shilling different from spam Telegram campaigns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We do not run copy-paste messages across channels or use bot accounts to simulate organic interest - this is the exact pattern regulators and audiences now flag instantly. We use vetted community members who genuinely hold or understand your project, with disclosed compensation on every post.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can shilling actually build a sustainable community?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Disclosed, authentic promotion can. Undisclosed hype-driven shilling cannot - it produces a pump-and-dump pattern that destroys trust the moment price drops. We design campaigns around retention and genuine engagement, not a single spike in chat activity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which platforms do you run shilling campaigns on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Telegram, Discord and X are our primary channels, each with platform-specific disclosure requirements. We also coordinate Reddit community engagement where organic discussion is more appropriate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you vet the people running the campaign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every participant is checked for real account activity and history - not bought followers or bot-network membership. We avoid the AI-generated fake conversation patterns that are increasingly common and increasingly easy for platforms to detect in 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum budget for a shilling campaign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Effective, compliant campaigns typically start at $3,000 to $5,000 per month, scaling with the number of channels and community members involved. We will not run a campaign too small to do properly - it wastes your budget and risks your reputation.',
      },
    },
  ],
};

const faqs = [
  {
    question: 'What is crypto shilling and is it legal?',
    answer:
      'Shilling means promoting a token or project, often for compensation. It is legal when compensation and affiliation are disclosed. It becomes illegal undisclosed promotion when a paid relationship is hidden from the audience - this is what regulators like the SEC and FTC actively penalize.',
  },
  {
    question: 'Do paid promotions on X (Twitter) need to be disclosed?',
    answer:
      'Yes. Since late February 2026, X requires all paid partnership content to carry explicit Paid Partnership or Ad labels. Accounts that fail to disclose face automated warnings, and repeated violations lead to suspension.',
  },
  {
    question: 'What happens if a shilling campaign is not disclosed properly?',
    answer:
      'Regulatory exposure is real and growing. The SEC can fine individuals up to $250,000 and companies up to $1,000,000 per violation for undisclosed token promotions. High-profile cases include Kim Kardashian ($1.26M) and Paul Pierce ($1.4M) for undisclosed crypto promotions.',
  },
  {
    question: 'How is your shilling different from spam Telegram campaigns?',
    answer:
      'We do not run copy-paste messages across channels or use bot accounts to simulate organic interest - this is the exact pattern regulators and audiences now flag instantly. We use vetted community members who genuinely hold or understand your project, with disclosed compensation on every post.',
  },
  {
    question: 'Can shilling actually build a sustainable community?',
    answer:
      'Disclosed, authentic promotion can. Undisclosed hype-driven shilling cannot - it produces a pump-and-dump pattern that destroys trust the moment price drops. We design campaigns around retention and genuine engagement, not a single spike in chat activity.',
  },
  {
    question: 'Which platforms do you run shilling campaigns on?',
    answer:
      'Telegram, Discord and X are our primary channels, each with platform-specific disclosure requirements. We also coordinate Reddit community engagement where organic discussion is more appropriate.',
  },
  {
    question: 'How do you vet the people running the campaign?',
    answer:
      'Every participant is checked for real account activity and history - not bought followers or bot-network membership. We avoid the AI-generated fake conversation patterns that are increasingly common and increasingly easy for platforms to detect in 2026.',
  },
  {
    question: 'What is the minimum budget for a shilling campaign?',
    answer:
      'Effective, compliant campaigns typically start at $3,000 to $5,000 per month, scaling with the number of channels and community members involved. We will not run a campaign too small to do properly - it wastes your budget and risks your reputation.',
  },
];

export default function ShillingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10 mb-6">
              Telegram - Discord - X
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Crypto Shilling, Done{' '}
              <span className="gradient-text">Compliantly</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              We run disclosed, authentic community promotion across Telegram, Discord and X for Web3,
              DeFi and RWA projects - built to convert without the platform bans or regulatory exposure
              that undisclosed shilling now carries in 2026.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Get a Free Proposal
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Most Shilling Campaigns <span className="gradient-text">Backfire</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Disclosure Is Now Mandatory',
                body: 'Since late February 2026, X requires explicit Paid Partnership labels on all compensated promotion. Undisclosed posts trigger automated warnings, then account suspension.',
              },
              {
                title: 'Regulators Are Actively Fining',
                body: 'The SEC can fine up to $1,000,000 per violation for undisclosed token promotion. Kim Kardashian paid $1.26M, Paul Pierce paid $1.4M for exactly this mistake.',
              },
              {
                title: 'Audiences Spot Spam Instantly',
                body: 'Copy-paste messages across Telegram and Discord, or AI bots simulating fake conversations, are now recognized immediately - and destroy trust faster than they build hype.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <GlassCard hover glow="blue" className="p-6 h-full">
                  <h3 className="text-base font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-6">
              How We <span className="gradient-text">Solve It</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              We treat disclosure as a feature of trust, not a legal afterthought. Every post we coordinate
              carries clear paid partnership labeling, uses vetted accounts with real history, and is built
              around genuine community engagement - the exact opposite of the copy-paste, bot-driven shilling
              that platforms and regulators are now built to detect.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">
              Channels We <span className="gradient-text">Run</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: 'Telegram and Discord',
                body: 'Coordinated community promotion using real, active members - not bot networks. Every paid message clearly identifies sponsorship where compensation is involved.',
              },
              {
                label: 'X (Twitter)',
                body: 'Disclosed paid partnership posts that meet platform labeling requirements. We build campaigns to survive platform policy, not skirt it.',
              },
              {
                label: 'Reddit Community Engagement',
                body: 'Organic discussion and visibility in relevant subreddits, handled with the discretion that community guidelines and culture require.',
              },
            ].map((platform, i) => (
              <AnimatedSection key={platform.label} delay={i * 0.1}>
                <GlassCard hover glow="purple" className="p-6 h-full">
                  <h3 className="text-base font-bold text-white mb-3">{platform.label}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{platform.body}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">
              What is <span className="gradient-text">Included</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Vetted Participant Network',
                body: 'Real accounts with genuine activity history - checked for authenticity, not pulled from a bot farm or bought-follower network.',
              },
              {
                title: 'Disclosure and Compliance Packaging',
                body: 'Every participant receives clear disclosure language and platform-specific labeling requirements before a single post goes live.',
              },
              {
                title: 'Coordinated, Non-Spam Messaging',
                body: 'Varied, natural messaging across channels - never identical copy-paste text that triggers spam detection or audience suspicion.',
              },
              {
                title: 'Jurisdictional Awareness',
                body: 'Campaign structure adapted to where your audience is located, accounting for SEC, FCA and MiCA disclosure requirements as they apply.',
              },
              {
                title: 'Performance Tracking',
                body: 'Engagement, sentiment and conversion tracking per channel - so spend goes toward what is actually building community, not just noise.',
              },
              {
                title: 'Reputation Risk Management',
                body: 'Campaign design built to protect your project long-term - we will not run tactics that risk a platform ban or regulatory action on your behalf.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <GlassCard hover glow="blue" className="p-6 h-full">
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="glass-card overflow-hidden">
                  <details open={i === 0} className="group">
                    <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer hover:bg-white/[0.02] transition-colors list-none">
                      <span className="text-sm font-semibold text-white leading-relaxed">
                        {faq.question}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 border-t border-white/5 pt-4">
                      <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Ready for Promotion That <span className="gradient-text">Does Not Get Banned?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Tell us about your project and we will put together a compliant shilling strategy.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-base"
            >
              Get a Free Proposal
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
