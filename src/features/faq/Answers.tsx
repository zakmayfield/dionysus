import { Box, Link, List, ListItem, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import routes from '@/shared/routes';

const Faq1A = () => {
  return (
    <VStack spacing='4'>
      <Text>
        Chasers Juice is a wholesale juice operation located in Toronto,
        Ontario. We serve over 350 restaurants, bars, hotels, clubs, venues,
        events and bakeries – chances are you’ve already had some!
      </Text>
      <Text>
        <Text as='strong'>For businesses:&nbsp;</Text>
        <Link as={NextLink} href={routes.contact}>
          &nbsp;Contact us here
        </Link>
        &nbsp; to set up an account with us to begin ordering. Check with
        our&nbsp;
        {/* TODO: Adjust this route to the delivery area route when we have it */}
        <Link as={NextLink} href={routes.about}>
          delivery area
        </Link>
        &nbsp; to ensure we can deliver to you. We also offer pick-ups at our
        Etobicoke location if you would prefer that.
      </Text>
      <Text>
        <Text as='strong'>For the public:&nbsp;</Text>
        &nbsp;We offer pick-ups at our Etobicoke location after 12pm every day
        for the public.&nbsp;
        <Link as={NextLink} href={routes.contact}>
          Contact us here
        </Link>
        &nbsp; to set up an account with us to begin ordering. Because we are a
        wholesale operation, we do not deliver to residential areas.
      </Text>
    </VStack>
  );
};
const Faq1B = () => {
  return (
    <Text>
      Of course it’s 100% FREE! Just contact us through our form&nbsp;
      <Link as={NextLink} href={routes.contact}>
        here
      </Link>
      &nbsp;and we will send you a quick and easy form to fill out so you can
      begin ordering ASAP!
    </Text>
  );
};
const Faq1C = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>We are open and delivering Monday – Friday.</Text>
      <Box>
        <Text>The office hours are:</Text>
        <List>
          <ListItem>Monday: 8am – 3pm</ListItem>
          <ListItem>Tuesday: 8am – 3pm</ListItem>
          <ListItem>Wednesday: 8am – 3pm</ListItem>
          <ListItem>Thursday: 8am – 3pm</ListItem>
          <ListItem>Friday: 8am – 3pm</ListItem>
        </List>
      </Box>
      <Text>Our delivery hours are from: 12pm-7pm everyday.</Text>
    </VStack>
  );
};

export const FaqAnswers: Record<string, JSX.Element> = {
  '1A': <Faq1A />,
  '1B': <Faq1B />,
  '1C': <Faq1C />,
};
