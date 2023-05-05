'use client';
import { Box } from '@chakra-ui/react';
import HomeStatement from './HomeStatement';
import HomeNarrativeHub from './HomeNarrativeHub';
import { HomeHero } from './HomeHero';
import InstagramGallery from './InstagramGallery';
import { ProductsHero } from './ProductsHero';

export default function HomePage() {
  return (
    <Box m='0' p='0' w='full'>
      <HomeHero />
      <HomeStatement />
      <HomeNarrativeHub />
      <ProductsHero />
      <InstagramGallery />
    </Box>
  );
}
