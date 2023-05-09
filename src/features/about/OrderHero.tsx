import React from 'react';
import OrderHeroBg from '@/shared/assets/juice/oranges-bg.jpg';
import { ParallaxHero, HeroContentBox } from '@/shared/components';
import routes from '@/shared/routes';

export const OrderHero = () => {
  return (
    <ParallaxHero
      bgImageSrc={OrderHeroBg.src}
      bgImageProps={{ backgroundPosition: 'left 20% center' }}
      overlayColor='whiteAlpha.800'
    >
      <HeroContentBox
        title='Ready to Order?'
        description="With our easy ordering process, you'll have your items in no time."
        buttonLabel='Order Now'
        href={routes.contact}
        colorScheme='whiteAlpha'
        variant='solid'
      />
    </ParallaxHero>
  );
};
