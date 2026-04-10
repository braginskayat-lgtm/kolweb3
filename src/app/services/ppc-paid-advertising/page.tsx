import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Crypto PPC & Paid Ads Agency — Google, Meta, TikTok for Web3 & Fintech | KolWeb3',
  description:
    'Run crypto-compliant paid ad campaigns on Google, Meta and TikTok. KolWeb3 manages PPC for Web3, DeFi, RWA and Fintech projects — with real ad accounts, proxies and proven results.',
  alternates: { canonical: 'https://kolweb3.com/services/ppc-paid-advertising' },
  openGraph: {
    title: 'Crypto PPC & Paid Ads Agency — Google, Meta, TikTok for Web3 & Fintech | KolWeb3',
    description:
      'Run crypto-compliant paid ad campaigns on Google, Meta and TikTok. KolWeb3 manages PPC for Web3, DeFi, RWA and Fintech projects — with real ad accounts, proxies and proven results.',
    url: 'https://kolweb3.com/services/ppc-paid-advertising',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you run Google Ads for a crypto project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — but it requires proper account setup, financial product certification in relevant markets, and landing page compliance. We handle the full process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you run Meta ads for crypto or fintech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We use verified business accounts with the appropriate documentation and proxy infrastructure. We have run Meta campaigns for fintech and crypto products across multiple GEOs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your minimum budget for PPC campaigns?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend a minimum monthly ad spend of $5,000 to run meaningful campaigns with proper testing. Our management fee is separate from ad spend.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle creative production?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide creative strategy, copywriting and direction. For video and static visual production we work with your team or connect you with our network of crypto-native creators.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which GEOs do you work in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have experience running campaigns across LATAM (Brazil, Mexico, Colombia), Southeast Asia (Philippines, India), Africa (Nigeria) and Europe. Each GEO has specific platform and compliance requirements which we manage.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before we see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first 2–4 weeks are the testing phase. Optimised results typically appear from week 4–6 onward depending on budget and vertical.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you run TikTok ads for Web3 projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — TikTok has specific approval flows for fintech and crypto content. We navigate the compliance process and have launched compliant campaigns for crypto-native audiences.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes you different from a regular PPC agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialise in restricted verticals — crypto, Web3, DeFi, fintech and iGaming-adjacent products. We have the ad account infrastructure, compliance knowledge and vertical expertise that generic agencies don\'t.',
      },
    },
  ],
};

const faqs = [
  {
    question: 'Can you run Google Ads for a crypto project?',
    answer:
      'Yes — but it requires proper account setup, financial product certification in relevant markets, and landing page compliance. We handle the full process.',
  },
  {
    question: 'Can you run Meta ads for crypto or fintech?',
    answer:
      'Yes. We use verified business accounts with the appropriate documentation and proxy infrastructure. We have run Meta campaigns for fintech and crypto products across multiple GEOs.',
  },
  {
    question: 'What is your minimum budget for PPC campaigns?',
    answer:
      'We recommend a minimum monthly ad spend of $5,000 to run meaningful campaigns with proper testing. Our management fee is separate from ad spend.',
  },
  {
    question: 'Do you handle creative production?',
    answer:
      'We provide creative strategy, copywriting and direction. For video and static visual production we work with your team or connect you with our network of crypto-native creators.',
  },
  {
    question: 'Which GEOs do you work in?',
    answer:
      'We have experience running campaigns across LATAM (Brazil, Mexico, Colombia), Southeast Asia (Philippines, India), Africa (Nigeria) and Europe. Each GEO has specific platform and compliance requirements which we manage.',
  },
  {
    question: 'How long before we see results?',
    answer:
      'The first 2–4 weeks are the testing phase. Optimised results typically appear from week 4–6 onward depending on budget and vertical.',
  },
  {
    question: 'Can you run TikTok ads for Web3 projects?',
    answer:
      'Yes — TikTok has specific approval flows for fintech and crypto content. We navigate the compliance process and have launched compliant campaigns for crypto-native audiences.',
  },
  {
    question: 'What makes you different from a regular PPC agency?',
    answer:
      "We specialise in restricted verticals — crypto, Web3, DeFi, fintech and iGaming-adjacent products. We have the ad account infrastructure, compliance knowledge and vertical expertise that generic agencies don't.",
  },
];

export default function PPCPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10 mb-6">
              Google · Meta · TikTok
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Crypto PPC &amp;{' '}
              <span className="gradient-text">Paid Advertising Agency</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              We run Google, Meta and TikTok ad campaigns for Web3, DeFi, RWA and Fintech projects.
              Real ad accounts, proxy infrastructure, full compliance management. No bans. No wasted budget.
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

      {/* 2. PROBLEM BLOCK */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Crypto Paid Ads Are <span className="gradient-text">Hard</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Platform Bans',
                body: 'One wrong word on your landing page or creative can get your ad account suspended instantly. Most crypto projects lose weeks recovering.',
              },
              {
                title: 'Compliance Maze',
                body: 'Google requires financial product certification. Meta has category restrictions. TikTok has geo-specific approval flows. Each platform has different rules.',
              },
              {
                title: 'No Crypto Expertise',
                body: "Generic PPC agencies don't understand Web3, DeFi or fintech compliance requirements. They burn your budget learning on the job.",
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

      {/* 3. SOLUTION BLOCK */}
      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-white mb-6">
              How We <span className="gradient-text">Solve It</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              We&apos;ve built the infrastructure most agencies don&apos;t have — verified ad accounts, proxy setups,
              compliant creative frameworks and backup systems. Your campaigns run without interruption across
              Google, Meta and TikTok.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. PLATFORMS */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">
              Platforms We <span className="gradient-text">Run</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: 'Google Ads',
                body: 'Search, Display and YouTube campaigns. Keyword strategy, landing page compliance, conversion tracking, bid optimisation. Best for high-intent users searching for your product.',
              },
              {
                label: 'Meta (Facebook & Instagram)',
                body: 'Full-funnel campaigns from awareness to registration and FTD. Verified accounts, proxy infrastructure, creative compliance for crypto and fintech verticals.',
              },
              {
                label: 'TikTok Ads',
                body: 'Short-form video campaigns for crypto-native and fintech audiences. Account compliance, geo-targeting, optimisation for CPM, CPR and FTD KPIs.',
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

      {/* 5. WHAT'S INCLUDED */}
      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">
              What&apos;s <span className="gradient-text">Included</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Compliant Account Setup',
                body: 'Verified ad accounts with proper business documentation, proxy infrastructure and backup accounts so campaigns never go dark.',
              },
              {
                title: 'Creative Strategy & Copy',
                body: 'Compliant ad copy and creative direction for visuals and video. Every asset reviewed for platform policy before launch.',
              },
              {
                title: 'Audience Targeting',
                body: 'Lookalike audiences, interest targeting, geo-specific campaigns and retargeting — built around your conversion goal.',
              },
              {
                title: 'A/B Testing',
                body: 'Every campaign runs split tests across creatives, audiences and landing pages. We iterate fast to find what converts.',
              },
              {
                title: 'Tracking & Attribution',
                body: 'Full conversion tracking setup — pixel, event configuration, FTD tracking and custom dashboard reporting.',
              },
              {
                title: 'Weekly Reporting',
                body: 'Clear weekly reports: spend, CPM, CPC, CPR, ROAS and recommendations. No vanity metrics.',
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

      {/* 6. FAQ */}
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

      {/* 7. CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Ready to Scale With <span className="gradient-text">Paid Ads?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Tell us about your project and we&apos;ll put together a media plan.
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
