import { Box, Heading } from '@chakra-ui/react';
import NarrativeHub from './hub/NarrativeHub';
import { ContentContainer } from '@/shared/components';

export default function HomeNarrativeHub() {
  return (
    <Box as='section'>
      <ContentContainer maxW='container.2xl' px='0'>
        <Heading as='h2' textAlign='center'>
          Who We Are
        </Heading>

        <NarrativeHub />
      </ContentContainer>
    </Box>
  );
}
