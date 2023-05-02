import { Text } from '@chakra-ui/react';
import React, { useLayoutEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MotionText } from '@/shared/components';
import { useRotatingText } from '@/shared/hooks';

export const HeroAnimatedText = () => {
  const buzzWords = [
    'best',
    'freshest',
    'tastiest',
    'purest',
    'smoothest',
    'yummiest',
  ];
  const text = useRotatingText(buzzWords);
  const [adjective, setAdjective] = useState<string | null>(null);
  useLayoutEffect(() => {
    setAdjective(text);
  }, [text]);
  return (
    <AnimatePresence>
      <MotionText
        as='h1'
        style={{ position: 'relative' }}
        fontWeight='semibold'
        fontSize={{ lg: '4xl', sm: '3xl', base: '2xl' }}
      >
        Ontario&apos;s&nbsp;
        {adjective ? (
          <MotionText
            as='span'
            key={adjective}
            fontWeight='bold'
            initial={{
              translateY: -50,
              opacity: 0,
              position: 'absolute',
            }}
            animate={{ translateY: 0, opacity: 1, position: 'relative' }}
            exit={{ translateY: 50, opacity: 0, position: 'absolute' }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            display={{ sm: 'inline-block', base: 'block' }}
            color='orange.400'
          >
            {adjective}&nbsp;
          </MotionText>
        ) : (
          /** As the adjective is loading, display "freshest": */
          <Text
            as='span'
            fontWeight='bold'
            color='orange.400'
            display={{ sm: 'inline-block', base: 'block' }}
          >
            freshest&nbsp;
          </Text>
        )}
        juice
      </MotionText>
    </AnimatePresence>
  );
};
