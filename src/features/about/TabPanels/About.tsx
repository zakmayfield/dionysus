import { Box, Stack, Text, Heading, BoxProps } from '@chakra-ui/react';
import Image from 'next/image';
import pom from '@/shared/assets/about/pom.jpeg';
import spinach from '@/shared/assets/about/spinach.jpeg';

export const About = () => {
  return (
    <Stack spacing={{ base: '8', md: 0 }} my='20'>
      <Stack
        as='section'
        direction={{ base: 'column', md: 'row' }}
        // TODO: add maxH for mobile, scrollable text with proper indicators "scroll", or arrows for example
        maxH={{ md: '80vh' }}
        spacing='0'
        w='100%'
      >
        <FullHeightImage />
        <AboutContent maxW={{ base: '100%', md: '50%' }} overflowY='auto' />
      </Stack>

      <Stack
        as='section'
        direction={{ base: 'column', md: 'row-reverse' }}
        minH={{ md: '80vh' }}
        spacing='0'
        w='100%'
      >
        <FullHeightImage2 />
        <AboutContent2 maxW={{ base: '100%', md: '50%' }} />
      </Stack>
    </Stack>
  );
};

// TODO: Refactor all of this into proper components
type FullHeightImageProps = BoxProps;

function FullHeightImage({ ...props }: FullHeightImageProps) {
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

type AboutContentProps = BoxProps;

function AboutContent({ ...props }: AboutContentProps) {
  return (
    <Box
      {...props}
      textAlign='left'
      p={{ base: '2', md: '8' }}
      pt={{ base: '8' }}
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
type FullHeightImageProps2 = BoxProps;

function FullHeightImage2({ ...props }: FullHeightImageProps2) {
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

type AboutContentProps2 = BoxProps;

function AboutContent2({ ...props }: AboutContentProps2) {
  return (
    <Box
      {...props}
      textAlign='left'
      p={{ base: '2', md: '8' }}
      pt={{ base: '10', md: '14' }}
    >
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
