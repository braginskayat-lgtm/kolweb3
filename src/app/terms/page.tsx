import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | kolweb3.com',
  description: 'Terms of service for kolweb3.com crypto marketing agency.',
  alternates: { canonical: 'https://kolweb3.com/terms' },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <span>/</span>
          <span>Terms of Service</span>
        </nav>
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-gray-400">
          <p>Last updated: March 2025</p>
          <h2 className="text-white text-lg font-semibold">Services</h2>
          <p>kolweb3.com provides crypto KOL and influencer marketing services, community management, PPC advertising, and PR services for blockchain and Web3 projects. All services are subject to a separate service agreement.</p>
          <h2 className="text-white text-lg font-semibold">Website Use</h2>
          <p>You may use this website for informational purposes. You may not reproduce, distribute, or create derivative works from any content on this site without express written permission.</p>
          <h2 className="text-white text-lg font-semibold">Disclaimer</h2>
          <p>Case study results represent specific client campaigns and are not guaranteed outcomes. Crypto marketing campaign results vary based on market conditions, project quality, budget, and other factors.</p>
          <h2 className="text-white text-lg font-semibold">Contact</h2>
          <p>Questions about these terms: <a href="mailto:hello@kolweb3.com" className="text-primary hover:underline">hello@kolweb3.com</a></p>
        </div>
      </div>
    </section>
  );
}
