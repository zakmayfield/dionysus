import blueberries from '@/shared/assets/about/blueberries.jpeg';
import mixedberries from '@/shared/assets/about/mixedberries.jpeg';
import redberries from '@/shared/assets/about/redberries.jpeg';

export type pathItem = {
  id: number;
  title: string;
  slug: string;
  img: any;
};

export const pathData: pathItem[] = [
  {
    id: 0,
    title: 'Our Story',
    slug: 'our-story',
    img: blueberries,
  },
  {
    id: 1,
    title: 'Philosophy',
    slug: 'philosophy',
    img: mixedberries,
  },
  {
    id: 2,
    title: 'Delivery Area',
    slug: 'delivery-area',
    img: redberries,
  },
];
