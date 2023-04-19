'use client';
import {
  List,
  ListItem,
  ListIcon,
  Flex,
  Box,
  Text,
  Icon,
  Container,
  useDisclosure,
  Button,
  IconButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../shared/assets/chasers-juice-logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';

const navigationItems = [
  { label: 'Home', route: '/' },
  { label: 'About Us', route: '/about-us' },
  { label: 'Products', route: '.' },
  { label: 'F.A.Q.', route: '.' },
  { label: 'Contact Us', route: '.' },
];

export default function Nav() {
  const pathname = usePathname();
  const { getDisclosureProps, getButtonProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();

  console.log('disclosure props', disclosureProps);

  return (
    // <Flex as='nav' px={12} py={3} borderBottom='1px' borderColor='gray.100'>
    //   <Box flex='1' display='flex'>
    //     <Box width={{ base: 100, lg: 125 }}>
    //       <Image src={logo} alt='Chasers Juice Logo' />
    //     </Box>
    //   </Box>

    //   <List
    //     display='flex'
    //     alignItems='center'
    //     gap={8}
    //     flex='3'
    //     justifyContent='flex-end'
    //     textTransform='uppercase'
    //     fontSize='xs'
    //     letterSpacing={1}
    //     color='blackAlpha.500'
    //     fontWeight='medium'
    //   >
    //     {navigationItems.map((item) => (
    //       <ListItem
    //         key={item.route}
    //         color={pathname === item.route ? 'chakra-body-text' : ''}
    //         _hover={{ color: 'gray.600' }}
    //       >
    //         <Link href={item.route}>{item.label}</Link>
    //       </ListItem>
    //     ))}
    //     <Link href='.'>
    //       <Box
    //         as='span'
    //         color='white'
    //         bg='red.400'
    //         fontWeight='bold'
    //         p={2.5}
    //         _hover={{ bg: 'red.600' }}
    //       >
    //         Order
    //       </Box>
    //     </Link>
    //   </List>
    // </Flex>

    <Flex
      as='nav'
      borderBottom='1px'
      borderColor='gray.200'
      display='flex'
      flexFlow='column'
    >
      <Container maxW='container.lg' display='flex' m='0' px='5' py='2'>
        <Box display='flex' flex='1'>
          <Image src={logo} alt='Chasers Juice Logo' width={85} />
        </Box>

        <Box
          display='flex'
          flex='1'
          justifyContent='flex-end'
          alignItems='center'
        >
          <IconButton
            variant={`outline`}
            aria-label='toggle navigation menu'
            icon={<RxHamburgerMenu />}
            borderColor={`blackAlpha.700`}
            borderWidth={`3px`}
            borderRadius={`lg`} // -> animate to 'full'
            size={`lg`}
          />
        </Box>
      </Container>

      <Box py='5' border='1px solid blue'>
        <List
          color='blackAlpha.500'
          fontWeight='medium'
          px='5'
          display={`flex`}
          flexFlow={`column`}
          gap={2}
          fontSize={`lg`}
        >
          {navigationItems.map((item) => (
            <ListItem
              key={item.label}
              color={pathname === item.route ? 'chakra-body-text' : ''}
              _hover={{ color: 'gray.600' }}
            >
              <Link href={item.route}>{item.label}</Link>
            </ListItem>
          ))}

          <ListItem mt='5'>
            <Link href='.'>
              <Box
                as='span'
                color='white'
                bg='red.400'
                fontWeight='bold'
                p={2.5}
                _hover={{ bg: 'red.600' }}
                borderRadius={`sm`}
              >
                Order
              </Box>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
}
