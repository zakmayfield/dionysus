import { Metadata } from 'next';

export const sharedMetadata: Metadata = {
  title: 'Chasers Fresh Juice Inc.',
  description: 'Toronto based wholesale fresh juice company',
  keywords: [
    'chasers juice',
    'chasers fresh juice',
    'fresh juice',
    'wholesale juice',
    'wholesale fresh juice',
    'juice',
    'toronto',
    'ontario',
    'juice supplier',
    'juice supplier toronto',
    'juice supplier ontario',
    'juice supplier canada',
  ],
  category: 'fresh juice',
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
    apple: {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  },
};
