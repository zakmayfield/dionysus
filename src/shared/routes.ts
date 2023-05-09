import { AboutRouteParams } from '@/features/about/constants';

const aboutRoute = (route: string) => {
  return `/about?tab=${route}`;
};

export default {
  home: '/',
  browserNotSupported: '/browser-not-supported',
  products: '/products',
  faq: '/faq',
  contact: '/contact',
  about: aboutRoute(AboutRouteParams.ABOUT),
  philosophy: aboutRoute(AboutRouteParams.PHILOSOPHY),
  wholesale: aboutRoute(AboutRouteParams.WHOLESALE),
  deliveryArea: aboutRoute(AboutRouteParams.DELIVERY_AREA),
} as const;
