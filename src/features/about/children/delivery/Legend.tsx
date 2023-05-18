import { Box, Text, Stack, Flex, StackProps, Heading } from '@chakra-ui/react';
import { LegendItemProps, legendData } from '../constants';

export const Legend = ({ ...props }: StackProps) => {
  return (
    <Stack w='full' textAlign='left' justify='center' mt='6' {...props}>
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
      mb={{ md: '0', base: '6' }}
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
        <Text fontWeight='' letterSpacing='wider' fontSize='lg'>
          {heading}
        </Text>{' '}
        <Text maxW='sm' color='blacks.600'>
          {body}
        </Text>
      </Stack>
    </Flex>
  );
}
