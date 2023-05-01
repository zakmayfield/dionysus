'use client';
import { Box } from '@chakra-ui/react';
import NarrativeHub from './hub/NarrativeHub';
import { ContentContainer } from '@/shared/components';

export default function HomeNarrativeHub() {
  return (
    <Box as='section'>
      <ContentContainer maxW='container.2xl' px='0'>
        <NarrativeHub />
      </ContentContainer>
    </Box>
  );
}
