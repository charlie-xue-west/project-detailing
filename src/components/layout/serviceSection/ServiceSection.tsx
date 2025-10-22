import { Box, Flex, Heading, List } from "@chakra-ui/react";
import { ServiceCard } from "./serviceCard/ServiceCard";
import { otherServices, stage1Services, stage2Services } from "./serviceData";

export const ServiceSection = () => {
  const stages = [
    {
      title: "Stage 1",
      services: stage1Services,
      price:
        "2 Door: $120; 4 Door: $140; Small SUV/Truck: $150; SUV/Truck: $170",
    },
    {
      title: "Stage 2",
      services: stage2Services,
      price:
        "2 Door: $250; 4 Door: $300; Small SUV/Truck: $375; SUV/Truck: $450",
    },
  ];
  const additionalServices = otherServices;

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
        <Flex
          direction={"column"}
          gap={4}
          alignItems={"center"}
          justifyContent={"center"}
          maxWidth={{ base: "442px", md: "100%" }}
        >
          <Flex
            flexDirection={{ base: "column", "2xl": "row" }}
            gap={4}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {stages.map((stage) => (
              <ServiceCard
                key={stage.title}
                title={stage.title}
                services={stage.services}
                price={stage.price}
              />
            ))}
          </Flex>
          <ServiceCard
            title="Additional Services"
            services={additionalServices}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
