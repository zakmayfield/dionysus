import { Box, Flex } from '@chakra-ui/react';

/*
    Layout

    Mobile:
    img
    cta
    img
    cta

    Desktop:
    img cta
    cta img
*/

export default function NarrativeHub() {
  return (
    <Flex flexFlow='column'>
      <Flex
        flexFlow={{ base: 'column', md: 'row' }}
        w='full'
        minH={{ base: '100vh', md: 'sm' }}
      >
        <Box flex='1' bg='red.300'>
          img 1
        </Box>
        <Box flex='1' bg='purple.300'>
          cta a
        </Box>
      </Flex>

      <Flex
        flexFlow={{ base: 'column', md: 'row-reverse' }}
        w='full'
        minH={{ base: '100vh', md: 'sm' }}
      >
        <Box flex='1' bg='blue.300'>
          img 2
        </Box>
        <Box flex='1' bg='orange.300'>
          cta c
        </Box>
      </Flex>
    </Flex>
  );
}
