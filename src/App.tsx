import { ChakraProvider, Container } from "@chakra-ui/react";
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
        <Container py={4} px={{ base: 4, md: 0 }} pt={20}>
          <AnimatedRoutes />
        </Container>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};
