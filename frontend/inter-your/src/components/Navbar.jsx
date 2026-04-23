import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Image,
  Spacer,
  ButtonGroup,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';

const Navbar = ({imageProps}) => {
  const imageHeight = useBreakpointValue({ base: 30, md: 30 });
  return (
    <Box bg="#f5f5f5" px={6} py={4} color="gray.900" boxShadow="sm" position="sticky" top="0" zIndex="1000">
      <Flex align="center">
        
        {/* Logo */}
         <Image           marginRight="4px"
                          height={imageHeight}
                          objectFit="contain"
                          src="/logo_fin.png"
                          alt="Logo"
                          {...imageProps}
                        />
        <Text fontSize="xl" fontWeight="bold">
          
           Inter-your
        </Text>

        <Spacer />

        {/* Menu */}
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Support</Link>
        </HStack>

        <Spacer />

        {/* Buttons */}
        <ButtonGroup spacing={4}>
          {/* Login Button */}
         
          {/* Signup Button */}
          <Button bg="gray.900" color="white" borderRadius="none" px={6}>
  Sign up
</Button>
        </ButtonGroup>

      </Flex>
    </Box>
  );
};

export default Navbar;