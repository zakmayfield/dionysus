import {
  Center,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MotionBox } from '@/shared/components';

type ContactFormSuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const ContactFormSuccessModal = ({
  isOpen,
  onClose,
}: ContactFormSuccessModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontWeight='semibold' textAlign='center' fontSize='3xl'>
          Thank you!
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH='50vh' overflow='auto' pb='14' pt='6'>
          <Text textAlign='center'>
            Your message has been sent successfully.
          </Text>
          <Center mt='12'>
            <MotionBox
              animate={{ scale: 1.2 }}
              transition={{
                duration: 0.3,
                ease: 'backInOut',
                scale: {
                  type: 'spring',
                  damping: 5,
                  stiffness: 200,
                  restDelta: 0.001,
                },
              }}
            >
              <Icon as={BsCheckCircleFill} w='32' h='32' color='primary.500' />
            </MotionBox>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
