import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { CTA } from '@/components/home/CTA';

export const metadata: Metadata = {
  title: 'Crypto KOL Marketing Blog | Guides, Case Studies & Strategy',
  description:
    'Crypto KOL and influencer marketing insights: campaign guides, platform comparisons, GEO strategies, and lessons from managing $3.1M+ in Web3 marketing budgets.',
  alternates: { canonical: 'https://kolweb3.com/blog' },
  openGraph: {
    title: 'Crypto KOL Marketing Blog | kolweb3.com',
    description: 'Insights from managing $3.1M+ in crypto KOL campaigns across 6 GEOs.',
    url: 'https://kolweb3.com/blog',
  },
};

const posts = [
  {
    category: 'Strategy',
    title: 'YouTube vs Instagram for Crypto KOL Marketing in LATAM: A $690K Data Study',
    excerpt: 'We spent $690K testing YouTube vs Instagram for a fintech client in Brazil. CPT dropped from $740 to $237 when we pivoted to Instagram. Here\'s exactly what happened and what it means for your LATAM strategy.',
    readTime: '8 min read',
    date: 'Coming soon',
    tags: ['LATAM', 'KOL Marketing', 'CPT Optimization'],
  },
  {
    category: 'IDO Marketing',
    title: 'How to Launch an IDO with $1B TVL: LayerAI Campaign Breakdown',
    excerpt: 'A detailed breakdown of the LayerAI IDO marketing campaign that generated $1B in TVL, 55,000 community members, and $40M daily trading volume. What worked, what we\'d do differently.',
    readTime: '12 min read',
    date: 'Coming soon',
    tags: ['IDO', 'Web3 Marketing', 'Community Building'],
  },
  {
    category: 'GEO Guides',
    title: 'Philippines Crypto Market: KOL Marketing Guide for $100 CPT',
    excerpt: 'The Philippines is one of our best-performing markets — $100 average CPT on iGaming and fintech campaigns. Here\'s a deep-dive on KOL selection, platform strategy, and what makes Filipino audiences convert.',
    readTime: '7 min read',
    date: 'Coming soon',
    tags: ['Philippines', 'KOL Marketing', 'GEO Strategy'],
  },
  {
    category: 'CEX Marketing',
    title: 'The Afterparty Content Strategy: How 40% of PrimeXBT Registrations Came from Post-Event Content',
    excerpt: 'The biggest surprise from our PrimeXBT campaign: post-event "afterparty" content outperformed the live event itself. Here\'s the full playbook.',
    readTime: '6 min read',
    date: 'Coming soon',
    tags: ['CEX Marketing', 'Event Marketing', 'Content Strategy'],
  },
  {
    category: 'KOL Selection',
    title: 'How to Vet Crypto KOLs: The 7-Point Verification Process We Use for Every Campaign',
    excerpt: 'We pitch 50+ KOLs per campaign and select 10-20. Here\'s the exact criteria we use — including the red flags that disqualify 80% of applicants immediately.',
    readTime: '9 min read',
    date: 'Coming soon',
    tags: ['KOL Vetting', 'Influencer Marketing', 'Campaign Planning'],
  },
  {
    category: 'DeFi Marketing',
    title: 'TVL Growth Strategies for DeFi Protocols: KOL Marketing vs PPC vs Community',
    excerpt: 'What drives TVL growth most efficiently for DeFi protocols in 2024? We compare KOL marketing, paid ads, and community-driven growth with real data.',
    readTime: '10 min read',
    date: 'Coming soon',
    tags: ['DeFi', 'TVL Growth', 'Marketing Strategy'],
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Blog & Insights
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Crypto KOL Marketing{' '}
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Guides, case studies, and strategy breakdowns from managing $3.1M+ in crypto influencer campaigns across 6 geographies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 0.08}>
                <div className="glass-card h-full p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="blue">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-base font-bold text-white mb-3 leading-snug">{post.title}</h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="gray">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <span className="text-xs text-primary">Coming soon →</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-16 text-center">
            <div className="glass-card p-8 max-w-xl mx-auto">
              <h3 className="text-lg font-bold text-white mb-2">Get notified when we publish</h3>
              <p className="text-sm text-gray-400 mb-6">Subscribe for deep-dive guides on crypto KOL marketing, GEO strategies, and campaign insights.</p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary/50"
                />
                <button className="px-4 py-2.5 bg-gradient-brand text-white font-medium rounded-lg text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTA />
    </>
  );
}
