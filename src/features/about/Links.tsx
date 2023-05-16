'use client';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Links = () => {
  return (
    <Flex py='5' w='full' justify='center' gap='5'>
      <Text>
        <Link href='/about/our-story'>Our Story</Link>
      </Text>
      <Text>
        <Link href='/about/philosophy'>Philosophy</Link>
      </Text>
      <Text>
        <Link href='/about/wholesale'>Wholesale</Link>
      </Text>
      <Text>
        <Link href='/about/delivery-area'>Delivery Area</Link>
      </Text>
    </Flex>
  );
};
