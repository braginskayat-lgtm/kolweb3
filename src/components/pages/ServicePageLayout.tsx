import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { CTA } from '@/components/home/CTA';
import { FAQ } from '@/components/home/FAQ';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  features: { icon: string; title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  results: { value: string; label: string }[];
  faqs: FAQItem[];
  tags: string[];
  breadcrumb: { label: string; href: string }[];
}

export function ServicePageLayout({
  badge,
  title,
  titleHighlight,
  description,
  features,
  process,
  results,
  faqs,
  tags,
  breadcrumb,
}: ServicePageProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kolweb3.com' },
      ...breadcrumb.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: b.label,
        item: `https://kolweb3.com${b.href}`,
      })),
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
            {breadcrumb.map((b) => (
              <>
                <span key={`sep-${b.href}`}>/</span>
                <Link key={b.href} href={b.href} className="hover:text-gray-300 transition-colors">{b.label}</Link>
              </>
            ))}
          </nav>

          <AnimatedSection className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {badge}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              {title}{' '}
              <span className="gradient-text">{titleHighlight}</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">{description}</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag) => (
                <Badge key={tag} variant="gray">{tag}</Badge>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Get a Free Proposal
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card text-white font-medium rounded-xl hover:bg-white/[0.07] transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((r, i) => (
              <AnimatedSection key={r.label} delay={i * 0.1} className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">{r.value}</div>
                <div className="text-sm text-gray-400">{r.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">What&apos;s Included</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Full-service execution with everything you need to run a successful campaign.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <GlassCard hover glow="blue" className="p-6 h-full">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">Our <span className="gradient-text">Process</span></h2>
            <p className="text-gray-400">From brief to live campaign in as little as 7 days.</p>
          </AnimatedSection>
          <div className="space-y-6">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-sm font-bold gradient-text">{step.step}</span>
                  </div>
                  <div className="flex-1 pt-2.5">
                    <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ServiceFAQItem key={i} question={faq.question} answer={faq.answer} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

// Simple FAQ item for service pages (non-interactive version for SSR)
function ServiceFAQItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  return (
    <div className="glass-card overflow-hidden">
      <details open={defaultOpen} className="group">
        <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer hover:bg-white/[0.02] transition-colors list-none">
          <span className="text-sm font-semibold text-white leading-relaxed">{question}</span>
          <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="px-5 pb-5 border-t border-white/5 pt-4">
          <p className="text-sm text-gray-400 leading-relaxed">{answer}</p>
        </div>
      </details>
    </div>
  );
}
