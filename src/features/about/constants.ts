import { StaticImageData } from 'next/image';
import blueberries from '@/shared/assets/about/blueberries.jpeg';
import mixedberries from '@/shared/assets/about/mixedberries.jpeg';
import redberries from '@/shared/assets/about/redberries.jpeg';

export type pathItem = {
  id: number;
  title: string;
  altText: string;
  slug: string;
  img: StaticImageData;
};

export const pathData: pathItem[] = [
  {
    id: 0,
    title: 'Our Story',
    altText: 'Close up of blue berries',
    slug: 'our-story',
    img: blueberries,
  },
  {
    id: 1,
    title: 'Philosophy',
    altText: 'Close up of mixed berries',
    slug: 'philosophy',
    img: mixedberries,
  },
  {
    id: 2,
    title: 'Delivery Area',
    altText: 'Close up of mixed red berries',
    slug: 'delivery-area',
    img: redberries,
  },
];
