import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import NextImage from 'next/image';
import { HeroAnimatedText } from './HeroAnimatedText';
import FeaturedJuice from '@/shared/assets/home/centre-juice.png';
import FeaturedFruit from '@/shared/assets/home/fruit-splash.png';

export const HomeHero = () => {
  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');
  const [isLargerThanMobile] = useMediaQuery('(min-width: 480px)');
  return (
    <Box
      w='full'
      minH={{ md: '1000px', sm: '700px', base: '440px' }}
      position='relative'
      overflow='hidden'
      bg='white'
    >
      <Flex
        position='absolute'
        w='full'
        h='auto'
        zIndex={10}
        justifyContent='center'
        top={{ md: 0, base: '-2vh' }}
      >
        <Heading
          as='h3'
          textTransform='uppercase'
          fontFamily='Londrina Outline'
          letterSpacing='widest'
          fontSize={{ lg: '320px', sm: '200px', base: '150px' }}
          lineHeight='none'
          fontWeight='light'
          color={{ md: 'blackAlpha.800', base: 'blacks.600' }}
        >
          Fresh
        </Heading>
      </Flex>
      {isLargerThanTablet && (
        <Flex
          position='absolute'
          w='full'
          h='full'
          zIndex={30}
          justifyContent='center'
          alignItems='center'
        >
          <Box>
            <NextImage
              src={FeaturedJuice.src}
              alt='Bottle of orange juice'
              width={FeaturedJuice.width / (isLargerThanTablet ? 1.5 : 2)}
              height={FeaturedJuice.height / (isLargerThanTablet ? 1.5 : 2)}
              quality={100}
              style={{
                filter: 'drop-shadow(30px 15px 4px rgba(0, 0, 0, 0.08))',
              }}
            />
          </Box>
        </Flex>
      )}
      <Flex
        w={{ md: '50%', base: 'full' }}
        h='full'
        position='absolute'
        top='0'
        left='0'
        justifyContent={{ md: 'center', base: 'flex-start' }}
        alignItems='center'
        zIndex={30}
      >
        <Box
          position='relative'
          maxW='prose'
          pl='8'
          pr={{ xl: '8', md: '20', base: '8' }}
        >
          <HeroAnimatedText />
          <Box
            maxW={{ sm: '50ch', base: '20ch' }}
            fontSize={{ lg: 'md', base: 'sm' }}
            mt='4'
          >
            <Text>
              Founded in Toronto over 20 years ago, we know how to do fresh
              juice.
            </Text>
            {isLargerThanMobile && (
              <Text mt='2'>
                <Text as='strong' fontWeight='semibold'>
                  Fresh is best!&nbsp;
                </Text>
                Our juices are made from all-natural ingredients with no sugars
                or preservatives added. We rely on the natural flavours of the
                fruits, vegetables and herbs we use in our products.
              </Text>
            )}
          </Box>
        </Box>
      </Flex>
      <Flex
        bg={{ md: 'rgb(248,206,88)', base: 'transparent' }}
        w={{ md: '50%', base: '70%' }}
        h='full'
        position='absolute'
        top='0'
        right={{ md: '0', base: '-14vw' }}
        justifyContent={{ md: 'center', base: 'flex-end' }}
        alignItems='center'
      >
        <Box position='relative' zIndex={20}>
          {isLargerThanTablet ? (
            <NextImage
              src={FeaturedFruit.src}
              alt='Bottle of orange juice'
              width={FeaturedFruit.width / 1.5}
              height={FeaturedFruit.height / 1.5}
              quality={100}
            />
          ) : (
            <Box
              position='relative'
              top='0'
              right='16'
              zIndex={2}
              transform='rotate(10deg)'
            >
              <NextImage
                src={FeaturedJuice.src}
                alt='Bottle of orange juice'
                width={FeaturedJuice.width / 2.5}
                height={FeaturedJuice.height / 2.5}
                quality={100}
                style={{
                  filter: 'drop-shadow(30px 15px 4px rgba(0, 0, 0, 0.08))',
                }}
              />
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};
