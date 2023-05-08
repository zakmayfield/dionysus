'use client';
import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaqAnswers } from './Answers';
import { faq as faqsData } from './faqData.json';
import { ContentContainer, Hero } from '@/shared/components';
import HeroImg from '@/shared/assets/faq/kiwi-bg.jpeg';

export const FaqPage = () => {
  return (
    <Box>
      <Hero title='Frequenty asked questions' imgSrc={HeroImg.src} />
      {faqsData.map((point) => {
        return (
          <Box
            key={point.key}
            w='full'
            py='12'
            px='8'
            bg={Number(point.key) % 2 ? undefined : 'secondary.50'}
          >
            <ContentContainer maxW='container.2xl' px='0'>
              <Flex flexDir={{ md: 'row', base: 'column' }} flex='1'>
                <VStack alignItems='flex-start' flex='1'>
                  <Text color='secondary.500' fontWeight='bold' fontSize='4xl'>
                    0{point.key}
                  </Text>
                  <Heading
                    as='h2'
                    size='sm'
                    textTransform='uppercase'
                    color='primary.500'
                    fontWeight='semibold'
                  >
                    {point.title}
                  </Heading>
                  <Heading as='h3' fontWeight='normal' size='lg'>
                    {point.subtitle}
                  </Heading>
                </VStack>
                <VStack
                  as={Accordion}
                  allowToggle
                  allowMultiple
                  flex='1'
                  alignItems='flex-start'
                  spacing='1'
                >
                  {point.faqs.map((f) => {
                    return (
                      <AccordionItem
                        key={f.answerKey}
                        boxShadow='md'
                        w='full'
                        border={0}
                        rounded='sm'
                        bgColor='white'
                      >
                        <AccordionButton display='flex' roundedTop='sm'>
                          <AccordionIcon w='7' h='7' />
                          <Text as='h4' textAlign='left' p='3'>
                            {f.question}
                          </Text>
                        </AccordionButton>
                        <AccordionPanel px='8' pt='6' pb='10' fontSize='sm'>
                          {FaqAnswers[f.answerKey]}
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  })}
                </VStack>
              </Flex>
            </ContentContainer>
          </Box>
        );
      })}
    </Box>
  );
};
