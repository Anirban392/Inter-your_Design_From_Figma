
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  
} from "@chakra-ui/react";
import ReusableAccordion from "./ReusableAccordion";
const data = [
  {
    title: "Living Room Interior Design",
    content: "A well-designed living room blends comfort, functionality, and style. Start with a neutral color palette for walls and larger furniture, then add personality through cushions, rugs, and artwork. Choose a comfortable sofa as the focal point, paired with a coffee table and accent chairs for balance. Good lighting is essential—combine natural light with floor lamps and warm ambient fixtures. Incorporate storage like shelves or cabinets to keep the space organized. Add indoor plants for freshness and texture. Keep pathways clear for easy movement, and ensure the layout encourages conversation, making the room both inviting and practical for everyday living.",
  },
  {
    title: "Commercial Office Room Interior Design",
    content: "A commercial office interior should balance professionalism, comfort, and efficiency. Use a clean, modern layout with ergonomic furniture to support productivity. Neutral colors with subtle accents create a focused atmosphere, while glass partitions maintain openness. Proper lighting—natural and artificial—enhances visibility and mood. Incorporate smart storage solutions to reduce clutter. Add greenery for a refreshing touch. Ensure flexible spaces for collaboration and quiet zones for concentration, creating a functional and visually appealing work environment"

  }
  
];
const LearnMore = () => {
  return (
    <Box bg="#f5f5f5" px={10} py={16}>
      <Flex align="center" justify="space-between" gap={10}>
        
        {/* LEFT SIDE */}
        <Box maxW="50%">
          
  
  {/* First Image (RIGHT) */}
  <Image
    src="https://i.pinimg.com/564x/d4/e0/17/d4e017893f0e8824e20a6ebe3a58724e.jpg"
    alt="interior"
    w="800px"
    ml="auto"
  />

          {/* STATS */}
         
        </Box>

        {/* RIGHT SIDE */}
        <Box position="relative" w="600px" h="500px">
  
  {/* Top Image (move RIGHT) */}
 <Box w="600px" position="relative">
 <Text fontSize="5xl" fontWeight="bold" lineHeight="1.1">
           Designing Your Dream With Brilliance
          </Text>

          <Text mt={6} color="gray.600" fontSize="md">
           Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience
          </Text>
        <ReusableAccordion items={data} />
          <Button
            mt={8}
            bg="gray.900"
            color="white"
            px={8}
            py={6}
            borderRadius="sm"
            _hover={{ bg: "gray.700" }}
          >
            Learn More
          </Button>

        </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default LearnMore;









