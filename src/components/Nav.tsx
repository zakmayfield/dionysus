'use client';
import { List, ListItem, ListIcon, Flex, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../shared/assets/chasers-juice-logo.png';



const navigationItems = [
  { label: 'Home', route: '/' },
  { label: 'About Us', route: '/about-us' },
  { label: 'Products', route: '/products' },
  { label: 'F.A.Q.', route: '/faq' },
  { label: 'Contact Us', route: '/contact-us' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <Flex px={12} borderBottom='1px' borderColor='blackAlpha.300'>
      <Box flex='1' display='flex'>
        <Image src={logo} alt='Chasers Fresh Juice Logo' width={150} />
      </Box>

      <List
        display='flex'
        alignItems='center'
        gap={8}
        flex='2'
        justifyContent='flex-end'
        textTransform='uppercase'
        fontSize='xs'
        letterSpacing={1}
        color='blackAlpha.500'
        fontWeight='medium'
      >
        {navigationItems.map((item) => (
          <ListItem
            key={item.route}
            color={pathname === item.route ? 'chakra-body-text' : ''}
            _hover={{ color: 'gray.600' }}
          >
            <Link href={item.route}>{item.label}</Link>
          </ListItem>
        ))}
        <Link href='.'>
          <Box
            as='span'
            color='white'
            bg='red.400'
            fontWeight='bold'
            p={2.5}
            _hover={{ bg: 'red.600' }}
          >
            Order
          </Box>
        </Link>
      </List>
    </Flex>
  );
}
