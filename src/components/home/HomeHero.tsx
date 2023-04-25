'use client';
import { Box } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useRotatingText } from '@/shared/hooks';
import Hero from '~shared/assets/home-hero.jpg';
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
      {/* minH 80vh doesn't cover enough of the screen, i'm seeing the very tip of the next section's content */}
      <Box
        bgPosition={{ md: 'bottom 58% left 50%', base: 'bottom 45% left 50%' }}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgImage={Hero.src}
        minH={{ base: `65vh`, md: '80vh' }}
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
          opacity='30%'
        />
        <MotionText
          as='h2'
          style={{ position: 'relative' }}
          textTransform='lowercase'
          fontWeight='semibold'
          fontSize={{ lg: '7xl', sm: '6xl', base: '5xl' }}
          textAlign='center'
        >
          Ontario&apos;s
          <AnimatePresence>
            <MotionText
              as='span'
              key={adjective}
              fontWeight='bold'
              fontStyle='italic'
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
              pl='4'
              pr='7'
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
