'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';

const faqs = [
  {
    question: 'What is a crypto KOL and why does it matter for my project?',
    answer: 'A crypto KOL (Key Opinion Leader) is an influencer with a dedicated, trust-based following in the cryptocurrency space. Unlike generic influencers, crypto KOLs have audiences that actively invest, trade, and participate in blockchain projects. Their recommendations carry significant weight — a single YouTube review from a respected KOL can drive thousands of wallet connections, IDO registrations, or exchange deposits. For your project, KOL marketing is often the fastest way to reach pre-qualified crypto-native audiences who are ready to act.',
  },
  {
    question: 'How much does a crypto KOL influencer marketing campaign cost?',
    answer: 'Campaign budgets vary by scope, platform, and target geography. Small campaigns (1-5 KOLs, single platform) start from $5,000. Mid-size campaigns with 10-20 KOLs across YouTube and Telegram range from $20,000-$100,000. Large multi-GEO campaigns like the ones we\'ve run can reach $500K-$3M+. We optimize for CPT (cost per transaction or registration) — our record was $100 CPT in the Philippines and $125 in Colombia. We\'ll provide a custom quote based on your specific goals and KPIs.',
  },
  {
    question: 'Which platforms are most effective for crypto KOL marketing?',
    answer: 'It depends heavily on your target geography and project type. YouTube is best for trust-building and long-form explanations — ideal for DeFi, IDOs, and complex products. Twitter/X drives narrative and community buzz. Telegram is essential for direct crypto-native reach, especially in Eastern Europe, Russia, and Southeast Asia. Instagram is highly effective in LATAM (Brazil, Colombia, Mexico) — our platform pivot from YouTube to Instagram reduced CPT from $740 to $237 in Brazil. TikTok reaches younger audiences in emerging markets. We typically recommend a coordinated multi-platform approach.',
  },
  {
    question: 'How do you select and vet KOLs for crypto campaigns?',
    answer: 'Our KOL vetting process covers: (1) Audience authenticity — we use third-party analytics tools to detect fake followers and engagement. (2) Audience demographics — age, country, crypto interest level. (3) Niche relevance — DeFi, trading, NFT, iGaming, or general crypto. (4) Past performance — CPM, click-through rates, conversion data from previous campaigns. (5) Reputation check — no history of rugging or promoting scams. We maintain a database of 200+ vetted crypto KOLs and pitch 50+ options per campaign, selecting the best fit for your specific project.',
  },
  {
    question: 'What results can I realistically expect from a crypto influencer campaign?',
    answer: 'Results depend heavily on your product, market conditions, and campaign execution. Based on our track record: IDO campaigns with proper KOL marketing can generate 50,000+ participants and $1B+ in TVL (LayerAI case). CEX exchange campaigns can drive $1.3M+ in deposits and 12,000+ new verified users (PrimeXBT case). Fintech campaigns in LATAM and Southeast Asia achieve CPT of $100-$237. Community growth of 5,000-55,000 new members per campaign is achievable. We set realistic KPIs based on your vertical, geography, and budget before any campaign launches.',
  },
  {
    question: 'Do you work with iGaming and binary options projects?',
    answer: 'Yes. iGaming and binary options are one of our core verticals. We have deep experience navigating the specific compliance requirements, platform restrictions, and audience targeting needed for these projects. We work with online casinos, sports betting platforms, binary options brokers, and prediction markets. Our campaigns have generated millions in deposits for iGaming clients across Brazil, Mexico, Colombia, Philippines, Nigeria, and India. We understand the specific language, offers, and KOL types that convert in each geography.',
  },
  {
    question: 'How do you handle campaigns in multiple countries (multi-GEO)?',
    answer: 'Multi-GEO execution is one of our specialties. For each geography, we source local KOLs who speak the native language and understand the local crypto culture. We adapt creative angles, offer structures, and platform priorities per GEO — for example, Instagram-first in LATAM, Telegram-heavy in Southeast Asia. Budget allocation is dynamic — we shift spend toward the best-performing GEOs in real-time. Our $3.1M+ fintech campaign covered Brazil, Mexico, Colombia, Philippines, Nigeria, and India simultaneously, with all budgets closed and zero rollovers.',
  },
  {
    question: 'How long does it take to launch a KOL marketing campaign?',
    answer: 'Standard timeline: Brief & strategy alignment (2-3 days) → KOL selection and pitching (3-5 days) → Contract negotiations and briefing (2-3 days) → Content creation and review (3-5 days) → Campaign goes live. Total: 7-14 business days from brief to first live content. For urgent launches (IDOs, exchange listings with hard deadlines), we can compress this to 5-7 days with an expedited process. Ongoing community management campaigns can begin within 24-48 hours.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-24" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked"
          titleHighlight="Questions"
          description="Everything you need to know about crypto KOL and influencer marketing."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm font-semibold text-white leading-relaxed">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 mt-0.5">
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-white/5 pt-4">
                      <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
