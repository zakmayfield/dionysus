'use client';
import { List, ListItem, ListIcon, Flex, Box, Text } from '@chakra-ui/react';

export default function Nav() {
  return (
    <Flex px={20}>
      <Box flex='1' display='flex'>
        <Box p={48}>🧃</Box>
      </Box>

      <List
        display='flex'
        alignItems='center'
        gap={20}
        flex='2'
        justifyContent='flex-end'
        textTransform='uppercase'
      >
        <ListItem>
          <Text fontSize='2xl' color="red">Home</Text>
        </ListItem>
        <ListItem fontSize='2xl'>About Us</ListItem>
        <ListItem>Products</ListItem>
        <ListItem>F.A.Q.</ListItem>
        <ListItem>Contact Us</ListItem>
        <ListItem>Order</ListItem>
      </List>
    </Flex>
  );
}
