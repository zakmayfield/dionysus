import { Box } from '@chakra-ui/react';
import { DeliveryInfo, MapContainer } from './delivery';
import { ContentContainer } from '@/shared/components';

export const DeliveryArea = () => {
  return (
    <Box as='section'>
      {/* delivery area intro */}
      <ContentContainer maxW='container.lg' letterSpacing='wide' my='20'>
        <DeliveryInfo />
      </ContentContainer>

      {/* map & legend container */}
      <ContentContainer maxW='container.lg' px={{ base: '2', md: '0' }}>
        <MapContainer />
      </ContentContainer>
    </Box>
  );
};
