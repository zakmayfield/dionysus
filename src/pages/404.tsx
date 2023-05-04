import {
  Box,
  Heading,
  Button,
  Divider,
  Container,
  Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import routes from '@/shared/routes';
import { NextPageWithLayout } from '@/types';

const PageNotFound: NextPageWithLayout = () => {
  return (
    <Box bg='primary.100' pt={10} display='flex' alignItems='flex-start'>
      <Container
        as={Flex}
        maxWidth='container.2xl'
        flexDirection='column'
        minHeight='100vh'
        pt={20}
      >
        <Flex
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          justifyContent='space-between'
          alignItems={{ base: 'flex-start', md: 'center' }}
        >
          <div>
            <Heading as='h1' fontSize='2xl' lineHeight={1.4}>
              Error 404
            </Heading>
            <Divider
              color='gray.100'
              width={4}
              borderBottomWidth='2px'
              my={6}
            />
            <Heading as='h2' size='lg' mb={6}>
              Oops, something went wrong.
            </Heading>
            <Button
              as={NextLink}
              href={routes.home}
              maxW={{ base: 40, sm: 60 }}
              textDecoration='none'
            >
              Back to Home
            </Button>
          </div>
          {/* TODO: Add Chasers Logo */}
          {/* <Logo width={350} height='auto' colorMode={colorMode} /> */}
        </Flex>
      </Container>
    </Box>
  );
};

PageNotFound.isProtectedPage = false;

export default PageNotFound;
