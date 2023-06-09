import { Box, Flex } from '@chakra-ui/react';
import { Legend } from './Legend';
import map from '@/shared/assets/about/delivery-area-map.jpeg';

// TODO: refactor background image to Next Image
export const MapContainer = () => {
  return (
    <Flex
      minH='40vh'
      justifyContent='center'
      alignItems='center'
      flexFlow='column'
    >
      <Box
        bgImage={map.src}
        pb='50vh'
        bgPosition={{ base: 'left -22vh bottom', md: 'center bottom 5%' }}
        bgRepeat='no-repeat'
        bgSize='cover'
        h='full'
        w='full'
      />
      <Legend />
    </Flex>
  );
};
