"use client";
import { Box } from "@chakra-ui/react";
import Nav from "../components/Nav";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <Box as="body">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </Box>
    </html>
  );
}
