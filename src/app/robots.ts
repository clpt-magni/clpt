import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/student-dashboard/',
          '/sign-in/',
          '/sign-up/',
          '/studio/',
          '/api/',
          '/_next/',
        ],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
    ],
    sitemap: 'https://chalapathipharmacy.ac.in/sitemap.xml',
  };
}
