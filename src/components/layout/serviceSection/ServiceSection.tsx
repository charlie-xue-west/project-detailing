import { Box, Flex, Heading, List } from "@chakra-ui/react";
import { ServiceCard } from "./serviceCard/ServiceCard";
import { title } from "process";

export const ServiceSection = () => {
  const stage1Services = [
    {
      type: "Exterior",
      descriptions: [
        "Premium hand wash and towel dry",
        "Deep clean wheels, tires, and fender liners",
        "Fuel door and door jamb cleaning",
        "Crystal-clear glass and mirror finish",
        "Tire shine and conditioning treatment",
      ],
    },
    {
      type: "Interior",
      descriptions: [
        "Full interior vacuum (seats, carpets, mats, and trunk)",
        "Glass and mirror cleaning",
        "Dashboard, console, and panel wipe down",
        "Clean door jambs and entry touch points",
      ],
    },
  ];

  const stage2Services = [
    {
      type: "Exterior",
      descriptions: [
        "Premium hand wash and towel dry",
        "Deep clean wheels, tires, and fender liners",
        "Fuel door and door jamb cleaning",
        "Crystal-clear glass and mirror finish",
        "Tire shine and conditioning treatment",
        "Clay bar treatment for a smooth paint finish",
        "Wax or sealant application for shine and protection",
        "Dress tires and fender liners",
        "Polish exhaust tips",
        "Restore and dress exterior trim",
      ],
    },
    {
      type: "Interior",
      descriptions: [
        "Full interior vacuum (seats, carpets, mats, and trunk)",
        "Glass and mirror cleaning",
        "Dashboard, console, and panel wipe down",
        "Clean door jambs and entry touch points",
        "Steam clean plastic and vinyl panels",
        "Shampoo and steam clean carpets and fabric seats",
        "Clean and condition leather surfaces",
      ],
    },
  ];

  const otherServices = [
    { type: "Engine Bay Cleaning", price: "Small/Medium: $50.00; Large: $80" },
    {
      type: "Headlight Restoration",
      price: "Small/Medium: $60.00; Large: $80",
    },
  ];

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
          <ServiceCard title="Additional Services" services={otherServices} />
        </Flex>
      </Flex>
    </Box>
  );
};
