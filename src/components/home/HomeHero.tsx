'use client';
import { Box } from '@chakra-ui/react';

export default function HomeHero() {
  return (
    <Box bg={`yellow.200`} textAlign={`center`}>
      <Box bgImage={`url('../shared/assets/home-hero.jpeg')`}>
        <Box>Hero</Box>
      </Box>
    </Box>
  );
}
