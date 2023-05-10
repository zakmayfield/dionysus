import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
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
  customButton?: JSX.Element;
  variant?: 'solid' | 'outline';
};

export const HeroContentBox = ({
  title,
  description,
  buttonLabel,
  customButton,
  href,
  colorScheme = 'blacks',
  variant = 'outline',
  ...props
}: HeroContentBoxProps) => {
  const { colors } = useTheme();
  return (
    <FadeInBox>
      <Box w='full' display='flex' justifyContent='flex-end' px='12' {...props}>
        <Box
          border='3px solid'
          borderColor={colors[colorScheme][700]}
          p='6'
          bg={variant === 'outline' ? undefined : colors[colorScheme][300]}
        >
          <Heading
            as='h3'
            size='lg'
            fontWeight='semibold'
            color={colors[colorScheme][800]}
            mb='4'
          >
            {title}
          </Heading>
          <Text
            maxW='30ch'
            mb='6'
            color={
              variant === 'outline'
                ? colors[colorScheme][800]
                : colors[colorScheme][900]
            }
          >
            {description}
          </Text>
          {customButton ? (
            customButton
          ) : (
            <Button
              as={NextLink}
              href={href}
              variant={variant === 'outline' ? 'outline' : 'solid'}
              colorScheme={
                colorScheme === 'blacks' ? 'blackAlpha' : colorScheme
              }
            >
              <Text
                color={
                  variant === 'outline'
                    ? colors[colorScheme][800]
                    : colors[colorScheme][900]
                }
              >
                {buttonLabel}
              </Text>
            </Button>
          )}
        </Box>
      </Box>
    </FadeInBox>
  );
};
