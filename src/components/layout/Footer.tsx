import Link from 'next/link';
import { LogoMark } from '@/components/ui/LogoMark';

const footerLinks = {
  Services: [
    { label: 'KOL & Influencer Marketing', href: '/services/kol-influencer-marketing' },
    { label: 'Crypto Influencer Marketing', href: '/services/crypto-influencer-marketing' },
    { label: 'Web3 Marketing', href: '/services/web3-marketing' },
    { label: 'PPC & Paid Advertising', href: '/services/ppc-paid-advertising' },
    { label: 'SMM & Community', href: '/services/smm-community-management' },
    { label: 'PR & Media', href: '/services/pr-media' },
  ],
  Industries: [
    { label: 'Crypto & Web3', href: '/industries/crypto-web3' },
    { label: 'iGaming & Binary', href: '/industries/igaming-binary' },
    { label: 'Fintech', href: '/industries/fintech' },
    { label: 'RWA & Token', href: '/industries/rwa-token' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/cases' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0A0A0F]">
      {/* Top CTA bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Ready to launch your campaign?</h3>
            <p className="text-gray-400 text-sm">Get a free strategy session with our crypto marketing experts.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-6 py-3 bg-gradient-brand text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Get a Free Proposal
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <LogoMark size={32} />
              <span className="font-bold text-lg tracking-tight">
                <span className="text-white">KOL</span><span className="gradient-text">WEB3</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Crypto KOL & influencer marketing agency for Web3, DeFi, RWA, iGaming & Fintech projects. Performance-driven campaigns with verified results.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://t.me/kolweb3agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.088 13.99 4.117 13.1c-.643-.204-.657-.643.136-.953l11.25-4.34c.536-.194 1.004.13.391.954z"/>
                </svg>
              </a>
              <a
                href="https://x.com/kolweb3agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
                aria-label="X"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@kolweb3.com"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2025 KolWeb3. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
            <a href="/llms.txt" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">llms.txt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
