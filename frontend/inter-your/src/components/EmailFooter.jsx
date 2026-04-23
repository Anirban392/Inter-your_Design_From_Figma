'use client'

import React from 'react'
import {
  Box,
  Container,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useBreakpointValue,
} from '@chakra-ui/react'

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

/* Social Button */
const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg="black"
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: 'blackAlpha.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

/* Section Header */
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight="700" fontSize="lg" mb={2} color="white">
      {children}
    </Text>
  )
}

/* Main Component */
const EmailFooter = ({ imageProps, textProps, ...props }) => {
  const imageHeight = useBreakpointValue({ base: 30, md: 30 })
  const textFontSize = useBreakpointValue({ base: 'xl', md: 'sm', xl: '2xl' })

  return (
    <Box w="full" bg="black" color="white">
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          {/* Logo + Social */}
          <Stack spacing={6}>
            <Box>
              <HStack
                as={Link}
                href="#"
                cursor="pointer"
                _hover={{ textDecoration: 'none' }}
                {...props}
              >
                <Image
                  height={imageHeight}
                  objectFit="contain"
                  src="/logo_fin.png"
                  alt="Logo"
                  {...imageProps}
                />
                <Text
                  whiteSpace="nowrap"
                  fontSize={textFontSize}
                  fontWeight="bold"
                  {...textProps}
                >
                  Inter-your
                </Text>
              </HStack>
            </Box>

            <Text fontSize="sm">
             Inter-your, your premier destination
             for luxury and modern interior design
            </Text>

            <Stack direction="row" spacing={6}>
              <SocialButton label="Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          {/* Company */}
          <Stack align="flex-start">
            <ListHeader>Our Services</ListHeader>
            {OurServices1.map((item, index) => (
              <Box key={index} as="a" href={item.href}>
                {item.label}
              </Box>
            ))}
          </Stack>

          {/* Support */}
          <Stack align="flex-start">
            <ListHeader>Our Services</ListHeader>
            {ourServices2.map((item, index) => (
              <Box key={index} as="a" href={item.href}>
                {item.label}
              </Box>
            ))}
          </Stack>

           <Stack align="flex-start">
            <ListHeader>Our Services</ListHeader>
            {ourServices3.map((item, index) => (
              <Box key={index} as="a">
                {item.label}
              </Box>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

/* Data */
const OurServices1 = [
  { label: 'Interior Design', href: '#' },
  { label: 'Outdoor Design', href: '#' },
  { label: 'Lightning Design', href: '#' },
  { label: 'Office Design', href: '#' }
]

const ourServices2 = [
  { label: 'Reviews', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Press inquires', href: '#' }
]

const ourServices3 = [
  { label:'info@inter-your.com'},
  { label:'Design Avenue Cityville, CA 90210 United States'}
]

/* Export */
export default EmailFooter;