import { StaticImageData } from 'next/image';
import blueberries from '@/shared/assets/about/blueberries.jpeg';
import mixedberries from '@/shared/assets/about/mixedberries.jpeg';
import redberries from '@/shared/assets/about/redberries.jpeg';

export type pathItem = {
  id: number;
  title: string;
  slug: string;
  img: StaticImageData;
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

export const philosophyTitle = 'Our Philosophy';
export const philosophySubtitle =
  'At Chasers Fresh Juice, our philosophy is fresh is best!';
export const philosophyContent = [
  'Our juices are made from all-natural, fresh ingredients with no sugars or preservatives added. Because fresh is best, we begin each day at 7am creating all of our juice orders so we can deliver them to you that very same day. Our goal is to provide our clients and the public with fresh, healthy, unpasteurized and raw juices made of all-natural, real ingredients. We rely on the natural flavours of the fruits, vegetables, herbs and in-house made syrups we use in our products. We do not add any additional flavour or colour enhancers because we think the natural flavour of our juices speak for itself, they don’t need anything extra. Chasers Juice is a fresh juice experience!',
  'Chasers Fresh Juice is also committed to finding new and innovative ways to limit the amount of waste produced every day. All of our biological waste from the fruits and vegetables we juice is not disposed of or composted but instead we have sourced a company that recycles and renews the biological waste into electrical energy. We also encourage our customers to allow us to use our coloured plastic bottle caps rather then black caps. This is because black coloured plastic is unable to be recycled in the city of Toronto, so 90% of the caps we use are coloured so they can be properly recycled.',
];

export const storyTitle = 'Our Story';
export const storySubtitle = 'Founded in Toronto over 20 years ago';
export const storyContent = [
  'Chasers Fresh Juice provides unique, fresh, raw and delicious juices to our clientele, located in Toronto, Ontario and all over Canada. Our flavourful company started like many others have, in a garage in downtown Toronto. The founder and CEO Richard Chase was squeezing and juicing all of the ingredients of each juice by hand as he created all of our current recipes from scratch. He approached many popular restaurants in the downtown core and quickly began supplying restaurants with freshly squeezed raw juices. Since then, hundreds of restaurants and other businesses have tasted, loved and currently use our freshly made products daily. In fact, if you’ve eaten at a restaurant in downtown Toronto, you have likely tried our juice already!',
  'For over a decade now, Chasers Juice has provided clients and the public with an unparalleled level in quality and flavour in all of our raw juices. Juice is more than a delicious drink, it’s a science. Our recipes are specially crafted and ingredients meticulously measured in order to ensure healthy and tasty mixes, delivered consistently. Chasers has grown from an operation based out of the back of a private residence to a wholesale operation which currently processes hundreds of litres of juice daily! On average, over 350 pounds of both lemons & limes are squeezed every day by our production team. It takes a lot of fruit to make our fruit juice. In only two litres of Chasers orange juice, there are over two dozen oranges!taurant in downtown Toronto, you have likely tried our juice already!',
];
export const storyContent2 = [
  'Following specially crafted recipes created in-house by the owner, the production team creates each juice ensuring each recipe is followed identically, with specific measurements of each ingredients. Consistency is king at Chasers Juice, and we pride ourselves on our ability to create healthy and flavourful juices and to do it every single day. Chasers Juice is comprised of a tightly knit team of professionals, all with a keen passion for taste and flavour. Under the leadership and guidance of owner, visionary and flavour connoisseur Richard Chase, the Chasers production team works each day to create delicious, healthy and flavourful blends.',
  'Once the juices are created for the day, we label and package the juice for delivery. Once in transit, the juice arrives at its destination promptly in order to ensure all juices are fresh on delivery.',
];
