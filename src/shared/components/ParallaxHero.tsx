import { useScroll, useSpring, useTransform } from 'framer-motion';
import { Box, BoxProps } from '@chakra-ui/react';
import React, { useLayoutEffect, useRef, useState } from 'react';
import { ContentContainer } from './ContentContainer';
import { MotionBox, MotionBoxProps } from './motion-chakra';

type ParallaxHeroProps = React.PropsWithChildren & {
  bgImageSrc: string;
  showOverlay?: boolean;
  overlayColor?: string;
  /** Props to be passed to the image */
  bgImageProps?: Pick<
    MotionBoxProps,
    | 'backgroundPosition'
    | 'backgroundRepeat'
    | 'backgroundSize'
    | 'backgroundAttachment'
    | 'backgroundColor'
  >;
  /** This prop determines where the child element is positioned within the
   * hero
   * */
  childOffsetPosition?: BoxProps['top'];
};

export const ParallaxHero = ({
  bgImageSrc,
  showOverlay = false,
  overlayColor = 'whiteAlpha.300',
  childOffsetPosition = { sm: '-28rem', base: '-96' },
  bgImageProps,
  children,
}: ParallaxHeroProps) => {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const springConfig = {
    stiffness: 20,
    mass: 3,
  };

  useLayoutEffect(() => {
    const onResize = () => {
      if (ref.current) {
        setOffsetTop(ref.current.offsetTop);
      }
    };
    onResize();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

  const y = useSpring(
    useTransform(scrollY, [offsetTop - 500, offsetTop + 500], ['0%', '70%']),
    springConfig
  );

  const height = '65vh';
  const heightUnit = height.match(/[a-z]+/gi)?.join('');
  const heightNumbers = Number(height.match(/\d+/g)?.join(''));

  return (
    <ContentContainer maxW='container.2xl' h={height} overflow='hidden' px='0'>
      <MotionBox
        ref={ref}
        initial={{ y: 0 }}
        style={{ y, scale: 1.15 }}
        py={`${heightNumbers / 2}${heightUnit}`}
        backgroundColor='white'
        backgroundImage={bgImageSrc}
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        position='relative'
        {...bgImageProps}
      >
        {showOverlay && (
          <Box
            position='absolute'
            top='0'
            left='0'
            bg={overlayColor}
            w='full'
            h='full'
          />
        )}
      </MotionBox>
      <Box position='relative' zIndex={10}>
        <Box w='full' position='absolute' zIndex={30} top={childOffsetPosition}>
          {children}
        </Box>
      </Box>
    </ContentContainer>
  );
};
