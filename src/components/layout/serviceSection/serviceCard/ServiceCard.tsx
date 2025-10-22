import {
  Box,
  Flex,
  Heading,
  List,
  Text,
  BoxProps,
  VStack,
} from "@chakra-ui/react";

type PriceTypes = {
  vehicleType: string;
  price: string;
};
type ServiceTypes = {
  type?: string;
  descriptions?: string[];
  individualPrices?: PriceTypes[];
};
type ServiceCardProps = BoxProps & {
  title: string;
  services: ServiceTypes[];
  packagePrices?: PriceTypes[];
};

export const ServiceCard = ({
  title,
  services,
  packagePrices,
  ...rest
}: ServiceCardProps) => {
  const headingId = `service-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Box
      as={"article"}
      aria-label={headingId}
      display={"flex"}
      flexDirection={"column"}
      gap={4}
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
          id={headingId}
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
          {services.map(({ type, descriptions, individualPrices }) => (
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
              {individualPrices && (
                <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
                  {individualPrices.map(({ vehicleType, price }) => (
                    <Text key={vehicleType} color={"#d31920"}>
                      {vehicleType}: {price}
                    </Text>
                  ))}
                </Flex>
              )}
            </Box>
          ))}
        </Flex>
      </VStack>

      {packagePrices && (
        <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
          {packagePrices.map(({ vehicleType, price }) => (
            <Text key={vehicleType} color={"#d31920"}>
              {vehicleType}: {price}
            </Text>
          ))}
        </Flex>
      )}
    </Box>
  );
};
