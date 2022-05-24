import { theme, ChakraProvider, Box, Container } from "@chakra-ui/react";
import { Navbar } from "./components/Nabvar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Box px={4} pt={"64px"}>
      <Container maxW="8xl" m={[0, "auto"]} p={0}>
        Main Content
      </Container>
    </Box>
  </ChakraProvider>
);
