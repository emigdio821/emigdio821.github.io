import { Box, ChakraProvider } from "@chakra-ui/react";
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
        <Box minH="calc(100vh - 140px)">
          <AppdRoutes />
        </Box>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};
