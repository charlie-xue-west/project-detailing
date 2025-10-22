import {
  AboutSection,
  GallerySection,
  MainHeader,
  ServiceSection,
} from "@/components";
import { Box, Container } from "@chakra-ui/react";

export default function Home() {
  const sections = [
    {
      id: "sect-service",
      title: "Services",
      content: <ServiceSection key="sect-service" />,
    },
    {
      id: "sect-about",
      title: "About",
      content: <AboutSection key="sect-about" />,
    },

    {
      id: "sect-gallery",
      title: "Gallery",
      content: <GallerySection key="sect-gallery" />,
    },
  ];
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <header>
        <MainHeader />
      </header>
      <Box as="main" flex="1" w="100%" bg="#ededed">
        <Container
          p={1}
          maxW={"vw"}
          height={"auto"}
          gap={1}
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
