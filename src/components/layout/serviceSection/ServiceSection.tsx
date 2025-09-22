import { Box, Flex, Heading, List } from "@chakra-ui/react";

export const ServiceSection = () => {
  return (
    <Box
      key="sect-about"
      as={"section"}
      p={4}
      justifyContent={"center"}
      textAlign={"center"}
      bg={"black"}
    >
      <Heading
        as={"h2"}
        size={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl" }}
        color={"#ededed"}
      >
        Our Services
      </Heading>

      <Flex flexDirection={{ base: "column", lg: "row" }} gap={4}>
        <Box borderWidth={2} borderColor={"#d31920"} px={16} borderRadius={16}>
          <Heading
            as={"h3"}
            size={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
            color={"#ededed"}
          >
            Stage 1
          </Heading>
          <Flex direction={{ base: "column", lg: "row" }} gap={2}>
            <Box>
              <Heading
                as={"h4"}
                size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
              >
                Interior
              </Heading>
              <List.Root>
                <List.Item>Item 1</List.Item>
                <List.Item>Item 2</List.Item>
              </List.Root>
            </Box>
            <Box>
              <Heading
                as={"h4"}
                size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
              >
                Exterior
              </Heading>
              <List.Root>
                <List.Item>Item 1</List.Item>
                <List.Item>Item 2</List.Item>
              </List.Root>
            </Box>
          </Flex>
        </Box>

        <Box borderWidth={2} borderColor={"#d31920"} px={16} borderRadius={16}>
          <Heading
            as={"h3"}
            size={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
            color={"#ededed"}
          >
            Stage 2
          </Heading>
          <Flex direction={{ base: "column", lg: "row" }} gap={2}>
            <Box>
              <Heading
                as={"h4"}
                size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
              >
                Interior
              </Heading>
              <List.Root>
                <List.Item>Item 1</List.Item>
                <List.Item>Item 2</List.Item>
              </List.Root>
            </Box>
            <Box>
              <Heading
                as={"h4"}
                size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
              >
                Exterior
              </Heading>
              <List.Root>
                <List.Item>Item 1</List.Item>
                <List.Item>Item 2</List.Item>
              </List.Root>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
