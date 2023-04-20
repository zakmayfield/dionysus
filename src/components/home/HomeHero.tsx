'use client';
import { Box } from '@chakra-ui/react';
import Hero from '../../shared/assets/home-hero.jpeg';

export default function HomeHero() {
  return (
    <Box textAlign={`center`}>
      <Box
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize={``}
        bgImage={Hero.src}
        minH={`67vh`}
      ></Box>
    </Box>
  );
}
