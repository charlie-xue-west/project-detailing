import {
  Box,
  Flex,
  Heading,
  List,
  Text,
  BoxProps,
  VStack,
} from "@chakra-ui/react";
type ServiceTypes = {
  type?: string;
  descriptions?: string[];
  price?: string;
};
type ServiceCardProps = BoxProps & {
  title: string;
  services: ServiceTypes[];
  price?: string;
};

export const ServiceCard = ({
  title,
  services,
  price,
  ...rest
}: ServiceCardProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      borderWidth={2}
      borderColor={"white"}
      px={{ base: 8 }}
      py={{ base: 6 }}
      height={"100%"}
      width={"100%"}
      {...rest}
    >
      <VStack>
        <Heading
          as={"h3"}
          size={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
          color={"#d31920"}
        >
          {title}
        </Heading>

        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 4, md: 8 }}
          justifyContent={"space-between"}
        >
          {services.map(({ type, descriptions, price }) => (
            <Box key={type || title}>
              {type && (
                <Heading
                  as={"h4"}
                  size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
                >
                  {type}
                </Heading>
              )}
              {descriptions && (
                <List.Root textAlign={"start"}>
                  {descriptions.map((description) => (
                    <List.Item key={description}>{description}</List.Item>
                  ))}
                </List.Root>
              )}
              {price && <Text color={"#d31920"}>{price}</Text>}
            </Box>
          ))}
        </Flex>
      </VStack>

      {price && <Text color={"#d31920"}>{price}</Text>}
    </Box>
  );
};
