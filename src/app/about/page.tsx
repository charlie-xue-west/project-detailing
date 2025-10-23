import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import NextImage from "next/image";
import alexAndNico from "@/assets/about-us-desktop.jpeg";
import foamTerminate from "@/assets/foam-terminate.jpg";
import cleanTerminate from "@/assets/clean-terminate.jpg";

export default function AboutPage() {
  return (
    <Box
      as={"section"}
      p={4}
      justifyContent={"center"}
      textAlign={"center"}
      bg={"black"}
      height={"vh"}
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
          Our Story
        </Heading>
        <Text color={"#ededed"}>
          Alex has loved cars since he was a boy, now he shares that same
          passion and care with all of his clients.
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
  );
}
