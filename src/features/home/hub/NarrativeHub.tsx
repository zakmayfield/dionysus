import { Box, Flex } from '@chakra-ui/react';
import HubCtaTile from './HubCtaTile';
import lemonade from '~shared/assets/compressed/lemonade3.jpeg';
import pom from '~shared/assets/compressed/pom1.jpeg';
/*
    Layout

    Mobile:
    img
    cta
    img
    cta

    Desktop:
    img cta
    cta img
*/

export default function NarrativeHub() {
  return (
    <Flex flexFlow='column' letterSpacing='wide'>
      {/* this could be it's own component, maybe HubRow */}
      <Flex
        flexFlow={{ base: 'column', md: 'row' }}
        w='full'
        minH='sm'
        bg='tertiary.400'
      >
        <Box
          bgImage={lemonade.src}
          flex='1'
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='cover'
          minH={{ base: '50vh', md: '' }}
        />

        <Flex flex='1' alignItems='center'>
          <HubCtaTile
            title='Juiced then Delivered'
            content='We begin each day at 7am creating all of our juice orders so we can deliver to our Toronto customers that very same day. Check our delivery map to see if we deliver to your area.'
          />
        </Flex>
      </Flex>

      <Flex
        flexFlow={{ base: 'column', md: 'row-reverse' }}
        w='full'
        minH='sm'
        bg='tertiary.300'
      >
        <Box
          bgImage={pom.src}
          flex='1'
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='cover'
          minH={{ base: '50vh', md: '' }}
        />

        <Flex flex='1' alignItems='center'>
          <HubCtaTile
            title='Fresh is Best'
            content='Our juices are made from all-natural, fresh ingredients with no sugars or preservatives added. Because fresh is best, we rely on the natural flavours of the fruits, vegetables and herbs we use in our products.'
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
