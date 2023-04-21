'use client';
import { Box } from '@chakra-ui/react';
import Hero from '../../shared/assets/home-hero.jpeg';

export default function HomeHero() {
  return (
    <Box textAlign={`center`}>
      <Box
        bgPosition={{ md: 'center', base: 'bottom 0px left 50%' }}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgImage={Hero.src}
        minH={{ base: `67vh`, md: '32vh' }}
      ></Box>
    </Box>
  );
}
