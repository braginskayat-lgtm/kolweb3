import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | kolweb3.com',
  description: 'Privacy policy for kolweb3.com — how we collect, use, and protect your information.',
  alternates: { canonical: 'https://kolweb3.com/privacy' },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <span>/</span>
          <span>Privacy Policy</span>
        </nav>
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-gray-400">
          <p>Last updated: March 2025</p>
          <h2 className="text-white text-lg font-semibold">Information We Collect</h2>
          <p>We collect information you provide directly to us, including name, email address, company name, Telegram handle, and any other information you choose to provide through our contact form.</p>
          <h2 className="text-white text-lg font-semibold">How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide our services, send you relevant updates about our services, and improve our website and offerings.</p>
          <h2 className="text-white text-lg font-semibold">Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
          <h2 className="text-white text-lg font-semibold">Contact</h2>
          <p>For privacy-related questions, contact us at <a href="mailto:hello@kolweb3.com" className="text-primary hover:underline">hello@kolweb3.com</a>.</p>
        </div>
      </div>
    </section>
  );
}
