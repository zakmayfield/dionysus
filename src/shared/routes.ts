const constructAboutRoute = (route: string) => {
  return `/about/${route}`;
};

export default {
  home: '/',
  browserNotSupported: '/browser-not-supported',
  products: '/products',
  faq: '/faq',
  contact: '/contact',
  about: '/about',
  ourStory: constructAboutRoute('our-story'),
  philosophy: constructAboutRoute('philosophy'),
  sustainability: constructAboutRoute('sustainability'),
  deliveryArea: constructAboutRoute('delivery-area'),
} as const;
