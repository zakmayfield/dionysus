import { Box, Flex, Button, Heading, Text } from '@chakra-ui/react';

type HubCtaTileProps = {
  title: string;
  content: string;
};

export default function HubCtaTile({ title, content }: HubCtaTileProps) {
  return (
    <Flex
      flexFlow='column'
      alignItems='space-between'
      textAlign={{ base: 'center', md: 'left' }}
      px='8'
    >
      <Heading as='h3' fontWeight='semibold'>
        {title}
      </Heading>

      <Text my='5'>{content}</Text>

      <Box>
        <Button>Learn More</Button>
      </Box>
    </Flex>
  );
}
