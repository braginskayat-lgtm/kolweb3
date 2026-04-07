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
    default: 'Crypto Marketing Agency for Web3, DeFi, RWA & iGaming | KolWeb3',
    template: '%s | KolWeb3 Crypto Marketing Agency',
  },
  description:
    'KolWeb3 is a crypto marketing agency specializing in KOL campaigns, paid media, PR, and community growth for Web3, DeFi, RWA, and iGaming projects. $3.1M+ budgets managed, $1B+ TVL generated.',
  keywords: [
    'crypto marketing agency',
    'cryptocurrency marketing agency',
    'crypto marketing services',
    'blockchain marketing agency',
    'Web3 marketing agency',
    'crypto KOL marketing agency',
    'crypto influencer marketing agency',
    'DeFi marketing agency',
    'iGaming crypto marketing',
    'RWA marketing agency',
    'crypto PR agency',
    'crypto community management',
    'crypto advertising agency',
    'crypto performance marketing',
    'Web3 growth agency',
  ],
  authors: [{ name: 'KolWeb3' }],
  creator: 'KolWeb3',
  publisher: 'KolWeb3',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kolweb3.com',
    siteName: 'KolWeb3',
    title: 'Crypto Marketing Agency for Web3, DeFi, RWA & iGaming | KolWeb3',
    description:
      'KolWeb3 is a crypto marketing agency specializing in KOL campaigns, paid media, PR, and community growth for Web3, DeFi, RWA, and iGaming projects.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KolWeb3 — Crypto Marketing Agency for Web3, DeFi, RWA & iGaming',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Marketing Agency for Web3, DeFi, RWA & iGaming | KolWeb3',
    description:
      'KolWeb3 is a crypto marketing agency specializing in KOL campaigns, paid media, PR, and community growth for Web3, DeFi, RWA, and iGaming projects.',
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
  google: 'HU6ITxA6yZaodJlOH-MbqeRHh569fs4hoHIWaUC1EZA',
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
