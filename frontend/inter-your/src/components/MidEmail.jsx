import { Button, HStack, Input } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const MidEmail = () => {
  return (
    <HStack
      bg="white"
      p={2}
      borderRadius="none"
      boxShadow="2xl"
      w="100%"
      maxW="600px"
      gap={0}
    >
      <HStack flex="1" px={3}>
        <EmailIcon color="gray.500" />
        <Input
          placeholder="Enter your email address"
          border="none"
          _focus={{ boxShadow: "none" }}
        />
      </HStack>

      <Button
        bg="black"
        color="white"
        px={6}
        borderRadius="none"
        _hover={{ bg: "gray.800" }}
      >
        Subscribe
      </Button>
    </HStack>
  );
};

export default MidEmail;