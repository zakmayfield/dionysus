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
      <ModalContent>
        <ModalHeader fontWeight='semibold' fontSize='3xl'>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody maxH='50vh' overflow='auto'>
          <VStack spacing='6' pb='8'>
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
