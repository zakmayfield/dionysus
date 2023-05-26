'use client'; // Error components must be Client components

import { useEffect } from 'react';
import { Button, Flex, Heading, Link, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import FeaturedJuice from '@/shared/assets/error/green-juice.png';
import { chasersJuice } from '@/shared/constants';

export default function Error({ error }: { error: Error }) {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minH='80vh'
      overflowX='hidden'
    >
      <Flex flexFlow='column' alignItems='center' px={{ md: '12' }}>
        <Heading as='h2' fontWeight='light' mb='2' textAlign='center'>
          Something went wrong!
        </Heading>
        <Text mb='8' textAlign='center' fontSize='xs'>
          If the problem persists, send us an email at:&nbsp;
          <Link href={`mailto:${chasersJuice.email}`}>
            {chasersJuice.email}
          </Link>
        </Text>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => router.replace(pathname)
          }
        >
          Try again
        </Button>
      </Flex>
      <NextImage
        src={FeaturedJuice.src}
        alt='Bottle of chasers juice apple-celery-spinach-kale-cucumber juice'
        width={FeaturedJuice.width / 1.5}
        height={FeaturedJuice.height / 1.5}
        quality={100}
        style={{
          filter: 'drop-shadow(30px 15px 4px rgba(0, 0, 0, 0.15))',
          transform: 'rotate(10deg)',
        }}
      />
    </Flex>
  );
}
