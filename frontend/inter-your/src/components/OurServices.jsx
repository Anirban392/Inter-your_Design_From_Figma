import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faDoorClosed } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
const OurServices = () => {
  return (
    <Box bg="#f5f5f5" w="100%" py={16} px={10}>  {/* 👈 full width */}
      
      {/* Heading */}
      <Box mb={10}>   {/* 👈 FIXED (Box not box) */}
        <Flex align="center">
  <Box w="120px" h="2px" bg="black" mr={4} />  {/* left line */}

  <Text
    fontSize="5xl"
    fontWeight="bold"
    lineHeight="1.1"
  >
    Our Services
  </Text>
</Flex>
      </Box>

      {/* Services */}
     <Flex justify="space-between" wrap="wrap" gap={10}>
  
  <Box flex="1" minW="250px" maxW="300px">
    
    
    <Text fontSize="3xl" fontWeight="bold"><FontAwesomeIcon icon={faLightbulb} />Lighting Design</Text>
    
    <Text color="gray.500">Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere</Text>
  </Box>

  <Box flex="1" minW="250px" maxW="300px">
    <Text fontSize="3xl" fontWeight="bold"><FontAwesomeIcon icon={faDoorClosed} />Indoor Design</Text>
    <Text color="gray.500">
      From concept to completion, we oversee every detail to bring your vision to life efficiently
    </Text>
  </Box>

  <Box flex="1" minW="250px" maxW="300px">
    <Text fontSize="3xl" fontWeight="bold"><FontAwesomeIcon icon={faDoorOpen} />Outdoor Design</Text>
    <Text color="gray.500">Celebrate the changing seasons with our seasonal outdoor decor services</Text>
  </Box>

</Flex>

    </Box>
  );
};

export default OurServices;