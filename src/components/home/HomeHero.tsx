'use client';
import { Box } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useRotatingText } from '@/shared/hooks';
import Hero from '~shared/assets/home-hero.jpeg';
import { MotionText } from '@/shared/components';

const buzzWords = [
  'best',
  'freshest',
  'tastiest',
  'purest',
  'smoothest',
  'yummiest',
];

export default function HomeHero() {
  const adjective = useRotatingText(buzzWords);
  return (
    <Box textAlign={`center`}>
      <Box
        bgPosition={{ md: 'center', base: 'bottom 0px left 50%' }}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgImage={Hero.src}
        minH={{ base: `65vh`, md: '50vh' }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        position='relative'
      >
        <Box
          position='absolute'
          left='0'
          top='0'
          h='full'
          w='full'
          overflow='hidden'
          bgColor='white'
          opacity='25%'
        />
        <MotionText
          as='h2'
          style={{ position: 'relative' }}
          textTransform='lowercase'
          fontSize={{ lg: '7xl', sm: '6xl', base: '5xl' }}
          textAlign='center'
        >
          Ontario&apos;s
          <AnimatePresence>
            <MotionText
              as='span'
              key={adjective}
              fontWeight='semibold'
              initial={{ translateY: -50, opacity: 0, position: 'absolute' }}
              animate={{ translateY: 0, opacity: 1, position: 'relative' }}
              exit={{ translateY: 50, opacity: 0, position: 'absolute' }}
              transition={{
                duration: 0.5,
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              display={{ md: 'inline-block', base: 'block' }}
              color='lightAccent.700'
              px='4'
            >
              {adjective}
            </MotionText>
          </AnimatePresence>
          juice
        </MotionText>
      </Box>
    </Box>
  );
}
