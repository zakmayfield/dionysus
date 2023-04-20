"use client";
import { List, ListItem, Flex, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../shared/assets/chasers-juice-logo.png";

const navigationItems = [
  { label: "Home", route: "/" },
  { label: "About Us", route: "/about-us" },
  { label: "Products", route: "/products" },
  { label: "F.A.Q.", route: "/faq" },
  { label: "Contact Us", route: "/contact-us" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <Flex px={12} py={3} borderBottom="1px" borderColor="gray.100">
      <Box flex="1" display="flex">
        <Image src={logo} alt="Chasers Fresh Juice Logo" width={125} />
      </Box>

      <List
        display="flex"
        alignItems="center"
        gap={8}
        flex="2"
        justifyContent="flex-end"
        textTransform="uppercase"
        fontSize="xs"
        letterSpacing={1}
        color="blackAlpha.500"
        fontWeight="medium"
      >
        {navigationItems.map((item) => (
          <ListItem
            key={item.route}
            color={pathname === item.route ? "chakra-body-text" : ""}
            _hover={{ color: "gray.600" }}
          >
            <Link href={item.route}>{item.label}</Link>
          </ListItem>
        ))}
        <Button as={Link} href="#">
          Order
        </Button>
      </List>
    </Flex>
  );
}
