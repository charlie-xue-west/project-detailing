import { AboutSection, MainHeader, ServiceSection } from "@/components";
import { Box, Container, Heading } from "@chakra-ui/react";

export default function Home() {
  const sections = [
    {
      id: "sect-service",
      title: "Services",
      content: <ServiceSection />,
    },
    {
      id: "sect-about",
      title: "About",
      content: <AboutSection />,
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
        >
          <Heading
            size={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl" }}
            color={"#ededed"}
          >
            Gallery
          </Heading>
        </Box>
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
          gap={2}
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
