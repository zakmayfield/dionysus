'use client';
import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { ContactInfo } from './ContactInfo';
import { Forms } from './Forms';
import { ContentContainer, FadeInBox, Hero } from '@/shared/components';
import HeroImg from '@/shared/assets/contact/citrus-hero.jpg';
import BgImg from '@/shared/assets/contact/fruit-bg.jpg';

export const ContactPage = () => {
  return (
    <Box>
      <Hero title='Contact Us' img={HeroImg} altText='citrus' />
      <Box
        bgImage={BgImg.src}
        w='full'
        backgroundPosition={{ '2xl': 'center bottom -65vh', base: 'center' }}
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
      >
        <ContentContainer maxW='container.xl'>
          <Grid
            templateColumns={{ lg: 'repeat(2, 1fr)', base: '1fr' }}
            gap='10'
            templateRows='1fr'
            pt='16'
            pb='32'
          >
            <GridItem display='flex' justifyContent={{ lg: 'center' }}>
              <FadeInBox>
                <ContactInfo />
              </FadeInBox>
            </GridItem>
            <GridItem>
              <Forms />
            </GridItem>
          </Grid>
        </ContentContainer>
      </Box>
    </Box>
  );
};
