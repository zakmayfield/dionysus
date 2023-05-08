import blueberries from '@/shared/assets/about/blueberries.jpeg';
import mixedberries from '@/shared/assets/about/mixedberries.jpeg';
import redberries from '@/shared/assets/about/redberries.jpeg';
import moreberries from '@/shared/assets/about/moreberries.jpeg';

export enum AboutRouteParams {
  ABOUT = 'ABOUT',
  PHILOSOPHY = 'PHILOSOPHY',
  WHOLESALE = 'WHOLESALE',
  DELIVERY_AREA = 'DELIVERY_AREA',
}

export const tabData = [
  {
    id: 0,
    tabName: 'about',
    param: AboutRouteParams.ABOUT,
    imgSrc: blueberries.src,
  },
  {
    id: 1,
    tabName: 'philosophy',
    param: AboutRouteParams.PHILOSOPHY,
    imgSrc: moreberries.src,
  },
  {
    id: 2,
    tabName: 'wholesale',
    param: AboutRouteParams.WHOLESALE,
    imgSrc: mixedberries.src,
  },
  {
    id: 3,
    tabName: 'delivery Area',
    param: AboutRouteParams.DELIVERY_AREA,
    imgSrc: redberries.src,
  },
];
