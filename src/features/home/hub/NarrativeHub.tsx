import { Box, Flex } from '@chakra-ui/react';
import HubCtaTile from './HubCtaTile';
import lemonade from '~shared/assets/compressed/lemonade3.jpeg';
import pom from '~shared/assets/compressed/pom1.jpeg';
import routes from '@/shared/routes';
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
            // TODO: update this route to appropriate route when created
            route={routes.about}
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
            title='No Waste'
            content='We are committed to finding new and innovative ways to limit the amount of waste we produce by using as much of each fruit as possible. For the small parts we cannot use, have sourced a company that recycles and renews biological waste into electrical energy.'
            // TODO: update this route to appropriate route when created
            route={routes.about}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
