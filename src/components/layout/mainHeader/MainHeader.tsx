"use client";

import { Box, Flex, IconButton, Menu, Portal } from "@chakra-ui/react";

import { Link as ChakraLink } from "@chakra-ui/react";

import { BsList, BsTelephone, BsInstagram, BsEnvelope } from "react-icons/bs";

import NextImage from "next/image";
import NextLink from "next/link";

export const MainHeader = () => {
  const menuItems = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
  ];
  const socialLinks = [
    {
      label: "Phone",
      href: "tel:+19191111111",
      rel: "noopener noreferrer",
      target: "_blank",
      icon: BsTelephone,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/project.detailing_/",
      rel: "noopener noreferrer",
      target: "_blank",
      icon: BsInstagram,
    },
    {
      label: "Email",
      href: "mailto:Project.detailing919@gmail.com",
      icon: BsEnvelope,
    },
  ];

  return (
    <Box
      as={"header"}
      bg="black"
      w="100%"
      px={{ base: 4, md: 6, lg: 8 }}
      py={{ base: 4, md: 4, lg: 6 }}
      position={"sticky"}
      style={{ top: 0, zIndex: 100 }}
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
                  {menuItems.map(({ label, href }) => (
                    <Menu.Item key={label} value={label}>
                      <NextLink href={href}>{label}</NextLink>
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </Box>

        {/** Logo */}
        <NextLink href="/">
          <Box
            as="span"
            display="inline-block"
            w={{ base: "160px", md: "240px", lg: "320px" }} // responsive max width
            lineHeight={0}
          >
            <NextImage
              src="/project-detailing-white.svg"
              alt="Project Detailing"
              width={320} // intrinsic dimensions (any consistent ratio)
              height={64}
              sizes="(max-width: 768px) 160px, (max-width: 992px) 240px, 320px"
              style={{ width: "100%", height: "auto" }}
              priority
              fetchPriority="high"
              decoding="async"
            />
          </Box>
        </NextLink>

        <Flex
          align="center"
          gap={16}
          hideBelow={"lg"}
          fontSize={{ base: "sm", md: "md", lg: "24px" }}
        >
          {menuItems.map(({ label, href }) => (
            <ChakraLink key={label} asChild color={"white"}>
              <NextLink href={href}>{label}</NextLink>
            </ChakraLink>
          ))}
        </Flex>

        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ base: 4, md: 8 }}
        >
          {socialLinks.map(({ label, href, target, rel, icon: Icon }) => (
            <ChakraLink key={label} asChild color={"white"}>
              <NextLink
                href={href}
                target={target}
                rel={rel}
                aria-label={label}
              >
                {<Icon size={20} />}
              </NextLink>
            </ChakraLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
