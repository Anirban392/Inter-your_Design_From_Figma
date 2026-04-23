import {
  Box,
  Flex,
  Text,
  Button,
  Image
  
} from "@chakra-ui/react";



  
const Hero = () => {
  
  


  return (
    
    <Box bg="#f5f5f5" px={10} py={16}>
      <Flex align="center" justify="space-between" gap={10}>
        
        {/* LEFT SIDE */}
        <Box maxW="50%">
          <Text fontSize="6xl" fontWeight="bold" lineHeight="1.1">
            Interior Design
          </Text>

          <Text mt={6} color="gray.600" fontSize="md">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge
            modern Innovation, Allowing you to transform your living spaces
            into the epitome of luxury and sophistication
          </Text>

          <Button
            mt={8}
            bg="gray.900"
            color="white"
            px={8}
            py={6}
            borderRadius="none"
            _hover={{ bg: "gray.700" }}
          >
            Start Project
          </Button>
          
          {/* STATS */}
          <Flex mt={12} gap={16}>
            <Box>
              <Text fontSize="4xl" fontWeight="bold">400+</Text>
              <Text fontSize ="2xl" color="gray.500">Project Complete</Text>
            </Box>

            <Box>
              <Text fontSize="4xl" fontWeight="bold">600+</Text>
              <Text  fontSize ="2xl" color="gray.500">Satisfied Clients</Text>
            </Box>

            <Box>
              <Text fontSize="4xl" fontWeight="bold">100+</Text>
              <Text fontSize ="2xl" color="gray.500">Unique Styles</Text>
            </Box>
          </Flex>
        </Box>

        {/* RIGHT SIDE */}
        <Box position="relative" w="600px" h="500px">
  
  {/* Top Image (move RIGHT) */}
 <Box w="600px" position="relative">
  
  {/* First Image (RIGHT) */}
  <Image
    src="https://images.unsplash.com/photo-1615873968403-89e068629265"
    alt="interior"
    w="500px"
    ml="auto"
  />

  {/* Second Image (LEFT + ON TOP) */}
  <Image
    src="https://images.unsplash.com/photo-1618220179428-22790b461013"
    alt="sofa"
    w="400px"
    h="250px"
    mt={6}
    mr="auto"
    position="relative"   // 👈 needed for zIndex
    zIndex={2}            // 👈 above box
  />

  {/* Decoration Box (BEHIND) */}
  <Box
    position="absolute"   // 👈 take it out of flow
    top="290px"
    left="-18px"
    border="2px solid gray"
    w="180px"
    h="180px"
    zIndex={1}            // 👈 below image
  />
</Box>

          {/* Arrow Box */}
          <Box
            position="absolute"
            bottom="0"
            right="-20px"
            bg="gray.900"
            color="white"
            p={4}
          >
            ↓
          </Box>

        </Box>
      </Flex>
    </Box>
  );
 
};


export default Hero;