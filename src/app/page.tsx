import { MainHeader } from "@/components";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import NextImage from "next/image";
import alexAndNico from "@/assets/about-us.jpeg";

export default function Home() {
  const sections = [
    {
      id: "sect-service",
      title: "Services",
      content: (
        <section
          key="sect-service"
          style={{ height: "500px", backgroundColor: "yellow" }}
        ></section>
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
          color="black"
          justifyContent={"center"}
          textAlign={"center"}
          borderRadius={8}
          backgroundColor={"gray.100"}
        >
          <Flex flexDir={"column"} gap={4} alignItems={"center"}>
            <Heading as="h2" size="xl">
              About Us
            </Heading>
            <Text>
              Alex loved cars for as long as he can remember. Now he shares that
              passion with all of his clients.
            </Text>
            <Image asChild width={"100%"} borderRadius={8}>
              <NextImage
                src={alexAndNico}
                alt="Alex and Nico"
                width={200}
                height={60}
              />
            </Image>
            <Text>Meet Alex and his assistant Nico!</Text>
          </Flex>
        </Box>
      ),
    },

    {
      id: "sect-gallery",
      title: "Gallery",
      content: (
        <section
          key="sect-gallery"
          style={{ height: "500px", backgroundColor: "blue" }}
        ></section>
      ),
    },
  ];
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <header>
        <MainHeader />
      </header>
      <Box as="main" flex="1" w="100%" bg="black">
        <Container
          p={4}
          maxW={"vw"}
          gap={4}
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
