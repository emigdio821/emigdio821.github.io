import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import { Navbar } from "./components/Nabvar";
import { BrowserRouter } from "react-router-dom";
import theme from "./lib/theme";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Box p={4} pt={20}>
          <Container maxW="8xl" m={[0, "auto"]} p={0}>
            <AnimatedRoutes />
          </Container>
        </Box>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};
