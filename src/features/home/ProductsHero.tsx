import React from 'react';
import { Box, Button, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import HeroBg from '@/shared/assets/juice/citrus-group-bg.jpg';
import { ParallaxHero } from '@/shared/components';

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
        <Box w='full' display='flex' justifyContent='flex-end' px='12'>
          <Box border='3px solid' borderColor='blacks.700' p='6'>
            <Heading
              as='h3'
              size='lg'
              fontFamily='Londrina Outline'
              letterSpacing='widest'
              color='blacks.800'
              mb='4'
            >
              Wholesale
            </Heading>
            <Text maxW='30ch' mb='6'>
              With over 350lbs of fruits squeezed every day and over 200
              products with many customization options, take a look at what we
              offer.
            </Text>
            <Button variant='outline' colorScheme='blackAlpha'>
              <Text color='blacks.700'>View Products</Text>
            </Button>
          </Box>
        </Box>
      </ParallaxHero>
    </Box>
  );
};