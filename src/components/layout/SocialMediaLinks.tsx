import { Box, BoxProps, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

export type MotionBoxProps = Omit<BoxProps, 'transition'>;
export const MotionBox = motion<MotionBoxProps>(Box);

export const SocialMediaLinks = () => {
  const [fbHover, setFbHover] = useState(false);
  const [igHover, setIgHover] = useState(false);
  return (
    <Flex justifyContent='space-between'>
      <Link
        href='https://www.facebook.com/chasersjuicetoronto/'
        target='_blank'
      >
        <Box
          border='1px solid black'
          display='inline-block'
          p='2.5'
          transition='ease'
          transitionDuration='200ms'
          _hover={{ color: 'primary.600' }}
          onMouseEnter={() => setFbHover(true)}
          onMouseLeave={() => setFbHover(false)}
        >
          <MotionBox
            animate={{
              scale: fbHover ? 1.2 : undefined,
            }}
          >
            <FaFacebookF />
          </MotionBox>
        </Box>
      </Link>
      <Link
        href='https://www.instagram.com/chasersjuicetoronto/'
        target='_blank'
      >
        <Box
          border='1px solid black'
          display='inline-block'
          p='2.5'
          transition='ease'
          transitionDuration='200ms'
          _hover={{ color: 'primary.600' }}
          onMouseEnter={() => setIgHover(true)}
          onMouseLeave={() => setIgHover(false)}
        >
          <MotionBox
            animate={{
              scale: igHover ? 1.2 : undefined,
            }}
          >
            <FaInstagram />
          </MotionBox>
        </Box>
      </Link>
    </Flex>
  );
};
