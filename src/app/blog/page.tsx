import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { CTA } from '@/components/home/CTA';
import { getAllPosts } from '@/lib/blog/posts';

export const metadata: Metadata = {
  title: 'Crypto KOL Marketing Blog | Guides, Case Studies & Strategy',
  description: 'Crypto KOL and influencer marketing insights from managing $3.1M+ in Web3 marketing budgets.',
  alternates: { canonical: 'https://kolweb3.com/blog' },
};

export default function BlogPage() {
  const posts = getAllPosts();
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
              Crypto KOL Marketing <span className="gradient-text">Insights</span>
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
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                {post.published ? (
                  <Link href={`/blog/${post.slug}`} className="block h-full group">
                    <div className="glass-card h-full p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="blue">{post.category}</Badge>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      <h2 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-primary transition-colors">{post.title}</h2>
                      <p className="text-sm text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.map((tag) => <Badge key={tag} variant="gray">{tag}</Badge>)}
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <span className="text-xs text-gray-500">{post.date}</span>
                        <span className="text-xs text-primary">Read article →</span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="glass-card h-full p-6 opacity-60">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="blue">{post.category}</Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-base font-bold text-white mb-3 leading-snug">{post.title}</h2>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag) => <Badge key={tag} variant="gray">{tag}</Badge>)}
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <span className="text-xs text-gray-600">Coming soon →</span>
                    </div>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}