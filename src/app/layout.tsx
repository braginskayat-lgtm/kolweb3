import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kolweb3.com'),
  title: {
    default: 'Crypto KOL & Influencer Marketing Agency | kolweb3.com',
    template: '%s | kolweb3.com',
  },
  description:
    'Top crypto KOL & influencer marketing agency for Web3, DeFi, RWA, iGaming & Fintech. $3.1M+ budgets managed, $1B+ TVL generated, 55,000+ community members.',
  keywords: [
    'crypto KOL marketing',
    'web3 influencer marketing',
    'crypto influencer agency',
    'blockchain marketing agency',
    'DeFi marketing',
    'IDO marketing',
    'iGaming influencer marketing',
    'RWA token marketing',
    'crypto community management',
  ],
  authors: [{ name: 'kolweb3.com' }],
  creator: 'kolweb3.com',
  publisher: 'kolweb3.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kolweb3.com',
    siteName: 'kolweb3.com',
    title: 'Crypto KOL & Influencer Marketing Agency | kolweb3.com',
    description:
      'Top crypto KOL & influencer marketing agency for Web3, DeFi, RWA, iGaming & Fintech. $3.1M+ budgets managed.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'kolweb3.com — Crypto KOL & Influencer Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto KOL & Influencer Marketing Agency | kolweb3.com',
    description:
      'Top crypto KOL & influencer marketing agency for Web3, DeFi, RWA & iGaming.',
    images: ['/og-image.png'],
    site: '@kolweb3agency',
    creator: '@kolweb3agency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: 'https://kolweb3.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-text-primary antialiased">
        <div className="noise-overlay" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
