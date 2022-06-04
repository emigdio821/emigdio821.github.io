import { Box, ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Nabvar";
import { BrowserRouter } from "react-router-dom";
import theme from "./lib/theme";
import { AppdRoutes } from "./components/AppRoutes";
import { Footer } from "./components/Footer";
// import { Fonts } from "components/Fonts";
import { ScrollObserver } from "context/ScrollObserver";

export const App = () => {
  return (
    <ScrollObserver>
      <BrowserRouter>
        {/* <Fonts /> */}
        <ChakraProvider theme={theme}>
          <Navbar />
          <Box minH="calc(100vh - 150px)">
            <AppdRoutes />
          </Box>
          <Footer />
        </ChakraProvider>
      </BrowserRouter>
    </ScrollObserver>
  );
};
