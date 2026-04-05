import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'KOL & Influencer Marketing',
    description: 'Full-cycle KOL campaign management, from creator sourcing and outreach to negotiation, content coordination, and performance tracking.',
    href: '/services/kol-influencer-marketing',
    tags: ['50+ KOLs', 'Multi-platform'],
    gradient: 'from-blue-500/10 to-blue-600/5',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    title: 'PPC & Paid Advertising',
    description: 'Paid acquisition campaigns across Google, Meta, TikTok, and crypto-friendly channels designed to drive qualified traffic, users, and conversions.',
    href: '/services/ppc-paid-advertising',
    tags: ['Google Ads', 'Meta', 'TikTok Ads'],
    gradient: 'from-orange-500/10 to-orange-600/5',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    title: 'PR & Media',
    description: 'PR campaigns and media placements across crypto and mainstream outlets to strengthen credibility, expand reach, and support key launches.',
    href: '/services/pr-media',
    tags: ['Cointelegraph', 'Decrypt', 'Media Outreach'],
    gradient: 'from-pink-500/10 to-pink-600/5',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'SMM & Community Management',
    description: 'Content planning, moderation, AMAs, and day-to-day community operations designed to grow engagement and keep Web3 audiences active.',
    href: '/services/smm-community-management',
    tags: ['Telegram', 'Discord', 'Reddit'],
    gradient: 'from-green-500/10 to-green-600/5',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Website Development & SEO',
    description: 'Conversion-focused Web3 websites built for credibility, performance, and discoverability, with SEO foundations that support long-term organic growth.',
    href: '/services/website-development-seo',
    tags: ['Landing Pages', 'SEO', 'CRO'],
    gradient: 'from-cyan-500/10 to-cyan-600/5',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: 'Shilling',
    description: 'Organic community promotion across Telegram, Discord, X, and niche crypto channels to boost awareness, conversations, and project visibility.',
    href: '/services/shilling',
    tags: ['Telegram', 'Discord', 'X'],
    gradient: 'from-purple-500/10 to-purple-600/5',
  },
];

export function Services() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="Everything You Need to Launch,"
          titleHighlight="Grow, and Scale in Web3"
          description="From KOL campaigns and paid media to PR, community, SEO, and shilling, we cover the channels that move Web3 projects forward."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <AnimatedSection key={service.href} delay={i * 0.08}>
              <Link href={service.href} className="group block h-full">
                <div className={`glass-card h-full p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${service.gradient}`}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs bg-white/5 text-gray-400 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
