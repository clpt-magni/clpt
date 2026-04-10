import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chalapathipharmacy.in';

  // Core institutional routes
  const routes = [
    '',
    '/about',
    '/academics',
    '/admissions',
    '/contact',
    '/faculty',
    '/programs',
    '/research',
    '/placements',
    '/innovation',
    '/careers',
    '/resources',
    '/compliance',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
