import { Box, Heading, Text, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ContentContainer } from '@/shared/components';
import routes from '@/shared/routes';

export default function HomeStatement() {
  return (
    <Box textAlign='center'>
      <ContentContainer
        maxW='container.sm'
        letterSpacing='wide'
        py={{ md: '28', base: '12' }}
      >
        <Heading as='h2' fontSize='4xl' w='full' fontWeight='semibold'>
          Freshly Pressed with&nbsp;
          <Text as='span' color='primary.600' aria-label='Heart icon - love'>
            ♡
          </Text>
        </Heading>
        <Text my='8' fontWeight='light'>
          With specially crafted recipes and a focus on consistency, the Chasers
          Juice team works hard to create delicious, 100% freshly pressed juice.
          There is nothing more delicious than juice that is juiced and
          delivered on the same day!
        </Text>
        <Button as={NextLink} variant='outline' href={routes.about}>
          Learn More
        </Button>
      </ContentContainer>
    </Box>
  );
}
