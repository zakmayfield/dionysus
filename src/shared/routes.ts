const aboutRoute = (route: string) => {
  return `/about/${route}`;
};

export default {
  home: '/',
  browserNotSupported: '/browser-not-supported',
  products: '/products',
  faq: '/faq',
  contact: '/contact',
  about: '/about',
  ourStory: aboutRoute('our-story'),
  philosophy: aboutRoute('philosophy'),
  deliveryArea: aboutRoute('delivery-area'),
} as const;
