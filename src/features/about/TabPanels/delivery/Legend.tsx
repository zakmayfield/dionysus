import { Box, Text, Stack, Flex, StackProps, Heading } from '@chakra-ui/react';
import { LegendItemProps, legendData } from '../constants';

export const Legend = ({ ...props }: StackProps) => {
  return (
    <Stack
      w='full'
      textAlign='left'
      flex='1'
      justify='center'
      my='10'
      px='5'
      {...props}
    >
      <Heading
        as='h2'
        fontWeight='light'
        letterSpacing='wide'
        fontSize='xl'
        mb='8'
        textAlign={{ md: 'left', base: 'left' }}
      >
        Delivery Legend
      </Heading>

      <Flex
        w='full'
        flexFlow={{ md: 'row', base: 'column' }}
        justifyContent='space-around'
        alignItems='start'
        fontSize={{ md: 'sm', base: '' }}
      >
        {legendData.map((item) => (
          <LegendItem
            key={item.title}
            color={item.color}
            content={item.content}
          />
        ))}
      </Flex>
    </Stack>
  );
};

function LegendItem({ color, content }: LegendItemProps) {
  const heading = content.split(':')[0];
  const body = content.split(':')[1];
  return (
    <Flex
      justify='left'
      align='start'
      gap={{ md: '6', base: '8' }}
      mb={{ md: '0', base: '3' }}
      w='full'
    >
      {/* Legend color marker */}
      <Box
        w={{ md: '50px', base: '35px' }}
        maxW={{ md: '50px', base: '35px' }}
        h={{ md: '50px', base: '35px' }}
        borderRadius='md'
        bg={color}
        flex='1'
        mt='2px'
        boxShadow='7px 7px 20px 0 rgba(0,0,0, 0.4)'
      />
      <Stack flex='2'>
        <Text fontWeight='' letterSpacing='wider' fontSize={{ md: 'lg' }}>
          {heading}
        </Text>{' '}
        <Text maxW='sm'> {body}</Text>
      </Stack>
    </Flex>
  );
}
