import { Box, Heading } from "@chakra-ui/react";

export default function GallerySection() {
  return (
    <Box
      as={"section"}
      p={4}
      justifyContent={"center"}
      textAlign={"center"}
      bg={"black"}
      height={"vh"}
    >
      <Heading
        size={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl" }}
        color={"#ededed"}
      >
        Our Work
      </Heading>
    </Box>
  );
}
