import { Heading, Box, Flex } from '@chakra-ui/react';

type TabData = {
  currentTabData: {
    id: number;
    tabName: string;
    param: string;
    img: string;
  };
};

export const TabHero = ({ currentTabData }: TabData) => {
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
      bgImage={currentTabData?.img}
    >
      {/* consider changing hero bg images to Next Images, for optimzation purposes? ** sidenote, on first render of the images there is a flash when the image is being rendered */}
      <Box textTransform='capitalize' color='white' zIndex='2'>
        <Heading
          as='h1'
          fontWeight='light'
          letterSpacing='widest'
          fontSize='5xl'
        >
          {currentTabData.tabName}
        </Heading>
      </Box>

      {/* Overylay */}
      <Box position='absolute' inset='0' bg='rgba(0, 0, 0, 0.3)' />
    </Flex>
  );
};
