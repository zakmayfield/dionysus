import { Box, Container, Heading, Text } from '@chakra-ui/react';

export default function HomeStatement() {
  return (
    <Box textAlign='center'>
      <Container
        maxW='container.sm'
        mx='auto'
        p='0'
        letterSpacing='wide'
        pt='28'
        pb='28'
      >
        <Heading as='h2' fontSize='4xl'>
          Freshly Pressed with ♥
        </Heading>
        <Text mt='8' mb='12' fontWeight='light'>
          With specially crafted recipes and a focus on consistency, the Chasers
          Juice team works daily to create delicious, 100% freshly pressed
          juice. And some extra filler text just to round out this paragraph,
          thank you.
        </Text>
        <Text fontWeight='light' letterSpacing='wider'>
          We hope to see you around
        </Text>
      </Container>
    </Box>
  );
}
