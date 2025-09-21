"use client";

import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Image,
  Menu,
  Portal,
  Avatar,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { FaSquarePhone, FaInstagram, FaRegEnvelope } from "react-icons/fa6";

import NextImage from "next/image";
import NextLink from "next/link";

export const MainHeader = () => {
  const { open, onToggle } = useDisclosure();

  return (
    <Box
      bg="black"
      w="100%"
      p={4}
      style={{ position: "sticky", top: 0, zIndex: 100 }}
    >
      <Flex direction={{ base: "column" }} gap={4}>
        <Flex align="center" justify="space-between">
          <Box hideFrom={"lg"}>
            <Menu.Root>
              <Menu.Trigger asChild>
                <IconButton variant="ghost" size="md" aria-label="Menu">
                  <HamburgerIcon boxSize={5} />
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

          <NextLink href="/">
            <Image asChild>
              <NextImage
                src="/project-detailing-white.svg"
                alt="Project Detailing Logo"
                width={200}
                height={60}
              />
            </Image>
          </NextLink>

          {/** User Profile Menu */}
          <Menu.Root>
            <Menu.Trigger rounded="full" focusRing="outside">
              <Avatar.Root size="sm">
                <Avatar.Fallback name="User Name" />
              </Avatar.Root>
            </Menu.Trigger>
            <Portal>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item value="account">Account</Menu.Item>
                  <Menu.Item value="settings">Settings</Menu.Item>
                  <Menu.Item value="logout">Logout</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Flex>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: 2, md: 8 }}
          alignItems={"center"}
          justifyContent={"center"}
          fontSize={{ base: "sm", md: "md" }}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={8}>
            <NextLink
              href="tel:+19191111111"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textWrap: "nowrap",
              }}
            >
              <FaSquarePhone size={20} />
              919-111-1111
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
              <FaInstagram size={20} /> project.detailing_
            </NextLink>
          </Flex>

          <NextLink
            href="mailto:Project.detailing919@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaRegEnvelope size={20} /> project.detailing919@gmail.com
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};
