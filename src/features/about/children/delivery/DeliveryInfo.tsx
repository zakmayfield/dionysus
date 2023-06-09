import { Box, Text, Stack } from '@chakra-ui/react';

export const DeliveryInfo = () => {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing='6'
      justify='left'
      align='center'
      px={{ base: '0', md: '0' }}
      textAlign='left'
      mb='6'
    >
      <Box w={{ base: 'full', md: '60%' }}>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight={{ base: 'taller', md: 'tall' }}
          mb={{ base: '4', md: '6' }}
        >
          Our main areas we deliver are within the downtown core of Toronto and
          the surrounding neighbourhoods.
        </Text>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight={{ base: 'taller', md: 'tall' }}
          mb={{ base: '4', md: '0' }}
        >
          We also deliver within the GTA as well as outside of the GTA and all
          over Canada!
        </Text>
      </Box>

      <Box
        w={{ base: 'full', md: '40%' }}
        borderRadius='lg'
        p='6'
        bg='tertiary.200'
      >
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          lineHeight={{ base: 'taller', md: 'tall' }}
          mb={{ base: '4', md: '0' }}
        >
          Don’t hesitate to contact us if you’re outside of our core delivery
          zone as it is possible for us to make special arrangements to deliver
          to your location.
        </Text>
      </Box>
    </Stack>
  );
};
