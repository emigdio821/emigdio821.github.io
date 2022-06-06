import theme from "lib/theme";
import Navbar from "components/Nabvar";
import Footer from "components/Footer";
import AppdRoutes from "components/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { ScrollObserver } from "context/ScrollObserver";
import { Box, ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ScrollObserver>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Box
            minH={{ base: "calc(100vh - 222px)", sm: "calc(100vh - 150px)" }}
          >
            <AppdRoutes />
          </Box>
          <Footer />
        </ChakraProvider>
      </BrowserRouter>
    </ScrollObserver>
  );
}
