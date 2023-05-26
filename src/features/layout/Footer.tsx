import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { SocialMediaLinks } from './SocialMediaLinks';
import logo from '~shared/assets/chasers-juice-logo.png';
import { FadeInBox } from '@/shared/components';
import { chasersJuice } from '@/shared/constants';
import { formatPhoneNumber } from '@/shared/utils';

export default function Footer() {
  return (
    <Box as='footer' bgColor='tertiary.50' px='10' pb='10'>
      <Grid
        templateColumns={{ md: 'repeat(2, 1fr)' }}
        placeItems='center'
        textAlign='center'
        pt={{ md: '0', base: '8' }}
      >
        <GridItem
          lineHeight='5'
          letterSpacing='.5'
          px='16'
          py={{ md: '16', base: '6' }}
        >
          <FadeInBox h='100'>
            <Heading
              as='h3'
              pb='5'
              fontSize='medium'
              textTransform='uppercase'
              w='full'
            >
              Contact Us
            </Heading>

            <Link
              as={NextLink}
              fontSize='sm'
              transition='ease'
              transitionDuration='200ms'
              color='black'
              _hover={{ color: 'primary.600' }}
              href={`tel:${chasersJuice.phone}`}
              display='block'
            >
              {formatPhoneNumber(chasersJuice.phone)}
            </Link>
            <Link
              as={NextLink}
              fontSize='sm'
              transition='ease'
              transitionDuration='200ms'
              color='black'
              _hover={{ color: 'primary.600' }}
              href={`mailto:${chasersJuice.email}`}
              display='block'
            >
              {chasersJuice.email}
            </Link>
          </FadeInBox>
        </GridItem>

        <GridItem
          lineHeight='5'
          letterSpacing='.5'
          px='16'
          py={{ md: '16', base: '6' }}
        >
          <FadeInBox h='100'>
            <Heading as='h3' fontSize='medium' textTransform='uppercase' pb='5'>
              Follow Us
            </Heading>

            <SocialMediaLinks />
          </FadeInBox>
        </GridItem>
      </Grid>

      <Box>
        <Flex
          pt='7'
          position='relative'
          borderTop='1px solid black'
          borderColor='gray.700'
          textAlign='center'
          alignItems='center'
          flexDir={{ md: 'row', base: 'column' }}
        >
          <Box
            position={{ md: 'absolute', base: 'relative' }}
            left={{ md: '0', base: undefined }}
            mb='4'
          >
            <Image src={logo} alt='Chasers Juice logo' width='65' />
          </Box>

          <Text
            w='full'
            fontSize='xs'
            fontWeight='semibold'
            letterSpacing='0.5'
          >
            <Text as='span' textTransform='uppercase'>
              {chasersJuice.legalName}
            </Text>
            &nbsp;{chasersJuice.address.address} {chasersJuice.address.city}
            ,&nbsp;
            {chasersJuice.address.state}, {chasersJuice.address.zip}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
