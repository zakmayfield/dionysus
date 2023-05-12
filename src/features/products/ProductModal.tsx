import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: string[];
  title: string;
};

export const ProductModal = ({
  isOpen,
  onClose,
  content,
  title,
}: ProductModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
      <ModalOverlay />
      <ModalContent p={{ md: '6' }}>
        <ModalHeader fontWeight='semibold' fontSize='3xl'>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH='60vh' overflow='auto'>
          <VStack spacing='6' pb='6'>
            {content.map((c, i) => (
              <Text key={i} w='full'>
                {c}
              </Text>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
