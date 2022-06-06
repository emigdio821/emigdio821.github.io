import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ScrollObserver } from "context/ScrollObserver";
import Navbar from "components/Nabvar";
import theme from "lib/theme";
import AppdRoutes from "components/AppRoutes";
import Footer from "components/Footer";
// import ScrollTop from "components/ScrollTop";

export default function App() {
  return (
    <ScrollObserver>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Box minH="calc(100vh - 150px)">
            <AppdRoutes />
          </Box>
          <Footer />
          {/* <ScrollTop /> */}
        </ChakraProvider>
      </BrowserRouter>
    </ScrollObserver>
  );
}
