import {
  Box,
  Flex,
  VStack,
  Text,
  Heading,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
} from '@chakra-ui/react';
import React from 'react';
import { FaqAnswers } from './Answers';
import { ContentContainer } from '@/shared/components';

type Faq = {
  question: string;
  answerKey: string;
};

type FaqSection = {
  key: string;
  title: string;
  subtitle: string;
  faqs: Faq[];
};

type FaqSectionProps = {
  section: FaqSection;
};
type FaqQuestionItemProps = {
  faq: Faq;
};

const FaqQuestionItem = ({ faq }: FaqQuestionItemProps) => {
  const { answerKey, question } = faq;
  return (
    <AccordionItem
      boxShadow='md'
      w='full'
      border={0}
      rounded='sm'
      bgColor='white'
    >
      <AccordionButton display='flex' roundedTop='sm'>
        <AccordionIcon w='7' h='7' />
        <Text as='h4' textAlign='left' p='3'>
          {question}
        </Text>
      </AccordionButton>
      <AccordionPanel px='8' pt='6' pb='10' fontSize='sm'>
        {FaqAnswers[answerKey]}
      </AccordionPanel>
    </AccordionItem>
  );
};

export const FaqSection = ({ section }: FaqSectionProps) => {
  return (
    <Box
      w='full'
      py='12'
      px='8'
      bg={Number(section.key) % 2 ? undefined : 'secondary.50'}
    >
      <ContentContainer maxW='container.2xl' px='0'>
        <Flex flexDir={{ md: 'row', base: 'column' }} flex='1'>
          <VStack alignItems='flex-start' flex='1' pr='8' pb='8'>
            <Text color='secondary.500' fontWeight='bold' fontSize='4xl'>
              0{section.key}
            </Text>
            <Heading
              as='h2'
              size='sm'
              textTransform='uppercase'
              color='primary.500'
              fontWeight='semibold'
            >
              {section.title}
            </Heading>
            <Heading as='h3' fontWeight='normal' size='lg'>
              {section.subtitle}
            </Heading>
          </VStack>
          <VStack
            as={Accordion}
            allowToggle
            flex='1'
            alignItems='flex-start'
            spacing='1'
          >
            {section.faqs.map((f) => {
              return <FaqQuestionItem key={f.answerKey} faq={f} />;
            })}
          </VStack>
        </Flex>
      </ContentContainer>
    </Box>
  );
};
