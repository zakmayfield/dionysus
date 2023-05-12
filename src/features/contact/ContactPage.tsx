'use client';
import React from 'react';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { ContentContainer, Hero } from '@/shared/components';
import HeroImg from '@/shared/assets/contact/hero.jpg';
import BgImg from '@/shared/assets/contact/fruit-bg.jpg';

export const ContactPage = () => {
  return (
    <Box>
      <Hero title='Contact Us' imgSrc={HeroImg.src} />
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
              <ContactInfo />
            </GridItem>
            <GridItem>
              <Box
                minW='40%'
                boxShadow='7px 12px 20px 0 rgba(0,0,0, 0.3)'
                rounded='md'
                bg={{ lg: 'transparent', base: 'whiteAlpha.900' }}
                p='12'
              >
                <Heading as='h3' size='lg' fontWeight='semibold' mb='3'>
                  Get In Touch
                </Heading>
                <Text mb='6'>
                  Set up an account with us prior to your first order!
                </Text>
                <ContactForm />
              </Box>
            </GridItem>
          </Grid>
        </ContentContainer>
      </Box>
    </Box>
  );
};
