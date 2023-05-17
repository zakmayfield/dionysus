'use client';
import { Box, Stack, Text, Heading, BoxProps } from '@chakra-ui/react';
import Image from 'next/image';
import pom from '@/shared/assets/about/pom.jpeg';
import spinach from '@/shared/assets/about/spinach.jpeg';

export const OurStory = () => {
  // need to fix the horizontal scroll
  return (
    <Stack my='6'>
      <Stack
        as='section'
        direction={{ base: 'column', md: 'row-reverse' }}
        minH={{ md: '100vh' }}
        w='100%'
        spacing={{ base: '6', md: '0' }}
      >
        <AboutContent maxW={{ base: '100%', md: '50%' }} />
        <FullHeightImage />
      </Stack>

      <Stack
        as='section'
        direction={{ base: 'column', md: 'row' }}
        minH={{ md: '100vh' }}
        w='100%'
        spacing={{ base: '6', md: '0' }}
      >
        <AboutContent2 maxW={{ base: '100%', md: '50%' }} />
        <FullHeightImage2 />
      </Stack>
    </Stack>
  );
};

// TODO: Refactor all of this into proper components (about/philosophy)

function FullHeightImage({ ...props }: BoxProps) {
  // parent needs a minH set
  return (
    <Box {...props}>
      <Image
        src={pom}
        alt='Chasers Juice pomegranate juice bottle on the beach'
        style={{
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </Box>
  );
}

function AboutContent({ ...props }: BoxProps) {
  return (
    <Box
      {...props}
      textAlign='left'
      py={{ base: '0', md: '8' }}
      px={{ base: '6' }}
    >
      <Heading as='h2' fontWeight='light'>
        Our Story
      </Heading>
      <Heading as='h3' fontWeight='hairline' fontSize='lg' mt='5' mb='10'>
        Founded in Toronto over 20 years ago
      </Heading>

      <Stack spacing='8'>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight={{ base: 'taller', md: 'tall' }}
        >
          Chasers Fresh Juice provides unique, fresh, raw and delicious juices
          to our clientele, located in Toronto, Ontario and all over Canada. Our
          flavourful company started like many others have, in a garage in
          downtown Toronto. The founder and CEO Richard Chase was squeezing and
          juicing all of the ingredients of each juice by hand as he created all
          of our current recipes from scratch. He approached many popular
          restaurants in the downtown core and quickly began supplying
          restaurants with freshly squeezed raw juices. Since then, hundreds of
          restaurants and other businesses have tasted, loved and currently use
          our freshly made products daily. In fact, if you’ve eaten at a
          restaurant in downtown Toronto, you have likely tried our juice
          already!
        </Text>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight={{ base: 'taller', md: 'tall' }}
        >
          For over a decade now, Chasers Juice has provided clients and the
          public with an unparalleled level in quality and flavour in all of our
          raw juices. Juice is more than a delicious drink, it’s a science. Our
          recipes are specially crafted and ingredients meticulously measured in
          order to ensure healthy and tasty mixes, delivered consistently.
          Chasers has grown from an operation based out of the back of a private
          residence to a wholesale operation which currently processes hundreds
          of litres of juice daily! On average, over 350 pounds of both lemons &
          limes are squeezed every day by our production team. It takes a lot of
          fruit to make our fruit juice. In only two litres of Chasers orange
          juice, there are over two dozen oranges!taurant in downtown Toronto,
          you have likely tried our juice already!
        </Text>
      </Stack>
    </Box>
  );
}

function FullHeightImage2({ ...props }: BoxProps) {
  // parent needs a minH set
  return (
    <Box {...props}>
      <Image
        src={spinach}
        alt='Chasers Juice pomegranate juice bottle on the beach'
        style={{
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </Box>
  );
}

function AboutContent2({ ...props }: BoxProps) {
  return (
    <Box {...props} textAlign='left' p={{ base: '2', md: '8' }} pt='6' px='6'>
      <Stack spacing='8'>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight={{ base: 'taller', md: 'tall' }}
        >
          Following specially crafted recipes created in-house by the owner, the
          production team creates each juice ensuring each recipe is followed
          identically, with specific measurements of each ingredients.
          Consistency is king at Chasers Juice, and we pride ourselves on our
          ability to create healthy and flavourful juices and to do it every
          single day. Chasers Juice is comprised of a tightly knit team of
          professionals, all with a keen passion for taste and flavour. Under
          the leadership and guidance of owner, visionary and flavour
          connoisseur Richard Chase, the Chasers production team works each day
          to create delicious, healthy and flavourful blends.
        </Text>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight={{ base: 'taller', md: 'tall' }}
        >
          Once the juices are created for the day, we label and package the
          juice for delivery. Once in transit, the juice arrives at its
          destination promptly in order to ensure all juices are fresh on
          delivery.
        </Text>
      </Stack>
    </Box>
  );
}
