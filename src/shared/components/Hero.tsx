import { Heading, Box, Flex } from '@chakra-ui/react';

type HeroProps = {
  title: string;
  imgSrc: string;
};

export const Hero = ({ title, imgSrc }: HeroProps) => {
  return (
    <Flex
      w='full'
      minH={{ base: '300px' }}
      position='relative'
      justifyContent='center'
      alignItems='center'
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      bgImage={imgSrc}
    >
      {/* consider changing hero bg images to Next Images, for optimzation purposes? ** sidenote, on first render of the images there is a flash when the image is being rendered */}
      <Box textTransform='capitalize' color='white' zIndex='2'>
        <Heading
          as='h1'
          fontWeight='light'
          letterSpacing='widest'
          fontSize='5xl'
        >
          {title}
        </Heading>
      </Box>

      {/* Overylay */}
      <Box position='absolute' inset='0' bg='rgba(0, 0, 0, 0.3)' />
    </Flex>
  );
};