import { Box, Flex, Heading, List } from "@chakra-ui/react";
type ServiceTypes = {
  type: string;
  descriptions?: string[];
  price?: string;
};
type ServiceCardProps = {
  title: string;
  services?: ServiceTypes[];
  price?: string;
};

export const ServiceCard = ({ title, services, price }: ServiceCardProps) => {
  return (
    <Box
      borderWidth={2}
      borderColor={"#d31920"}
      px={{ base: 8, md: 10, lg: 16 }}
      py={{ base: 6, md: 8, lg: 10 }}
      maxWidth={"800px"}
      height={{ base: "auto", lg: "420px" }}
      width={"100%"}
    >
      <Heading
        as={"h3"}
        size={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
        color={"#ededed"}
        mb={8}
      >
        {title}
      </Heading>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={8}
        justifyContent={"space-between"}
      >
        {services?.map(({ type, descriptions }) => (
          <Box key={type}>
            <Heading
              as={"h4"}
              size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
            >
              {type}
            </Heading>
            {descriptions && (
              <List.Root textAlign={"start"}>
                {descriptions.map((description) => (
                  <List.Item key={description}>{description}</List.Item>
                ))}
              </List.Root>
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
