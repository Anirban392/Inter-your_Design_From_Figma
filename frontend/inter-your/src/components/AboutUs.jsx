import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Avatar,
  IconButton,
} from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const TestimonialCard = ({ text, name, location, img }) => {
  return (
    <Box
      bg="#1a1a1a"
      color="white"
      p={6}
      h="250px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Text fontSize="3xl">“</Text>

      <Text fontSize="sm" color="gray.300">
        {text}
      </Text>

      <HStack mt={4}>
        <Avatar size="sm" src={img} />
        <Box>
          <Text fontWeight="bold" fontSize="sm">
            {name}
          </Text>
          <Text fontSize="xs" color="gray.400">
            {location}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

const AboutUs = () => {
  const bgColor = "#f5f5f5"; // shared color

  return (
    <Box bg={bgColor} py={20} px={10}>
      <Flex
        position="relative"
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
        gap={10}
        flexWrap="wrap"
      >
        {/* LEFT IMAGE */}
        <Box zIndex={0}>
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="interior"
            w="550px"
            h="400px"
            objectFit="cover"
          />

          {/* ARROWS */}
          <HStack mt={4}>
            <IconButton
              className="prev-btn"
              icon={<ChevronLeftIcon />}
              aria-label="Previous"
            />
            <IconButton
              className="next-btn"
              icon={<ChevronRightIcon />}
              aria-label="Next"
            />
          </HStack>
        </Box>

        {/* RIGHT SIDE */}
        <Box flex="1" minW="300px" zIndex={1}>
          <Text fontSize="3xl" fontWeight="bold" mb={10}>
            What Our Customers <br /> Say About Us
          </Text>

          {/* SAME COLOR BOX */}
          <Box
            bg={bgColor}
            p={8}
            ml={["0", "-200px"]}
            zIndex={1}
           
          >
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".next-btn",
                prevEl: ".prev-btn",
              }}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
            >
              <SwiperSlide>
                <TestimonialCard
                  text="Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations."
                  name="Sophie Carter"
                  location="New York, USA"
                  img="https://randomuser.me/api/portraits/women/44.jpg"
                />
              </SwiperSlide>

              <SwiperSlide>
                <TestimonialCard
                  text="Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism."
                  name="James Bennett"
                  location="Toronto, Canada"
                  img="https://randomuser.me/api/portraits/men/32.jpg"
                />
              </SwiperSlide>

              <SwiperSlide>
                <TestimonialCard
                  text="Highly professional and creative team. Loved the final output!"
                  name="Olivia Smith"
                  location="London, UK"
                  img="https://randomuser.me/api/portraits/women/68.jpg"
                />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutUs;