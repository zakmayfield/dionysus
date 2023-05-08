import React from 'react';
import { Box, Button, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import NextLink from 'next/link';
import HeroBg from '@/shared/assets/juice/citrus-group-bg.jpg';
import { ParallaxHero } from '@/shared/components';
import routes from '@/shared/routes';
import { FadeInBox } from '@/shared/components/FadeInBox';

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
        <FadeInBox>
          <Box w='full' display='flex' justifyContent='flex-end' px='12'>
            <Box border='3px solid' borderColor='blacks.700' p='6'>
              <Heading
                as='h3'
                size='lg'
                fontWeight='semibold'
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
              <Button
                as={NextLink}
                href={routes.products}
                variant='outline'
                colorScheme='blackAlpha'
              >
                <Text color='blacks.700'>View Products</Text>
              </Button>
            </Box>
          </Box>
        </FadeInBox>
      </ParallaxHero>
    </Box>
  );
};
