'use client';
import {
  List,
  ListItem,
  Flex,
  Box,
  Container,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useMediaQuery,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AnimatePresence, motion } from 'framer-motion';
import { ContentContainer } from '@/shared/components';
import logo from '../shared/assets/chasers-juice-logo.png';

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

  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');

  const listItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Flex as='nav' borderBottom='1px' borderColor='gray.200'>
      <ContentContainer display='flex' py='2' px='8'>
        <Box display='flex' flex='1'>
          <Image src={logo} alt='Chasers Juice Logo' width={85} />
        </Box>

          {isLargerThanTablet ? (
            <Box
              display='flex'
              flex='4'
              justifyContent='flex-end'
              alignItems='center'
            >
              <List
                display='flex'
                alignItems='center'
                gap={8}
                flex='3'
                justifyContent='flex-end'
                textTransform='uppercase'
                fontSize='xs'
                letterSpacing={1}
                color='blackAlpha.500'
                fontWeight='medium'
              >
                {navigationItems.map((item) => (
                  <ListItem
                    as={motion.li}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition='0.1s linear'
                    key={item.route}
                    color={pathname === item.route ? 'chakra-body-text' : ''}
                    _hover={{ color: 'gray.600' }}
                  >
                    <Link href={item.route}>{item.label}</Link>
                  </ListItem>
                ))}
                {/* this should be wrapped in ListItem */}
                <ListItem
                  as={motion.li}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition='0.1s linear'
                >
                  <Link href='.'>
                    <Button as={Link} href='#'>
                      Order
                    </Button>
                  </Link>
                </ListItem>
            </List>
          </Box>
        ) : (
          <Box
            display='flex'
            flex='1'
            justifyContent='flex-end'
            alignItems='center'
          >
            <IconButton
              as={motion.button}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileTap={{ scale: 1.2 }}
              transition='0.05s linear'
              variant={`outline`}
              aria-label='toggle navigation menu'
              icon={<RxHamburgerMenu />}
              size={`lg`}
              onClick={isOpen ? onClose : onOpen}
            />
          </Box>
        )}
      </ContentContainer>

      {!isLargerThanTablet && (
        <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent p='5' pt='12' bg='white'>
            <DrawerCloseButton size='lg' />
            <List
              color='blackAlpha.500'
              fontWeight='light'
              px='5'
              display='flex'
              flexFlow='column'
              gap={2}
              fontSize='2xl'
              letterSpacing='wider'
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

              <ListItem mt='8'>
                <Button as={Link} href='#'>
                  Order
                </Button>
              </ListItem>
            </List>
          </DrawerContent>
        </Drawer>
      )}
    </Flex>
  );
}
