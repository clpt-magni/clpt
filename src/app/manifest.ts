import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Chalapathi Institute of Pharmaceutical Sciences (CLPT)',
    short_name: 'CLPT',
    description: 'Best Pharmacy College in Andhra Pradesh. Accredited NAAC A+ & NBA.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a365d', // Based on institutional blue
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/images/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
