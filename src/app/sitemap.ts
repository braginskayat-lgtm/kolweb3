import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kolweb3.com';
  const now = new Date();

  const routes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/cases',
    '/cases/fintech-igaming-6-geo',
    '/cases/layerai-ido-1b-tvl',
    '/cases/primexbt-deposits',
    '/services/kol-influencer-marketing',
    '/services/crypto-influencer-marketing',
    '/services/web3-marketing',
    '/services/ppc-paid-advertising',
    '/services/smm-community-management',
    '/services/pr-media',
    '/industries/crypto-web3',
    '/industries/igaming-binary',
    '/industries/fintech',
    '/industries/rwa-token',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') || route.startsWith('/industries') ? 0.8 : 0.7,
  }));
}
