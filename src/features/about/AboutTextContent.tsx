'use client';
import { Box, Heading, Stack, Text, BoxProps } from '@chakra-ui/react';
import { FadeInBox } from '@/shared/components';

type AboutTextContentProps = BoxProps & {
  hasHeading?: boolean;
  title?: string;
  subtitle?: string;
  textContent?: string[];
};

export const AboutTextContent = ({
  hasHeading = true,
  title,
  subtitle,
  textContent,
  ...props
}: AboutTextContentProps) => {
  return (
    <Box textAlign='left' pl={{ lg: '6' }} pb={{ lg: '6' }} {...props}>
      {hasHeading && (
        <FadeInBox>
          <Heading as='h2' fontWeight='light'>
            {title}
          </Heading>
          <Heading as='h3' fontWeight='hairline' fontSize='lg' mt='5' mb='10'>
            {subtitle}
          </Heading>
        </FadeInBox>
      )}

      <Stack spacing='8'>
        {textContent?.map((item) => (
          <FadeInBox key={item.split(' ')[0]}>
            <Text lineHeight='taller'>{item}</Text>
          </FadeInBox>
        ))}
      </Stack>
    </Box>
  );
};
