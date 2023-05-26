import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { MotionBox } from '@/shared/components';

export const SocialMediaLinks = () => {
  return (
    <Flex justifyContent='space-between'>
      <Link
        href='https://www.facebook.com/chasersjuicetoronto/'
        target='_blank'
        aria-label='Chasers Juice Facebook Page'
      >
        <Box
          border='1px solid black'
          display='inline-block'
          transition='ease'
          transitionDuration='200ms'
          _hover={{ color: 'primary.600' }}
        >
          <MotionBox whileHover={{ scale: 1.2 }} p='2.5'>
            <FaFacebookF />
          </MotionBox>
        </Box>
      </Link>
      <Link
        href='https://www.instagram.com/chasersjuicetoronto/'
        target='_blank'
        aria-label='Chasers Juice Instagram Page'
      >
        <Box
          border='1px solid black'
          display='inline-block'
          transition='ease'
          transitionDuration='200ms'
          _hover={{ color: 'primary.600' }}
        >
          <MotionBox whileHover={{ scale: 1.2 }} p='2.5'>
            <FaInstagram />
          </MotionBox>
        </Box>
      </Link>
    </Flex>
  );
};
