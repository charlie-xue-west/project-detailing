import { Box, Grid, Heading } from "@chakra-ui/react";

export default function GallerySection() {
  return (
    <Box
      as={"section"}
      p={4}
      justifyContent={"center"}
      textAlign={"center"}
      bg={"black"}
      height={"100%"}
    >
      <Heading
        size={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl" }}
        color={"#ededed"}
        mb={8}
      >
        Our Work
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
        justifyContent={"center"}
      >
        {/* Gallery items would go here */}
        <Box bg={"#333"} borderRadius={"md"}></Box>
        <Box bg={"#333"} height={"200px"} borderRadius={"md"}></Box>
        <Box bg={"#333"} height={"200px"} borderRadius={"md"}></Box>
        <Box bg={"#333"} height={"200px"} borderRadius={"md"}></Box>
        <Box bg={"#333"} height={"200px"} borderRadius={"md"}></Box>
        <Box bg={"#333"} height={"200px"} borderRadius={"md"}></Box>
        <Box bg={"#333"} height={"200px"} borderRadius={"md"}></Box>
        <Box bg={"#333"} height={"200px"} borderRadius={"md"}></Box>
        <Box bg={"#333"} height={"200px"} borderRadius={"md"}></Box>
        <Box bg={"#333"} height={"200px"} borderRadius={"md"}></Box>
        <Box bg={"#333"} height={"200px"} borderRadius={"md"}></Box>
        <Box bg={"#333"} height={"200px"} borderRadius={"md"}></Box>
      </Grid>
    </Box>
  );
}
