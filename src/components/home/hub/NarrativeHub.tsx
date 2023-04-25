import { Box, Flex } from '@chakra-ui/react';
import HubContentTile from './HubContentTile';
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
    <Flex flexFlow='column'>
      {/* this could be it's own component, maybe HubRow */}
      <Flex
        flexFlow={{ base: 'column', md: 'row' }}
        w='full'
        minH={{ base: '50vh' }}
      >
        <Box
          bgImage={lemonade.src}
          flex='1'
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='cover'
        />
        <Flex flex='1' justifyContent='center' alignItems='center'>
          <HubContentTile
            title='Hello there'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas quod voluptas temporibus facilis dolorem veniam alias!'
          />
        </Flex>
      </Flex>

      <Flex flexFlow={{ base: 'column', md: 'row-reverse' }} w='full' minH='sm'>
        <Box
          bgImage={pom.src}
          flex='1'
          bgPosition='center'
          bgRepeat='no-repeat'
          bgSize='cover'
        />
        <Box flex='1' justifyContent='center' alignItems='center'>
          <HubContentTile
            title='Hello there'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quas quod voluptas temporibus facilis dolorem veniam alias!'
          />
        </Box>
      </Flex>
    </Flex>
  );
}
