import { Box, Text, Stack, Flex } from '@chakra-ui/react';
import { ContentContainer } from '@/shared/components';
import map from '@/shared/assets/about/delivery-area-map.jpeg';

export const DeliveryArea = () => {
  return (
    <Box as='section'>
      {/* delivery area intro */}
      <ContentContainer maxW='container.lg' letterSpacing='wide' my='16'>
        <DeliveryInfo />
      </ContentContainer>

      {/* map image container */}
      <ContentContainer maxW='container.lg'>
        <MapContainer />
      </ContentContainer>
    </Box>
  );
};

function DeliveryInfo() {
  return (
    <Box>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '6', md: '10' }}
        justify='center'
        align={{ base: 'center', md: 'flex-start' }}
        px={{ base: '4', md: '0' }}
        textAlign='left'
      >
        <Box w={{ base: 'full', md: '60%' }}>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight={{ base: 'taller', md: 'tall' }}
            mb={{ base: '4', md: '6' }}
          >
            Our main areas we deliver are within the downtown core of Toronto
            and the surrounding neighbourhoods.
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
          p='8'
          bg='tertiary.200'
        >
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            lineHeight={{ base: 'taller', md: 'tall' }}
            mb={{ base: '4', md: '0' }}
          >
            Don’t hesitate to contact us if you’re outside of our core delivery
            zone as it is possible for us to make special arrangements to
            deliver to your location.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

function MapContainer() {
  return (
    <Flex
      minH='70vh'
      justifyContent='center'
      alignItems='center'
      flexFlow='column'
    >
      <Box
        flex='6'
        bgImage={map.src}
        bgPosition={{ base: 'center', md: 'center' }}
        bgRepeat='no-repeat'
        bgSize='cover'
        w='full'
      />
      <Flex flex='1' justifyContent='center' alignItems='center'>
        Legend
      </Flex>
    </Flex>
  );
}
