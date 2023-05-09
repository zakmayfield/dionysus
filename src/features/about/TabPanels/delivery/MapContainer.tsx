import { Box, Flex } from '@chakra-ui/react';
import { Legend } from './Legend';
import map from '@/shared/assets/about/delivery-area-map.jpeg';

export const MapContainer = () => {
  return (
    <Flex
      h={{ md: '53vh', base: '80vh' }}
      minH='40vh'
      justifyContent='center'
      alignItems='center'
      flexFlow='column'
    >
      {/* map bg image */}
      <Box
        flex='10'
        bgImage={map.src}
        bgPosition={{ base: 'center', md: 'center bottom 5%' }}
        bgRepeat='no-repeat'
        bgSize='cover'
        w='full'
      />
      <Legend />
    </Flex>
  );
};
