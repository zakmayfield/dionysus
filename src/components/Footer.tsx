import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import logo from '../shared/assets/chasers-juice-logo.png';

export default function Footer() {
  return (
    <Box as='footer' bgColor='gray.200' px={10} pb={10}>
      <Grid
        templateColumns='repeat(2, 1fr)'
        placeItems='center'
        textAlign='center'
      >
        <GridItem lineHeight={5} letterSpacing={0.5} p={16}>
          <Box h={100}>
            <Heading
              as='h3'
              pb={5}
              fontSize='medium'
              textTransform='uppercase'
              w='full'
            >
              Contact Us
            </Heading>

            <Text fontSize='sm' fontWeight='semi-bold'>
              416-259-1557
            </Text>
            <Text fontSize='sm' fontWeight='semi-bold'>
              orders@chasersjuice.com
            </Text>
          </Box>
        </GridItem>

        <GridItem lineHeight={5} letterSpacing={0.5} p={16}>
          <Box h={100}>
            <Heading as='h3' fontSize='medium' textTransform='uppercase' pb={5}>
              Follow Us
            </Heading>

            <Flex justifyContent='space-between'>
              <Link href='.'>
                <Box border='1px solid black' display='inline-block' p={2.5}>
                  <FaFacebookF />
                </Box>
              </Link>
              <Link href='.'>
                <Box border='1px solid black' display='inline-block' p={2.5}>
                  <FaInstagram />
                </Box>
              </Link>
            </Flex>
          </Box>
        </GridItem>
      </Grid>

      <Box>
        <Flex
          pt={7}
          position='relative'
          borderTop='1px solid black'
          borderColor='gray.700'
          textAlign='center'
          alignItems='center'
        >
          <Box position='absolute' left='0'>
            <Image src={logo} alt='Chasers Juice logo' width={65} />
          </Box>

          <Text w='full' fontSize='xs' letterSpacing={0.5}>
            CHASERS FRESH JUICE INC. 218 North Queen St. Etobicoke, ON M9C 4Y1
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
