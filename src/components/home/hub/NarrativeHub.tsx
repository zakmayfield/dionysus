import { Box, Flex } from '@chakra-ui/react';
import HubCtaTile from './HubCtaTile';
import lemonade from '~shared/assets/compressed/lemonade1.jpeg';
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
            title='Example Title'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas quod voluptas temporibus facilis dolorem veniam alias!'
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
            title='Example Title'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas quod voluptas temporibus facilis dolorem veniam alias!'
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
