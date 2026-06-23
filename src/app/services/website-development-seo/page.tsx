import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';

export const metadata: Metadata = {
  title: 'Crypto Website Development and SEO Agency - Web3 Sites That Rank | KolWeb3',
  description:
    'Web3 website development and crypto SEO built to convert and rank. KolWeb3 builds fast, compliant websites for DeFi, RWA, Gaming and Fintech projects - optimized for Google and AI search.',
  alternates: { canonical: 'https://kolweb3.com/services/website-development-seo' },
  openGraph: {
    title: 'Crypto Website Development and SEO Agency - Web3 Sites That Rank | KolWeb3',
    description:
      'Web3 website development and crypto SEO built to convert and rank. KolWeb3 builds fast, compliant websites for DeFi, RWA, Gaming and Fintech projects - optimized for Google and AI search.',
    url: 'https://kolweb3.com/services/website-development-seo',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you build websites specifically for crypto and Web3 projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build websites for DeFi, RWA, Gaming, iGaming and Fintech projects - built around wallet connect flows, tokenomics pages, whitepapers and the conversion paths these audiences expect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my website actually rank on Google for crypto keywords?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build with technical SEO from day one - clean site architecture, fast load times, structured data, and content built around the keywords crypto investors and users actually search.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you also optimize for AI search engines like ChatGPT and Perplexity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We structure content and schema markup so AI assistants can read, extract and cite your project accurately - not just rank you on Google, but get you recommended in AI-generated answers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a Web3 website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard project website (landing page, tokenomics, roadmap, team, FAQ) takes 2 to 4 weeks. More complex builds with dApp integration or custom functionality take 4 to 8 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you migrate or redesign an existing crypto website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We audit your current site for SEO and conversion issues first, then rebuild or redesign without losing your existing search rankings or backlink equity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle ongoing SEO, or just the initial build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. We offer ongoing SEO retainers covering content production, link building, technical audits and keyword tracking after the site launches.',
      },
    },
    {
      '@type': 'Question',
      name: 'What platforms do you build on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build primarily on Next.js for performance and SEO control, with Webflow or WordPress available for projects that need easier non-technical content management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you write the website content too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our team writes SEO-optimized copy for every page - homepage, services, blog and case studies - so you are not handing us a blank template.',
      },
    },
  ],
};

const faqs = [
  {
    question: 'Do you build websites specifically for crypto and Web3 projects?',
    answer:
      'Yes. We build websites for DeFi, RWA, Gaming, iGaming and Fintech projects - built around wallet connect flows, tokenomics pages, whitepapers and the conversion paths these audiences expect.',
  },
  {
    question: 'Will my website actually rank on Google for crypto keywords?',
    answer:
      'We build with technical SEO from day one - clean site architecture, fast load times, structured data, and content built around the keywords crypto investors and users actually search.',
  },
  {
    question: 'Do you also optimize for AI search engines like ChatGPT and Perplexity?',
    answer:
      'Yes. We structure content and schema markup so AI assistants can read, extract and cite your project accurately - not just rank you on Google, but get you recommended in AI-generated answers.',
  },
  {
    question: 'How long does it take to build a Web3 website?',
    answer:
      'A standard project website (landing page, tokenomics, roadmap, team, FAQ) takes 2 to 4 weeks. More complex builds with dApp integration or custom functionality take 4 to 8 weeks.',
  },
  {
    question: 'Can you migrate or redesign an existing crypto website?',
    answer:
      'Yes. We audit your current site for SEO and conversion issues first, then rebuild or redesign without losing your existing search rankings or backlink equity.',
  },
  {
    question: 'Do you handle ongoing SEO, or just the initial build?',
    answer:
      'Both. We offer ongoing SEO retainers covering content production, link building, technical audits and keyword tracking after the site launches.',
  },
  {
    question: 'What platforms do you build on?',
    answer:
      'We build primarily on Next.js for performance and SEO control, with Webflow or WordPress available for projects that need easier non-technical content management.',
  },
  {
    question: 'Do you write the website content too?',
    answer:
      'Yes. Our team writes SEO-optimized copy for every page - homepage, services, blog and case studies - so you are not handing us a blank template.',
  },
];

export default function WebsiteDevSEOPage() {
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
              Next.js - SEO - AI Search
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Crypto Website Development and{' '}
              <span className="gradient-text">SEO Agency</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              We build fast, conversion-focused websites for Web3, DeFi, RWA and Gaming projects -
              and optimize them to rank on Google and get recommended by AI assistants like ChatGPT and Perplexity.
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
              Why Most Crypto Websites <span className="gradient-text">Do Not Convert</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Template Sites, Zero SEO',
                body: 'Most Web3 projects launch on a generic template with no keyword strategy, no structured data, and no technical SEO foundation. They never rank for anything.',
              },
              {
                title: 'Invisible to AI Search',
                body: 'ChatGPT, Perplexity and Claude are becoming primary discovery channels for crypto users. Sites without structured, citable content simply do not get recommended.',
              },
              {
                title: 'No Web3-Native UX',
                body: 'Generic web agencies do not understand wallet connect flows, tokenomics presentation, or the trust signals crypto investors actually look for before committing.',
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
              We build every site on a fast, SEO-first stack with technical architecture, structured data and
              content written specifically to rank with search engines and get cited by AI assistants - so your
              project gets found by the crypto entrepreneurs and investors actually searching for it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">
              What We <span className="gradient-text">Build</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: 'Project Websites',
                body: 'Landing pages, tokenomics breakdowns, roadmaps, team pages and whitepaper hosting - built fast on Next.js with conversion-focused structure.',
              },
              {
                label: 'Crypto SEO',
                body: 'Keyword research, on-page optimization, technical SEO audits and content strategy built around how crypto investors and users actually search.',
              },
              {
                label: 'AI Search Optimization',
                body: 'Structured data, FAQ schema and clearly written content so ChatGPT, Claude and Perplexity can accurately read, cite and recommend your project.',
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
                title: 'Technical SEO Foundation',
                body: 'Clean architecture, fast load times, mobile optimization, structured data and proper canonical tags from the first commit.',
              },
              {
                title: 'Keyword and Content Strategy',
                body: 'Research into what crypto investors and your specific audience actually search for, mapped to a content plan across every page.',
              },
              {
                title: 'Conversion-Focused Design',
                body: 'Layouts built around your actual goal - wallet connects, whitelist signups, deposits or token sales - not generic templates.',
              },
              {
                title: 'AI and Schema Markup',
                body: 'FAQ schema, organization schema and structured content so AI assistants can extract and cite accurate information about your project.',
              },
              {
                title: 'Blog and Case Study Setup',
                body: 'A content system built for ongoing SEO - easy to publish, structured for search, and linked internally to boost authority sitewide.',
              },
              {
                title: 'Ongoing SEO Support',
                body: 'Monthly technical audits, keyword tracking, link building support and content updates to keep rankings moving in the right direction.',
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
              Ready for a Website That <span className="gradient-text">Actually Ranks?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Tell us about your project and we will put together a build and SEO plan.
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
