import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import LearnMore from "./components/LearnMore";
import Steps from "./components/Steps";
import AboutUs from "./components/AboutUs";
import Subscribe from "./components/Subscribe";
import EmailFooter from "./components/EmailFooter";
import MidEmail from "./components/MidEmail";
import { Box } from "@chakra-ui/react";
function App() {
  return (

    <>
      <Navbar />
      <Hero />
      <OurServices />
      <LearnMore />
      <Steps />
      <AboutUs />
     <Box position="relative">
  <Subscribe />

  <Box
    position="absolute"
    left="50%"
    transform="translateX(-50%)"
    bottom="-25px"   // 👈 adjust this value
    width="100%"
    display="flex"
    justifyContent="center"
  >
    <MidEmail />
  </Box>
</Box>
      <EmailFooter />
    </>
  );
}

export default App;