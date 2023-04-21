'use client';
import { Box } from '@chakra-ui/react';
import HomeHero from './HomeHero';
import Showcase from '../showcase/Showcase';
import { ContentContainer } from '@/shared/components';

export default function HomeContainer() {
  return (
    <Box bg={`green.200`} m='0' p='0' w='full'>
      <HomeHero />
      <ContentContainer>
        <Showcase />
      </ContentContainer>
    </Box>
  );
}
