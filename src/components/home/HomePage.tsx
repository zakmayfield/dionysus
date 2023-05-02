'use client';
import { Box } from '@chakra-ui/react';
import HomeStatement from './HomeStatement';
import HomeNarrativeHub from './HomeNarrativeHub';
import { HomeHero } from './HomeHero';

export default function HomePage() {
  return (
    <Box m='0' p='0' w='full'>
      <HomeHero />
      <HomeStatement />
      <HomeNarrativeHub />
    </Box>
  );
}
