
import {
  Box,
  Flex,
  Text,
 
  Image
  
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const Steps = () => {
  return (
    <Box bg="#f5f5f5" px={10} py={16}>
      <Flex align="center" justify="space-between" gap={10}>
        
        {/* LEFT SIDE */}
        <Box maxW="50%">
          <Text fontSize="5xl" fontWeight="bold" lineHeight="1.1" mb="50px">
            Designing Your Dream in Three Simple Steps
          </Text>

<Flex gap={8}>
      <Box mr="5px">
            <Flex direction="column" align="center">
  <FontAwesomeIcon icon={faRocket} size="2x" />

  <Box
    w="2px"
    h="40px"
    bg="gray"
    mt={2}
    mb={2}
  />
  <FontAwesomeIcon icon={faLightbulb} size="2x" />
  
  <Box
    w="2px"
    h="40px"
    bg="gray"
    mt={2}
    mb={2}
  />

  <FontAwesomeIcon icon={faCheck} size="2x" />
</Flex>
            </Box>
          {/* STATS */}
          <Box>
            <Box>
              <Text fontSize="1.5xl" fontWeight="bold" mb="5px">Start Project</Text>
              <Text fontSize ="1xl" color="gray.500" mb="10px">Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience</Text>
            </Box>

            <Box>
              <Text fontSize="1.5xl" fontWeight="bold" mb="5px">Craft</Text>
              <Text  fontSize ="1xl" color="gray.500" mb="10px">Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space</Text>
            </Box>

            <Box>
              <Text fontSize="1.5xl" fontWeight="bold" mb="5px">Execute</Text>
              <Text fontSize ="1xl" color="gray.500" mb="10px">Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space</Text>
            </Box>
          </Box>
          </Flex>
      </Box>

        {/* RIGHT SIDE */}
        <Box position="relative" w="600px" h="500px">
  
  {/* Top Image (move RIGHT) */}
 <Box w="600px">
  
  {/* First Image (RIGHT) */}
  <Image
    src="https://img.freepik.com/free-photo/picture-frame-with-abstract-art-by-pink-velvet-armchair_53876-128125.jpg?semt=ais_hybrid&w=740&q=80"
    alt="interior"
    w="500px"
    h ="600px"
    
  />

  

  {/* Decoration Box (BEHIND) */}
  
</Box>

          {/* Arrow Box */}
          

        </Box>
      </Flex>
    </Box>
  );
};

export default Steps;