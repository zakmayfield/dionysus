'use client';
import { Box } from '@chakra-ui/react';
import HomeHero from './HomeHero';
import HomeStatement from './HomeStatement';
import HomeNarrativeHub from './HomeNarrativeHub';
import { InstagramGallery } from './InstagramGallery';

export default function HomePage() {
  return (
    <Box m='0' p='0' w='full'>
      <HomeHero />
      <HomeStatement />
      <HomeNarrativeHub />
      <InstagramGallery />
    </Box>
  );
}
