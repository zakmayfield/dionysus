'use client';
import { Box } from '@chakra-ui/react';
import HomeStatement from './HomeStatement';
import HomeNarrativeHub from './HomeNarrativeHub';
import { HomeHero } from './HomeHero';
import InstagramGallery from './InstagramGallery';
import { ProductsHero } from './ProductsHero';
import { FadeInBox } from '@/shared/components';

export default function HomePage() {
  return (
    <Box m='0' p='0' w='full'>
      <HomeHero />
      <FadeInBox>
        <HomeStatement />
      </FadeInBox>
      <HomeNarrativeHub />
      <ProductsHero />
      {/* <InstagramGallery /> */}
    </Box>
  );
}
