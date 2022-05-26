import { ChakraProvider, Container } from "@chakra-ui/react";
import { Navbar } from "./components/Nabvar";
import { BrowserRouter } from "react-router-dom";
import theme from "./lib/theme";
import { AppdRoutes } from "./components/AppRoutes";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Container py={4} px={{ base: 4, md: 0 }} pt={20} >
          <AppdRoutes />
        </Container>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};
