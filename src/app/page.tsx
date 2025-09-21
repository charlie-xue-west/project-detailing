import { MainHeader } from "@/components";
import { Box, Container } from "@chakra-ui/react";

export default function Home() {
  const sections = [
    {
      id: "sect-about",
      title: "About",
      content: (
        <section
          key="sect-about"
          style={{ height: "500px", backgroundColor: "red" }}
        ></section>
      ),
    },
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
      <Box as="main" flex="1" w="100%" bg="white">
        <Container p={0} maxW={"vw"}>
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
