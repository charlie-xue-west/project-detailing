import { ServiceCard } from "@/components/services";
import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { services } from "./serviceData";

export default function ServicesPage() {
  return (
    <Box
      key="sect-about"
      as={"section"}
      p={4}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      bg={"black"}
      height={"vh"}
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
          gap={4}
          justifyContent={"center"}
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              services={service.services}
              packagePrices={service.packagePrices}
              gridColumn={i === services.length - 1 ? "1 / -1" : "auto"}
            />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
