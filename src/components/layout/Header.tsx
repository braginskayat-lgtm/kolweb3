'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoMark } from '@/components/ui/LogoMark';

const services = [
  { label: 'KOL & Influencer Marketing', href: '/services/kol-influencer-marketing' },
  { label: 'PPC & Paid Advertising', href: '/services/ppc-paid-advertising' },
  { label: 'SMM & Community', href: '/services/smm-community-management' },
  { label: 'PR & Media', href: '/services/pr-media' },
  { label: 'Website Development & SEO', href: '/services/website-development-seo' },
  { label: 'Shilling', href: '/services/shilling' },
];

const industries = [
  { label: 'Crypto & Web3', href: '/industries/crypto-web3' },
  { label: 'iGaming & Binary', href: '/industries/igaming-binary' },
  { label: 'Fintech', href: '/industries/fintech' },
  { label: 'RWA & Token', href: '/industries/rwa-token' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0F]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <LogoMark size={32} />
            <span className="font-bold text-lg tracking-tight">
              <span className="text-white">KOL</span><span className="gradient-text">WEB3</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Services
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-64 glass-card shadow-xl shadow-black/20 py-2"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Industries
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-52 glass-card shadow-xl shadow-black/20 py-2"
                  >
                    {industries.map((i) => (
                      <Link
                        key={i.href}
                        href={i.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {i.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/cases" className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Cases
            </Link>
            <Link href="/blog" className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              Blog
            </Link>
            <Link href="/about" className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
              About
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-brand rounded-lg hover:opacity-90 transition-opacity"
            >
              Get a Proposal
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0A0F]/95 backdrop-blur-md border-b border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              <p className="text-xs text-gray-500 uppercase tracking-wider px-3 py-1">Services</p>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.label}
                </Link>
              ))}
              <p className="text-xs text-gray-500 uppercase tracking-wider px-3 py-1 mt-2">Industries</p>
              {industries.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {i.label}
                </Link>
              ))}
              <div className="border-t border-white/5 pt-2 mt-2 space-y-1">
                {[
                  { label: 'Cases', href: '/cases' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'About', href: '/about' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-brand rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Free Proposal
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
