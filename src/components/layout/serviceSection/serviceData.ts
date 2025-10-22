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
  {
    type: "Engine Bay Cleaning",
    individualPrices: [
      { vehicleType: "Small/Medium", price: "$50.00" },
      { vehicleType: "Large", price: "$80" },
    ],
  },
  {
    type: "Headlight Restoration",
    individualPrices: [
      { vehicleType: "Small/Medium", price: "$60.00" },
      { vehicleType: "Large", price: "$80" },
    ],
  },
];

export const services = [
  {
    title: "Stage 1",
    services: stage1Services,
    packagePrices: [
      { vehicleType: "2 Door", price: "$120" },
      { vehicleType: "4 Door", price: "$140" },
      { vehicleType: "Small SUV/Truck", price: "$150" },
      { vehicleType: "SUV/Truck", price: "$170" },
    ],
  },
  {
    title: "Stage 2",
    services: stage2Services,
    packagePrices: [
      { vehicleType: "2 Door", price: "$250" },
      { vehicleType: "4 Door", price: "$300" },
      { vehicleType: "Small SUV/Truck", price: "$375" },
      { vehicleType: "SUV/Truck", price: "$450" },
    ],
  },
  {
    title: "Wash and Wax",
    services: [{ descriptions: stage2Services[0].descriptions }],
    packagePrices: [
      { vehicleType: "2 Door", price: "$120" },
      { vehicleType: "4 Door", price: "$140" },
      { vehicleType: "Small SUV/Truck", price: "$160" },
      { vehicleType: "SUV/Truck", price: "$200" },
    ],
  },
  {
    title: "Deep Interior Detailing",
    services: [{ descriptions: stage2Services[1].descriptions }],
    packagePrices: [
      { vehicleType: "2 Door", price: "$250" },
      { vehicleType: "4 Door", price: "$300" },
      { vehicleType: "Small SUV/Truck", price: "$375" },
      { vehicleType: "SUV/Truck", price: "$450" },
    ],
  },
  { title: "Additional Services", services: otherServices },
];
