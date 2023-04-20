'use client';
import { Container, Box } from '@chakra-ui/react';
import HomeHero from './HomeHero';

export default function HomeContainer() {
  return (
    <Box border='2px solid blue' m='0' p='0' w='full'>
      <HomeHero />
    </Box>
  );
}
