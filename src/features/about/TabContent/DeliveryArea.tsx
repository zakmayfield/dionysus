import { Box, Flex, Text } from '@chakra-ui/react';
import { ContentContainer } from '@/shared/components';
import map from '@/shared/assets/about/delivery-area-map.jpeg';

export const DeliveryArea = () => {
  return (
    <Box as='section'>
      {/* delivery area intro */}
      <ContentContainer maxW='container.md' letterSpacing='wide' my='12'>
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
    <>
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        Our main areas we deliver are within the downtown core of Toronto and
        the surrounding neighbourhoods.
      </Text>
      <Text fontSize={{ base: 'md', md: 'lg' }} mt='5' mb='10'>
        We also deliver within the GTA as well as outside of the GTA and all
        over Canada!
      </Text>
      <Text fontSize={{ base: 'md', md: 'lg' }}>
        Don’t hesitate to contact us if you’re outside of our core delivery zone
        as it is possible for us to make special arrangements to deliver to your
        location.
      </Text>
    </>
  );
}

/*
    Layout

    Mobile
    Map - 50vh
    Legend - 20 vh

    Desktop
    Map Legend
    
    or same as mobile, but larger, feels boxy right now
 */

function MapContainer() {
  return (
    <Flex
      minH='60vh'
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
