const aboutRoute = (route: string) => {
  return `/about/${route}`;
};

export default {
  home: '/',
  browserNotSupported: '/browser-not-supported',
  products: '/products',
  faq: '/faq',
  contact: '/contact',
  about: aboutRoute('/our-story'),
  philosophy: aboutRoute('/philosophy'),
  wholesale: aboutRoute('/wholesale'),
  deliveryArea: aboutRoute('/delivery-area'),
} as const;
