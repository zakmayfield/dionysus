import React from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import HeroBg from '@/shared/assets/juice/citrus-group-bg.jpg';
import { ParallaxHero } from '@/shared/components';
import routes from '@/shared/routes';
import { HeroContentBox } from '@/shared/components/HeroContentBox';

export const ProductsHero = () => {
  const [isLargerThanSmallLaptop] = useMediaQuery('(min-width: 992px)');
  return (
    <Box my='16'>
      <ParallaxHero
        bgImageSrc={HeroBg.src}
        bgImageProps={{ backgroundPosition: 'left 20% center' }}
        showOverlay={!isLargerThanSmallLaptop}
        overlayColor='whiteAlpha.800'
      >
        <HeroContentBox
          href={routes.products}
          title='Wholesale'
          description='With over 350lbs of fruits squeezed every day and over 200 products with many customization options, take a look at what we offer.'
          buttonLabel='View Products'
        />
      </ParallaxHero>
    </Box>
  );
};
