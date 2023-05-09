import { Box, Text, Stack, Flex, StackProps, Heading } from '@chakra-ui/react';
import { LegendItemProps, legendData } from './constants';
import { ContentContainer } from '@/shared/components';
import map from '@/shared/assets/about/delivery-area-map.jpeg';

export const DeliveryArea = () => {
  return (
    <Box as='section'>
      {/* delivery area intro */}
      <ContentContainer maxW='container.lg' letterSpacing='wide' my='16'>
        <DeliveryInfo />
      </ContentContainer>

      {/* map image container */}
      <ContentContainer maxW='container.lg' px={{ base: '2', md: '0' }}>
        <MapContainer />
      </ContentContainer>
    </Box>
  );
};

function DeliveryInfo() {
  return (
    <Box>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '6', md: '10' }}
        justify='center'
        align={{ base: 'center', md: 'flex-start' }}
        px={{ base: '4', md: '0' }}
        textAlign='left'
      >
        <Box w={{ base: 'full', md: '60%' }}>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight={{ base: 'taller', md: 'tall' }}
            mb={{ base: '4', md: '6' }}
          >
            Our main areas we deliver are within the downtown core of Toronto
            and the surrounding neighbourhoods.
          </Text>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight={{ base: 'taller', md: 'tall' }}
            mb={{ base: '4', md: '0' }}
          >
            We also deliver within the GTA as well as outside of the GTA and all
            over Canada!
          </Text>
        </Box>

        <Box
          w={{ base: 'full', md: '40%' }}
          borderRadius='lg'
          p='8'
          bg='tertiary.200'
        >
          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            lineHeight={{ base: 'taller', md: 'tall' }}
            mb={{ base: '4', md: '0' }}
          >
            Don’t hesitate to contact us if you’re outside of our core delivery
            zone as it is possible for us to make special arrangements to
            deliver to your location.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

function MapContainer() {
  return (
    <Flex
      h={{ md: '52vh', base: '80vh' }}
      minH='40vh'
      justifyContent='center'
      alignItems='center'
      flexFlow='column'
    >
      {/* map bg image */}
      <Box
        flex='10'
        bgImage={map.src}
        bgPosition={{ base: 'center', md: 'center bottom 5%' }}
        bgRepeat='no-repeat'
        bgSize='cover'
        w='full'
      />
      <Legend />
    </Flex>
  );
}

function Legend({ ...props }: StackProps) {
  return (
    <Stack
      w='full'
      textAlign='left'
      flex='1'
      justify='center'
      my='10'
      px='5'
      {...props}
    >
      <Heading
        as='h2'
        fontWeight='light'
        letterSpacing='wide'
        fontSize='xl'
        mb='8'
        textAlign={{ md: 'left', base: 'left' }}
      >
        Delivery Legend
      </Heading>

      <Flex
        w='full'
        flexFlow={{ md: 'row', base: 'column' }}
        justifyContent='space-around'
        alignItems='start'
        fontSize={{ md: 'sm', base: '' }}
      >
        {legendData.map((item) => (
          <LegendItem
            key={item.title}
            color={item.color}
            content={item.content}
          />
        ))}
      </Flex>
    </Stack>
  );
}

function LegendItem({ color, content }: LegendItemProps) {
  const heading = content.split(':')[0];
  const body = content.split(':')[1];
  return (
    <Flex
      justify='left'
      align='start'
      gap={{ md: '6', base: '8' }}
      mb={{ md: '0', base: '3' }}
      w='full'
    >
      {/* Legend color marker */}
      <Box
        w={{ md: '50px', base: '35px' }}
        maxW={{ md: '50px', base: '35px' }}
        h={{ md: '50px', base: '35px' }}
        borderRadius='full'
        bg={color}
        flex='1'
        mt='2px'
        boxShadow='7px 7px 20px 0 rgba(0,0,0, 0.4)'
      />
      <Stack flex='2'>
        <Text fontWeight='' letterSpacing='wider' fontSize={{ md: 'lg' }}>
          {heading}
        </Text>{' '}
        <Text maxW='sm'> {body}</Text>
      </Stack>
    </Flex>
  );
}
