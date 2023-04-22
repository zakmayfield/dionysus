import { Box, Heading } from '@chakra-ui/react';
import NarrativeHub from './hub/NarrativeHub';
import { LgContentContainer } from '@/shared/components';

export default function HomeNarrativeHub() {
  return (
    <Box as='section'>
      <LgContentContainer>
        <Heading as='h2' textAlign='center'>
          Who We Are
        </Heading>

        <NarrativeHub />
      </LgContentContainer>
    </Box>
  );
}
