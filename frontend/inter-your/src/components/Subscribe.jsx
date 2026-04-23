import {
  Box,
  
  Text,
} from "@chakra-ui/react";

const Subscribe = () => {
  return (
    <Box bg="#f5f5f5" py={16}>
  <Box
    maxW="800px"
    mx="auto"
    px={6}
    textAlign="center"
  >
    <Text fontSize="4xl" fontWeight="bold" lineHeight="1.1">
      Subscribe to Our Newsletter for Design Insights
    </Text>

    <Text color="gray.500" mt={4}>
      Be the first to discover trends, inspirations, and special offers as we bring the world of design directly to your inbox
    </Text>
  </Box>
</Box>

      

    
  );
};

export default Subscribe;