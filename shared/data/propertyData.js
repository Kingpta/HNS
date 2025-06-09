// Agents data
export const agents = [
  { 
    id: "a1", 
    name: "Adeniji Odunola", 
    phone: "123-456-7890",
    profileImage: require("../../images/pic1.jpeg"),
    specialization: "Residential",
    rating: 4.8
  },
  { 
    id: "a2", 
    name: "Akerele Abiola", 
    phone: "987-654-3210",
    profileImage: require("../../images/pic2.jpeg"),
    specialization: "Commercial",
    rating: 4.5
  },
  { 
    id: "a3", 
    name: "Baby Scott", 
    phone: "555-123-4567",
    profileImage: require("../../images/pic3.jpeg"),
    specialization: "Luxury",
    rating: 4.9
  }
];

// Properties data
export const properties = [
  {
    id: 1,
    image: require("../../images/pic1.jpeg"),
    price: 179,
    location: "First Gate, Ikorodu, opposite fastech",
    description: "2 bedroom, pop ceiling, runway",
    agentId: "a1",
    area: "First Gate",
    featured: true,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Kitchen", "Parking", "Security"]
  },
  {
    id: 2,
    image: require("../../images/pic2.jpeg"),
    price: 200,
    location: "Second Gate, Ikorodu, opposite fastech",
    description: "3 bedroom, pop ceiling, runway",
    agentId: "a2",
    area: "Second Gate",
    featured: true,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Kitchen", "Parking", "Security", "Swimming Pool"]
  },
  {
    id: 3,
    image: require("../../images/pic3.jpeg"),
    price: 150,
    location: "Third Gate, Ikorodu, opposite fastech",
    description: "1 bedroom, pop ceiling, runway",
    agentId: "a3",
    area: "First Gate",
    featured: false,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Kitchen", "Security"]
  },
  {
    id: 4,
    image: require("../../images/pic4.jpeg"),
    price: 300,
    location: "Fourth Gate, Ikorodu, opposite fastech",
    description: "4 bedroom, pop ceiling, runway",
    agentId: "a1",
    area: "Second Gate",
    featured: true,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Kitchen", "Parking", "Security", "Gym"]
  },
  {
    id: 5,
    image: require("../../images/pic5.jpeg"),
    price: 250,
    location: "Fifth Gate, Ikorodu, opposite fastech",
    description: "5 bedroom, pop ceiling, runway",
    agentId: "a2",
    area: "First Gate",
    featured: false,
    bedrooms: 5,
    bathrooms: 3,
    amenities: ["Kitchen", "Parking", "Security", "Garden"]
  },
  {
    id: 6,
    image: require("../../images/pic1.jpeg"),
    price: 220,
    location: "First Gate, Ikorodu, near market",
    description: "3 bedroom, modern design",
    agentId: "a3",
    area: "First Gate",
    featured: true,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Kitchen", "Parking", "Security", "Balcony"]
  },
  {
    id: 7,
    image: require("../../images/pic2.jpeg"),
    price: 185,
    location: "Second Gate, Ikorodu, main road",
    description: "2 bedroom, newly built",
    agentId: "a1",
    area: "Second Gate",
    featured: false,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Kitchen", "Security", "Garden"]
  }
];

// Helper functions
export const getAgentById = (id) => {
  return agents.find(agent => agent.id === id);
};

export const getPropertiesByArea = (area) => {
  return properties.filter(property => property.area === area);
};

export const getPropertiesByAgent = (agentId) => {
  return properties.filter(property => property.agentId === agentId);
};

export const getRecommendedProperties = () => {
  return properties.filter(property => property.featured);
};

export const getFirstGateProperties = () => {
  return getPropertiesByArea("First Gate");
};

export const getSecondGateProperties = () => {
  return getPropertiesByArea("Second Gate");
};

// Function to get property with agent details included
export const getPropertyWithAgentDetails = (propertyId) => {
  const property = properties.find(p => p.id === propertyId);
  if (!property) return null;
  
  const agent = getAgentById(property.agentId);
  return {
    ...property,
    agent
  };
};