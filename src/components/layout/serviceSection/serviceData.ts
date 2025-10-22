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

export const services = [
  {
    title: "Stage 1",
    services: stage1Services,
    price: "2 Door: $120; 4 Door: $140; Small SUV/Truck: $150; SUV/Truck: $170",
  },
  {
    title: "Stage 2",
    services: stage2Services,
    price: "2 Door: $250; 4 Door: $300; Small SUV/Truck: $375; SUV/Truck: $450",
  },
  {
    title: "Wash and Wax",
    services: [{ descriptions: stage2Services[0].descriptions }],
    price: "2 Door: $120; 4 Door: $140; Small SUV/Truck: $160; SUV/Truck:$200",
  },
  {
    title: "Deep Interior Detailing",
    services: [{ descriptions: stage2Services[1].descriptions }],
    price: "2 Door: $250; 4 Door: $300; Small SUV/Truck: $375; SUV/Truck:$450",
  },
  { title: "Additional Services", services: otherServices },
];
