import { Box, Flex, Button, Heading, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FadeInBox } from '@/shared/components';

type HubCtaTileProps = {
  title: string;
  content: string;
  buttonLabel?: string;
  route: string;
};

export default function HubCtaTile({
  title,
  content,
  route,
  buttonLabel = 'Learn More',
}: HubCtaTileProps) {
  return (
    <FadeInBox>
      <Flex
        flexFlow='column'
        alignItems='space-between'
        textAlign={{ base: 'center', md: 'left' }}
        px='12'
        my={{ base: '12', md: 0 }}
      >
        <Heading as='h3' fontWeight='semibold'>
          {title}
        </Heading>

        <Text my='5'>{content}</Text>

        <Box>
          <Button as={NextLink} href={route}>
            {buttonLabel}
          </Button>
        </Box>
      </Flex>
    </FadeInBox>
  );
}
