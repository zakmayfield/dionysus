'use client';
import { Box, Heading, Stack, Text, BoxProps } from '@chakra-ui/react';

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
        <>
          <Heading as='h2' fontWeight='light'>
            {title}
          </Heading>
          <Heading as='h3' fontWeight='hairline' fontSize='lg' mt='5' mb='10'>
            {subtitle}
          </Heading>
        </>
      )}

      <Stack spacing='8'>
        {textContent?.map((item) => (
          <Text key={item.split(' ')[0]} lineHeight='taller'>
            {item}
          </Text>
        ))}
      </Stack>
    </Box>
  );
};
