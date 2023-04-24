import { Box, Heading, Text, Icon } from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { ContentContainer } from '@/shared/components';

export default function HomeStatement() {
  return (
    <Box textAlign='center'>
      <ContentContainer
        maxW='container.sm'
        letterSpacing='wide'
        pt='28'
        pb='28'
      >
        <Heading
          as='h2'
          fontSize='4xl'
          display='flex'
          w='full'
          justifyContent='center'
        >
          Freshly Pressed with{' '}
          <Icon as={AiFillHeart} color='primary.600' ml='2' />
        </Heading>
        <Text my='8' fontWeight='light'>
          With specially crafted recipes and a focus on consistency, the Chasers
          Juice team works daily to create delicious, 100% freshly pressed
          juice.
        </Text>
        <Text fontWeight='light' letterSpacing='wider'>
          We hope to see you soon!
        </Text>
      </ContentContainer>
    </Box>
  );
}
