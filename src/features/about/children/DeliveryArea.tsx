'use client';

import { Box } from '@chakra-ui/react';
import { DeliveryInfo, MapContainer } from './delivery';
import { ContentContainer, FadeInBox } from '@/shared/components';

export const DeliveryArea = () => {
  return (
    <Box as='section' mt='6' mb='12'>
      <ContentContainer maxW='container.lg' letterSpacing='wide' px='6'>
        <FadeInBox>
          <DeliveryInfo />
        </FadeInBox>
        <FadeInBox>
          <MapContainer />
        </FadeInBox>
      </ContentContainer>
    </Box>
  );
};
