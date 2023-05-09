import {
  Box,
  BoxProps,
  Button,
  Heading,
  Text,
  useTheme,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { FadeInBox } from './FadeInBox';

type HeroContentBoxProps = BoxProps & {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  colorScheme?: string;
};

export const HeroContentBox = ({
  title,
  description,
  buttonLabel,
  href,
  colorScheme = 'blacks',
  ...props
}: HeroContentBoxProps) => {
  const { colors } = useTheme();
  return (
    <FadeInBox>
      <Box w='full' display='flex' justifyContent='flex-end' px='12' {...props}>
        <Box border='3px solid' borderColor={colors[colorScheme][700]} p='6'>
          <Heading
            as='h3'
            size='lg'
            fontWeight='semibold'
            color={colors[colorScheme][800]}
            mb='4'
          >
            {title}
          </Heading>
          <Text maxW='30ch' mb='6'>
            {description}
          </Text>
          <Button
            as={NextLink}
            href={href}
            variant='outline'
            colorScheme={colorScheme}
          >
            <Text color={colors[colorScheme][800]}>{buttonLabel}</Text>
          </Button>
        </Box>
      </Box>
    </FadeInBox>
  );
};
