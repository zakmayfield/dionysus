'use client';
import { Box } from '@chakra-ui/react';
import Hero from '../../shared/assets/home-hero.jpeg';

export default function HomeHero() {
  return (
    <Box textAlign={`center`}>
      <Box
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize={`cover`}
        bgImage={Hero.src}
        minH={{ base: `67vh`, md: '32vh' }}
      ></Box>
    </Box>
  );
}
