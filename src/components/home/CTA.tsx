import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden glass-card p-10 sm:p-16 text-center rounded-2xl">
            {/* Gradient blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-r from-primary/20 to-secondary/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Free consultation — no commitment
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Launch Your{' '}
                <span className="gradient-text">Crypto Campaign?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Get a free proposal with KOL recommendations, platform strategy, and budget projections tailored to your project. We respond within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-brand text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-primary/25 text-lg"
                >
                  Get a Free Proposal
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="https://t.me/kolweb3agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card text-white font-medium rounded-xl hover:bg-white/[0.07] transition-all text-lg border-white/10"
                >
                  <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.088 13.99 4.117 13.1c-.643-.204-.657-.643.136-.953l11.25-4.34c.536-.194 1.004.13.391.954z"/>
                  </svg>
                  Message on Telegram
                </a>
              </div>
              <p className="mt-6 text-xs text-gray-600">
                No spam. No unsolicited follow-ups. Just a focused strategy call when you&apos;re ready.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
