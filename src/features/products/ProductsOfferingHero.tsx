import { Button, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { HeroContentBox, ParallaxHero } from '@/shared/components';
import routes from '@/shared/routes';
import HeroBg from '@/shared/assets/juice/lemons-bg.jpg';

export const ProductsOfferingHero = () => {
  return (
    <ParallaxHero
      bgImageSrc={HeroBg.src}
      bgImageProps={{ backgroundPosition: 'left 20% center' }}
      showOverlay
      overlayColor='whiteAlpha.500'
    >
      <HeroContentBox
        href={routes.contact}
        title='Our Offering'
        description='Serving Toronto, Ontario & beyond with wholesale juice and other juice products. Custom options are available!'
        buttonLabel='View Catalogue'
        customButton={
          <Link href='/Chasers-Juice-Product-List.pdf' target='_blank'>
            <Button variant='outline' colorScheme='blackAlpha'>
              <Text color='blacks.800'>View Catalogue</Text>
            </Button>
          </Link>
        }
      />
    </ParallaxHero>
  );
};
