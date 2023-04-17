import { List, ListItem, ListIcon, Flex, Box } from '@chakra-ui/react';

export default function Nav() {
  return (
    <Flex px={20} borderBottom='1px solid black' borderColor='gray.300'>
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
        fontSize='sm'
      >
        <ListItem>Home</ListItem>
        <ListItem>About Us</ListItem>
        <ListItem>Products</ListItem>
        <ListItem>F.A.Q.</ListItem>
        <ListItem>Contact Us</ListItem>
        <ListItem>Order</ListItem>
      </List>
    </Flex>
  );
}
