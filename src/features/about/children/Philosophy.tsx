'use client';

import { Box, Heading, Stack, Text, BoxProps } from '@chakra-ui/react';
import { FullHeightImage } from '@/shared/components';
import lcp from '@/shared/assets/about/lcp.jpeg';

export const Philosophy = () => {
  return (
    <Stack
      as='section'
      direction={{ base: 'column', lg: 'row-reverse' }}
      minH={{ md: '100vh' }}
      w='100%'
      spacing={{ base: '12', lg: '0' }}
      mt='6'
      mb='12'
      px={{ base: '6', md: '0' }}
    >
      <PhilosophyContent maxW={{ base: '100%', lg: '50%' }} />
      <FullHeightImage img={lcp} altText='lycee cactus pear juice' />
    </Stack>
  );
};

function PhilosophyContent({ ...props }: BoxProps) {
  return (
    <Box {...props} textAlign='left' pl={{ lg: '6' }} pt={{ lg: '6' }}>
      <Heading as='h2' fontWeight='light'>
        Our Philosophy
      </Heading>
      <Heading as='h3' fontWeight='hairline' fontSize='lg' mt='5' mb='10'>
        At Chasers Fresh Juice, our philosophy is fresh is best!
      </Heading>

      <Stack spacing='8'>
        <Text lineHeight='taller'>
          Our juices are made from all-natural, fresh ingredients with no sugars
          or preservatives added. Because fresh is best, we begin each day at
          7am creating all of our juice orders so we can deliver them to you
          that very same day. Our goal is to provide our clients and the public
          with fresh, healthy, unpasteurized and raw juices made of all-natural,
          real ingredients. We rely on the natural flavours of the fruits,
          vegetables, herbs and in-house made syrups we use in our products. We
          do not add any additional flavour or colour enhancers because we think
          the natural flavour of our juices speak for itself, they don’t need
          anything extra. Chasers Juice is a fresh juice experience!
        </Text>
        <Text lineHeight='taller'>
          Chasers Fresh Juice is also committed to finding new and innovative
          ways to limit the amount of waste produced every day. All of our
          biological waste from the fruits and vegetables we juice is not
          disposed of or composted but instead we have sourced a company that
          recycles and renews the biological waste into electrical energy. We
          also encourage our customers to allow us to use our coloured plastic
          bottle caps rather then black caps. This is because black coloured
          plastic is unable to be recycled in the city of Toronto, so 90% of the
          caps we use are coloured so they can be properly recycled.
        </Text>
      </Stack>
    </Box>
  );
}
