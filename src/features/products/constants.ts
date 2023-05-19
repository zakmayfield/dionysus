import { StaticImageData } from 'next/image';
import CitrusImg from '@/shared/assets/products/citrus.jpg';
import FruitBlendsImg from '@/shared/assets/products/fruit-blends.jpg';
import CocktailsImg from '@/shared/assets/products/cocktails.jpg';
import NutMilksImg from '@/shared/assets/products/nut-milks.jpg';
import OrganicImg from '@/shared/assets/products/organic.jpg';
import LemonadeImg from '@/shared/assets/products/lemonade.jpg';
import TeaCiderImg from '@/shared/assets/products/tea-cider.jpg';
import SmoothiesImg from '@/shared/assets/products/smoothies.jpg';
import GarnishImg from '@/shared/assets/products/garnish.jpg';
import CleanseImg from '@/shared/assets/products/cleanses.jpg';
import IcePopsImg from '@/shared/assets/products/ice-pops.jpg';
import CustomLabellingImg from '@/shared/assets/products/custom-labelling.jpg';

export const ProductImages: Record<string, StaticImageData> = {
  citrus: CitrusImg,
  fruit_blends: FruitBlendsImg,
  cocktail: CocktailsImg,
  nut_milk: NutMilksImg,
  organic: OrganicImg,
  lemonade: LemonadeImg,
  tea_cider: TeaCiderImg,
  smoothies: SmoothiesImg,
  cleanse: CleanseImg,
  garnish: GarnishImg,
  ice_pops: IcePopsImg,
  custom_labelling: CustomLabellingImg,
};
