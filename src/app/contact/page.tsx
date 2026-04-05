import type { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactForm } from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Get a Free Crypto KOL Marketing Proposal',
  description:
    'Get a free crypto KOL marketing proposal. Tell us about your project — budget, goals, target GEO — and we\'ll respond within 24 hours.',
  alternates: { canonical: 'https://kolweb3.com/contact' },
  openGraph: {
    title: 'Contact kolweb3.com | Free Crypto KOL Marketing Proposal',
    description: 'Tell us about your Web3 or iGaming project. Free strategy consultation within 24 hours.',
    url: 'https://kolweb3.com/contact',
  },
};

export default function ContactPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <AnimatedSection>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Free Consultation
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Your{' '}
              <span className="gradient-text">Crypto Campaign</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              Tell us about your project, budget, and goals. We&apos;ll respond within 24 hours with a custom strategy, KOL recommendations, and budget projection.
            </p>

            {/* Contact methods */}
            <div className="space-y-4 mb-10">
              <a
                href="mailto:hello@kolweb3.com"
                className="flex items-center gap-4 p-4 glass-card hover:bg-white/[0.05] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">Email</div>
                  <div className="text-sm text-gray-400">hello@kolweb3.com</div>
                </div>
              </a>
              <a
                href="https://t.me/kolweb3agency"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card hover:bg-white/[0.05] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.088 13.99 4.117 13.1c-.643-.204-.657-.643.136-.953l11.25-4.34c.536-.194 1.004.13.391.954z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-primary transition-colors">Telegram</div>
                  <div className="text-sm text-gray-400">@kolweb3agency</div>
                </div>
              </a>
            </div>

            {/* Why contact us */}
            <div className="glass-card p-5">
              <h3 className="text-sm font-semibold text-white mb-3">What happens after you submit:</h3>
              <div className="space-y-2.5">
                {[
                  { step: '1', text: 'We review your project brief within 24 hours' },
                  { step: '2', text: 'We send back a custom strategy with KOL recommendations' },
                  { step: '3', text: 'Optional 30-min strategy call to align on approach' },
                  { step: '4', text: 'Proposal with detailed budget breakdown and KPIs' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <span className="text-sm text-gray-400">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8">
              <h2 className="text-xl font-bold text-white mb-6">Send a Proposal Request</h2>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
