'use client';
import {
  List,
  ListItem,
  Flex,
  Box,
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
import { motion } from 'framer-motion';
import logo from '~shared/assets/chasers-juice-logo.png';
import { ContentContainer } from '~shared/components';
import routes from '@/shared/routes';

const navigationItems = [
  { label: 'Home', route: routes.home },
  { label: 'About Us', route: routes.about },
  { label: 'Products', route: routes.products },
  { label: 'F.A.Q.', route: routes.faq },
  { label: 'Contact Us', route: routes.contact },
];

export default function Nav() {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanTablet] = useMediaQuery('(min-width: 768px)');

  return (
    <Flex as='nav' borderBottom='1px' borderColor='gray.200'>
      <ContentContainer maxW='container.2xl' display='flex' py='2'>
        <Box display='flex' flex='1'>
          <Image src={logo} alt='Chasers Juice Logo' width={85} />
        </Box>

        {isLargerThanTablet ? (
          // * desktop nav view
          <Box
            display='flex'
            flex='4'
            justifyContent='flex-end'
            alignItems='center'
          >
            <List
              display='flex'
              alignItems='center'
              gap='8'
              flex='3'
              justifyContent='flex-end'
              textTransform='uppercase'
              fontSize='sm'
              letterSpacing='0'
              color='blackAlpha.500'
              fontWeight='medium'
            >
              {navigationItems.map((item, i) => (
                <ListItem
                  as={motion.li}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition='0.1s linear'
                  key={i}
                  color={pathname === item.route ? 'chakra-body-text' : ''}
                  _hover={{ color: 'primary.700' }}
                >
                  <Link href={item.route}>{item.label}</Link>
                </ListItem>
              ))}
              <ListItem
                as={motion.li}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition='0.1s linear'
              >
                <Button as={Link} href={routes.contact}>
                  Order
                </Button>
              </ListItem>
            </List>
          </Box>
        ) : (
          // * mobile nav view
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
              variant='outline'
              aria-label='toggle navigation menu'
              icon={<RxHamburgerMenu />}
              size='lg'
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
                <Button as={Link} href={routes.contact}>
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
