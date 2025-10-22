import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { ServiceCard } from "./serviceCard/ServiceCard";
import { services } from "./serviceData";

export const ServiceSection = () => {
  return (
    <Box
      key="sect-about"
      as={"section"}
      p={4}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      bg={"black"}
    >
      <Flex flexDirection={"column"} alignItems={"center"} gap={4}>
        <Heading
          as={"h2"}
          size={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl" }}
          color={"#ededed"}
        >
          Our Services
        </Heading>
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "repeat(2, 1fr)",
          }}
          templateRows={{ base: "1fr" }}
          gap={4}
          justifyContent={"center"}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              services={service.services}
              price={service.price}
            />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};
