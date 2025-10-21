"use client";

import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Image,
  Menu,
  Portal,
} from "@chakra-ui/react";

import { Link as ChakraLink } from "@chakra-ui/react";

import { BsList, BsTelephone, BsInstagram, BsEnvelope } from "react-icons/bs";

import NextImage from "next/image";
import NextLink from "next/link";

export const MainHeader = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <Box
      bg="black"
      w="100%"
      px={{ base: 4, md: 6, lg: 8 }}
      py={{ base: 4, md: 4, lg: 6 }}
      style={{ position: "sticky", top: 0, zIndex: 100 }}
    >
      <Flex
        gap={{ base: 6, md: 8, lg: 10 }}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box hideFrom={"lg"}>
          <Menu.Root>
            <Menu.Trigger asChild>
              <IconButton variant="ghost" size="md" aria-label="Menu">
                <BsList size={5} />
              </IconButton>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="new-txt">About</Menu.Item>
                  <Menu.Item value="new-file">Services</Menu.Item>
                  <Menu.Item value="new-file">Gallery</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Box>

        {/** Logo */}
        <NextLink href="/">
          <NextImage
            src="/project-detailing-white.svg"
            alt="Project Detailing Logo"
            sizes="(max-width: 768px) 180px,
           (max-width: 1024px) 260px,
            380px"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "380px",
            }}
          />
        </NextLink>

        <Flex
          align="center"
          gap={16}
          hideBelow={"lg"}
          fontSize={{ base: "sm", md: "md", lg: "24px" }}
        >
          <ChakraLink asChild>
            <NextLink href="/about">About</NextLink>
          </ChakraLink>
          <ChakraLink asChild>
            <NextLink href="/services">Services</NextLink>
          </ChakraLink>
          <ChakraLink asChild>
            <NextLink href="/gallery">Gallery</NextLink>
          </ChakraLink>
        </Flex>

        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ base: 4, md: 8 }}
        >
          <NextLink
            href="tel:+19191111111"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textWrap: "nowrap",
            }}
          >
            <BsTelephone size={20} />
          </NextLink>

          <NextLink
            href="https://www.instagram.com/project.detailing_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textWrap: "nowrap",
            }}
          >
            <BsInstagram size={20} />
          </NextLink>

          <NextLink
            href="mailto:Project.detailing919@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <BsEnvelope size={20} />
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};
