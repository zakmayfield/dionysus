'use client';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import routes from '@/shared/routes';

export const Links = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      py='5'
      pl={{ base: '5', md: '0' }}
      w='full'
      justify='center'
      gap='5'
    >
      <Text>
        <Link href={routes.about}>Our Story</Link>
      </Text>
      <Text>
        <Link href={routes.philosophy}>Philosophy</Link>
      </Text>
      <Text>
        <Link href={routes.deliveryArea}>Delivery Area</Link>
      </Text>
    </Flex>
  );
};
