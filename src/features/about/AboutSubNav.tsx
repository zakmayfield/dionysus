'use client';
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import routes from '@/shared/routes';

const aboutSubNavItems = [
  { label: 'Our Story', route: routes.ourStory },
  { label: 'Philosophy', route: routes.philosophy },
  { label: 'Sustainability', route: routes.sustainability },
  { label: 'Delivery Area', route: routes.deliveryArea },
];

export const AboutSubNav = () => {
  const pathname = usePathname();
  return (
    <Flex w='full'>
      <Flex
        pt='6'
        mb='6'
        pl={{ base: '6', md: '0' }}
        px={{ base: '0', md: '12' }}
        mx='auto'
        justify='center'
        gap='5'
        borderBottom='1px'
        borderBottomColor='blackAlpha.400'
      >
        {aboutSubNavItems.map((item) => {
          const isActive = pathname === item.route;
          return (
            <Text
              borderBottom={isActive ? '1px' : undefined}
              borderBottomColor={isActive ? 'primary.700' : 'black'}
              color={isActive ? 'primary.700' : 'black'}
              transition='0.1s linear'
              _hover={{
                color: 'primary.700',
                borderBottomColor: 'primary.700',
              }}
              pb='4'
              key={item.label}
            >
              <Link href={item.route}>{item.label}</Link>
            </Text>
          );
        })}
      </Flex>
    </Flex>
  );
};
