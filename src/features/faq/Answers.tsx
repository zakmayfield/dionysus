import {
  Box,
  Flex,
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
import { chasersJuice } from '@/shared/constants';
import { formatPhoneNumber } from '@/shared/utils';

const Faq1A = () => {
  return (
    <VStack spacing='4'>
      <Text>
        Chasers Juice is a wholesale juice operation located in Toronto,
        Ontario. We serve over 350 restaurants, bars, hotels, clubs, venues,
        events and bakeries &ndash; chances are you&apos;ve already had some!
      </Text>
      <Text>
        <Text as='strong'>For businesses:&nbsp;</Text>
        <Link as={NextLink} href={routes.contact}>
          &nbsp;Contact us here
        </Link>
        &nbsp; to set up an account with us to begin ordering. Check with
        our&nbsp;
        <Link as={NextLink} href={routes.deliveryArea}>
          delivery area
        </Link>
        &nbsp; to ensure we can deliver to you. We also offer pick-ups at our
        Etobicoke location.
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
      Of course it&apos;s 100% FREE! Just contact us through our form&nbsp;
      <Link as={NextLink} href={routes.contact} aria-label='Contact us'>
        here
      </Link>
      &nbsp;and we will send you a quick and easy form to fill out so you can
      begin ordering ASAP!
    </Text>
  );
};
const Faq1D = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>Upcoming dates we are closed:</Text>
      <Box>
        <UnorderedList>
          <ListItem>Monday October 14, 2024</ListItem>
          <ListItem>Wednesday December 25, 2024</ListItem>
          <ListItem>Thursday December 26, 2024</ListItem>
          <ListItem>Wednesday January 1, 2025</ListItem>
        </UnorderedList>
      </Box>
    </VStack>
  );
};
const Faq1C = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>We are open and delivering Monday &ndash; Friday.</Text>
      <Box>
        <Text>The office hours are:</Text>
        <List>
          <ListItem>Monday: 7am &ndash; 3:30pm</ListItem>
          <ListItem>Tuesday: 7am &ndash; 3:30pm</ListItem>
          <ListItem>Wednesday: 7am &ndash; 3:30pm</ListItem>
          <ListItem>Thursday: 7am &ndash; 3:30pm</ListItem>
          <ListItem>Friday: 7am &ndash; 3:30pm</ListItem>
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
        <Link href={`mailto:${chasersJuice.email}`}>{chasersJuice.email}</Link>
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
        <Link href={`tel:${chasersJuice.phone}`}>
          {formatPhoneNumber(chasersJuice.phone)}
        </Link>
        . If someone is not there to answer your call, follow the instructions
        to leave a message at the orders desk. Leave a message with the
        following information:
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
const Faq3A = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>Our delivery hours are between 12pm&ndash;7pm everyday.</Text>
      <Text>
        For Toronto and some GTA locations we delivery: Monday &ndash; Friday.
        For other GTA locations and locations outside of the GTA we deliver:
        Tuesdays & Thursdays.
      </Text>
      <Text>
        For more information about our delivery area,&nbsp;
        <Link href={routes.deliveryArea} aria-label='Delivery area page'>
          click here
        </Link>
        .
      </Text>
    </VStack>
  );
};
const Faq3B = () => {
  return (
    <Flex alignItems='flex-start'>
      <Text>
        Yes we can upon request. If you would like to request a different time
        outside of our regular delivery hours please request your order over 24
        hours in advance of the delivery hour you require. This may incur a
        delivery fee to ensure your order arrives at your specified time.
      </Text>
    </Flex>
  );
};
const Faq3C = () => {
  return (
    <Flex alignItems='flex-start'>
      <Text>
        You may request a specific delivery time but it may incur a delivery fee
        to guarantee your juice arrives at your specified time. Please inform us
        in advance if you would like to request a guaranteed delivery time.
      </Text>
    </Flex>
  );
};
const Faq3D = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>
        There is no order minimum if you are picking up your order at our office
        in Etobicoke.
      </Text>
      <Text>
        Chasers Juice requires a minimum order of $25 for deliveries within
        Toronto and some GTA locations.
      </Text>
      <Text>
        For orders within other GTA locations, Chasers Juice requires a minimum
        order of $75.
      </Text>
      <Text>
        For orders outside of the GTA, please&nbsp;
        <Link href={routes.contact}>contact us</Link>.
      </Text>
    </VStack>
  );
};
const Faq3E = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>
        Our core delivery area is throughout the downtown core of Toronto as
        well as the surrounding neighbourhoods. We also deliver all throughout
        the GTA and all over Canada.
      </Text>
      <Text>
        For more information about our main delivery area,&nbsp;
        <Link href={routes.deliveryArea} aria-label='Delivery area page'>
          click here
        </Link>
        .
      </Text>
    </VStack>
  );
};
const Faq3F = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>
        We have a large variety of sizes and types of containers available!
      </Text>
      <Text>
        The most popular format is our 2L (Litre) jug. Apart from that, Chasers
        Juice bottle sizes range from single-serving bottles to 1000L totes and
        we have sizes in glass and plastic.
      </Text>
      <Text>
        The sizes we offer is subject to availability, but we often have the
        following in stock: 355ml, 500ml, 1L, 2L, 10L pail, 15L pail, 20L pail.
        We offer special pricing options for large quantities and 1000L totes.
      </Text>
      <Text>
        If you don&apos;t see what you&apos;re looking for,&nbsp;
        <Link href={routes.contact}>ask us</Link> and we will see if we can get
        it for you!
      </Text>
    </VStack>
  );
};
const Faq3G = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>
        Chasers Fresh Juice is located at {chasersJuice.address.address}
        &nbsp;in&nbsp;
        {chasersJuice.address.city}, {chasersJuice.address.state}. Located only
        a short drive away from Sherway Gardens Mall, near the intersection of
        North Queen St. and Queensway.
      </Text>
      <Link href={chasersJuice.address.googleMapsLink} target='_blank'>
        Click here for directions
      </Link>
    </VStack>
  );
};
const Faq4A = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>
        Chasers Juice does not add any preservatives or additives to any of our
        juices! As such, Chasers recommends a shelf life of seven (7) days for
        the majority of our products and they must be refrigerated when they are
        not being consumed.
      </Text>
      <Text>
        All juices are made fresh, on the morning of your order, to ensure
        maximum shelf life.
      </Text>
      <Text>
        Juices may also be frozen to prolong their life at user discretion (this
        may not be possible in glass bottles).
      </Text>
      <Text>
        Chasers Fresh Juice provides date of expiry on all juices purchased.
      </Text>
    </VStack>
  );
};
const Faq4B = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>
        At Chasers Juice, we believe fresh is best. Because of this policy, all
        of our juices are created from fresh fruits, vegetables, herbs and
        spices. No added sugars, preservatives or flavour enhancers are added to
        our Chasers Juice blends (with the exception of our in-house made
        syrups).
      </Text>
      <Text>
        Chasers uses only premium, number one fruits. In fact, over 18,000 tons
        of citrus fruits is juiced daily! Fruits and vegetables are pressed,
        squeezed, blended and strained continuously to provide you with the
        smoothest, most delicious drink possible.
      </Text>
    </VStack>
  );
};
const Faq4C = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>
        We have a select group of juice products that you can choose from that
        are made with organic produce.
      </Text>
      <Text>
        The reason we do not offer and label all of our products as organic is
        because as well as purchasing organic we also value buying local as much
        as possible. We do our best to purchase as much local produce as
        possible and sometimes we cannot purchase local and organic at the same
        time while keeping costs low.
      </Text>
      <Text>
        In the spirit of keeping our prices as affordable as possible and
        offering fresh same day products, not all of the produce we purchase is
        organic for our regular products that are not on our organics list. BUT
        we do purchase organic whenever and wherever possible, so it often
        happens that most of the juices and other products not on the organics
        list have actually been made with organic produce even though we do not
        advertise it as such.
      </Text>
    </VStack>
  );
};
const Faq4D = () => {
  return (
    <Flex alignItems='flex-start'>
      <Text>
        The cleanse packages are designed to help your body detox, and rid
        itself of harmful toxins. Each juice is specially designed to give your
        body nutrients, vitamins and minerals it needs. Juice cleanses are meant
        to be taken every two hours, with water in between. Chasers does not add
        any water to their juices, so staying hydrated throughout the process is
        a must. Chasers has a variety of different cleanse packages ranging from
        single juice orders to 3, 5 and 7 day cleanse packages.&nbsp;
        <Link href={routes.products} aria-label='Products page'>
          Click here
        </Link>
        &nbsp;for more information about available cleanse packages.
      </Text>
    </Flex>
  );
};
const Faq4E = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>
        Feel free to check out our products page for more information about the
        products we offer and send us an email to receive an updated price list!
      </Text>
      <Text>
        We are committed to making the freshest, highest quality, healthiest and
        most delicious products on the market and we believe our prices match
        this proposition. We take pride in creating delicious plant based
        products year-round and we think our prices are more than worth it! We
        purchase locally whenever possible and source sustainable produce when
        it&apos;s not possible. We do not dilute our juice or add any
        preservatives or pasteurize to make our juices last longer then
        naturally possible. Therefore we can&apos;t make extra juice to last us
        over long periods of time. We only use fresh produce in our creations
        which requires careful planning to mitigate waste. But it also allows us
        to offer the freshest and healthiest products possible.
      </Text>
      <Text>
        Have you ever wondered why conventional juices in grocery stores
        don&apos;t naturally separate or bloat even after the expiry date? Its
        because all of the added chemicals to help keep the juice longer so it
        will be more likely to be sold. Our juices are as fresh as if you were
        to juice it yourself in your kitchen except we take care of the mess. So
        after hearing all of this, how much are you willing to spend on health
        and taste? Because we guarantee you will taste the difference between
        any grocery store brand and Chasers Fresh Juice. Give us a call and try
        it out for yourself!
      </Text>
    </VStack>
  );
};
const Faq4F = () => {
  return (
    <VStack spacing='4' alignItems='flex-start'>
      <Text>
        We mean that our juices have not been subjected to high temperatures in
        the process of juicing. This high temperature heating process kills off
        all potentially harmful bacteria and slows down microbial growth which
        causes things to go bad faster. The pasteurization process increases the
        shelf life of juices as well as reducing the risk of contamination of
        harmful bacteria. This process may sound really great and helpful, but
        it also kills off all of the healthy and wonderful nutrients and
        minerals found within raw fruits and vegetables. It reduces the juice to
        an empty and hollow drink with very little positive and healthy life to
        it. One of the many reasons we drink fresh juice is to ingest and absorb
        all of those juicy nutrients and minerals into our bodies to maintain a
        healthy and balanced lifestyle. But with all of those removed we are not
        left with much, which is why we do not subject our juices to this
        process.
      </Text>
      <Text>
        Since we refuse to take anything away from the juice we also refuse to
        add anything! We do not add any other additional preservatives and other
        chemical additives to increase the shelf life of our juices. We believe
        it takes away from the freshness, taste and naturalness of the juices.
        We want our products to be as healthy as possible, which is why we
        choose to keep them raw.
      </Text>
    </VStack>
  );
};

export const FaqAnswers: Record<string, JSX.Element> = {
  '1A': <Faq1A />,
  '1B': <Faq1B />,
  '1C': <Faq1C />,
  '1D': <Faq1D />,
  '2A': <Faq2A />,
  '2B': <Faq2B />,
  '2C': <Faq2C />,
  '3A': <Faq3A />,
  '3B': <Faq3B />,
  '3C': <Faq3C />,
  '3D': <Faq3D />,
  '3E': <Faq3E />,
  '3F': <Faq3F />,
  '3G': <Faq3G />,
  '4A': <Faq4A />,
  '4B': <Faq4B />,
  '4C': <Faq4C />,
  '4D': <Faq4D />,
  '4E': <Faq4E />,
  '4F': <Faq4F />,
};
