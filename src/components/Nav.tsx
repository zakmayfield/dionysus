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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../shared/assets/chasers-juice-logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const navigationItems = [
  { label: 'Home', route: '/' },
  { label: 'About Us', route: '/about-us' },
  { label: 'Products', route: '.' },
  { label: 'F.A.Q.', route: '.' },
  { label: 'Contact Us', route: '.' },
];

export default function Nav() {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    // // desktop styles
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
      <Container maxW='container.lg' display='flex' py='2' px='5'>
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
            size={`lg`}
            onClick={isOpen ? onClose : onOpen}
          />
        </Box>
      </Container>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent p='5'>
          <DrawerCloseButton />
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
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
