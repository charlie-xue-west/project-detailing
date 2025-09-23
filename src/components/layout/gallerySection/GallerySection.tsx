import { Box, Heading } from "@chakra-ui/react";

export const GallerySection = () => {
  return (
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
  );
};
