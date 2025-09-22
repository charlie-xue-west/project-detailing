import { MainHeader } from "@/components";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import NextImage from "next/image";
import alexAndNico from "@/assets/about-us-desktop.jpeg";
import foamTerminate from "@/assets/foam-terminate.jpg";
import cleanTerminate from "@/assets/clean-terminate.jpg";

export default function Home() {
  const sections = [
    {
      id: "sect-service",
      title: "Services",
      content: (
        <Box
          key="sect-about"
          as={"section"}
          p={4}
          justifyContent={"center"}
          textAlign={"center"}
          bg={"black"}
        ></Box>
      ),
    },
    {
      id: "sect-about",
      title: "About",
      content: (
        <Box
          key="sect-about"
          as={"section"}
          p={4}
          justifyContent={"center"}
          textAlign={"center"}
          bg={"black"}
        >
          <Flex
            flexDir={"column"}
            gap={4}
            alignItems={"center"}
            fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
          >
            <Heading
              as="h2"
              size={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl" }}
              color={"#ededed"}
            >
              About Us
            </Heading>
            <Text color={"#ededed"}>
              Alex loved cars for as long as he can remember. Now he shares that
              passion and care for them with all of his clients.
            </Text>
            <Flex
              flexDir={"row"}
              gap={2}
              alignItems={"center"}
              width={"100%"}
              maxWidth={"conta"}
              justifyContent={"center"}
            >
              <Flex
                flexDir={"column"}
                alignItems={"center"}
                gap={2}
                hideBelow={"lg"}
              >
                <Image asChild borderRadius={16} maxHeight={"316px"}>
                  <NextImage
                    src={foamTerminate}
                    alt="Foam Terminator"
                    width={480}
                    height={320}
                  />
                </Image>
                <Image
                  asChild
                  borderRadius={16}
                  maxWidth={"480px"}
                  maxHeight={"316px"}
                >
                  <NextImage
                    src={cleanTerminate}
                    alt="Clean Terminator"
                    width={480}
                    height={320}
                  />
                </Image>
              </Flex>

              <Image asChild borderRadius={16}>
                <NextImage
                  src={alexAndNico}
                  alt="Alex and Nico"
                  width={480}
                  height={320}
                />
              </Image>
            </Flex>
            <Text color={"#ededed"}>Meet Alex and his assistant Nico!</Text>
          </Flex>
        </Box>
      ),
    },

    {
      id: "sect-gallery",
      title: "Gallery",
      content: (
        <Box
          key="sect-gallery"
          as={"section"}
          p={4}
          justifyContent={"center"}
          textAlign={"center"}
          bg={"black"}
        ></Box>
      ),
    },
  ];
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <header>
        <MainHeader />
      </header>
      <Box as="main" flex="1" w="100%" bg="#ededed">
        <Container
          p={2}
          maxW={"vw"}
          height={"auto"}
          // gap={2}
          display={"flex"}
          flexDir={"column"}
        >
          {sections.map((section) => section.content)}
        </Container>
      </Box>
      <footer>
        <Box bg="black" p={4}>
          project-detailing.inc © {new Date().getFullYear()}
        </Box>
      </footer>
    </Box>
  );
}
