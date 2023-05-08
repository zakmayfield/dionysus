import {
  Box,
  Link,
  List,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
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
const Faq2A = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <OrderedList alignItems='flex-start'>
        <ListItem>
          <Link as={NextLink} href={routes.contact}>
            Contact us
          </Link>
          &nbsp;to set up an account, it will take about 5 minutes.
        </ListItem>
        <ListItem>
          Once you have an account set up with us, you may order by email or by
          phone.
        </ListItem>
        <ListItem>
          The order deadline for same day delivery or pick-up is 7am. Please
          place your order by email or phone anytime before 7am. Anything
          received after that will be delivered the next business day.
        </ListItem>
      </OrderedList>
      <Text>
        If you are looking to order syrups, teas or large quantities of
        garnishes, please give us a minimum of 24hrs+ notice in order to fulfill
        those orders.
      </Text>
      <Text>
        If you are looking for large bulk orders of juice, please feel free to
        inquire about more specific timelines and pricing by email or phone.
      </Text>
      <Text fontWeight='semibold'>
        Please see the next items on how to order by email or by phone:
      </Text>
    </VStack>
  );
};
const Faq2B = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>
        Send us an email anytime at&nbsp;
        <Link href='mailto:orders@chasersjuice.com'>
          orders@chasersjuice.com
        </Link>
        &nbsp;with the following information:
      </Text>
      <UnorderedList stylePosition='inside'>
        <ListItem>Your name and business</ListItem>
        <ListItem>Delivery* or Pick-up*</ListItem>
        <ListItem>Date of delivery or pickup</ListItem>
        <ListItem mt='2'>Name of each product</ListItem>
        <ListItem>Quantity of each product</ListItem>
        <ListItem>Container/Bottle Size of each product</ListItem>
      </UnorderedList>
      <Text fontWeight='semibold'>Example:</Text>
      <Box color='blacks.600'>
        <Text>
          I&apos;d like to order this for xxxx company for delivery for Friday
          May 12:
        </Text>
        <List>
          <ListItem>3 x 2L Lemon Juice</ListItem>
          <ListItem>6 x 1L Lime Juice</ListItem>
          <ListItem>10 x 500ml Passionfruit Lemonade</ListItem>
        </List>
      </Box>
    </VStack>
  );
};
const Faq2C = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>
        Call us at&nbsp;
        <Link href='tel:416-259-1557'>416-259-1557</Link>. If someone is not
        there to answer your call, follow the instructions to leave a message at
        the orders desk. Leave a message with the following information:
      </Text>
      <UnorderedList stylePosition='inside'>
        <ListItem>Your name and business</ListItem>
        <ListItem>Delivery* or Pick-up*</ListItem>
        <ListItem>Date of delivery or pickup</ListItem>
        <ListItem mt='2'>Name of each product</ListItem>
        <ListItem>Quantity of each product</ListItem>
        <ListItem>Container/Bottle Size of each product</ListItem>
      </UnorderedList>
      <Text fontWeight='semibold'>Example:</Text>
      <Box color='blacks.600'>
        <Text>
          I&apos;d like to order this for xxxx company for delivery for Friday
          May 12:
        </Text>
        <List>
          <ListItem>3 x 2L Lemon Juice</ListItem>
          <ListItem>6 x 1L Lime Juice</ListItem>
          <ListItem>10 x 500ml Passionfruit Lemonade</ListItem>
        </List>
      </Box>
    </VStack>
  );
};

export const FaqAnswers: Record<string, JSX.Element> = {
  '1A': <Faq1A />,
  '1B': <Faq1B />,
  '1C': <Faq1C />,
  '2A': <Faq2A />,
  '2B': <Faq2B />,
  '2C': <Faq2C />,
};
