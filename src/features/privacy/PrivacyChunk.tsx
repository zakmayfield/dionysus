import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import { PrivacyPolicyChunk } from './types';

export const PrivacyChunk = ({ chunk }: { chunk: PrivacyPolicyChunk }) => {
  const isFirstHeading = chunk.id === 1;

  return (
    <Box maxW='100ch' mx='auto' pb='12'>
      <Heading
        as={isFirstHeading ? 'h2' : 'h3'}
        fontSize={
          isFirstHeading
            ? { md: '5xl', base: '3xl' }
            : { md: '3xl', base: '2xl' }
        }
        mb='6'
        fontWeight='semibold'
      >
        {chunk.title}
      </Heading>

      <Stack>
        {chunk.content.map((paragraph) => (
          <Text
            key={paragraph.id}
            fontSize={{ md: 'xl', base: 'lg' }}
            lineHeight={{ base: '1.5', md: '1.5' }}
          >
            {paragraph.body}
          </Text>
        ))}
      </Stack>
    </Box>
  );
};
