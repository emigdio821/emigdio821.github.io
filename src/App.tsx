import { theme, ChakraProvider, Box, Container } from "@chakra-ui/react";
import { Navbar } from "./components/Nabvar";
import { routes } from "./routes/routes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box px={4} pt={"64px"}>
        <Container maxW="8xl" m={[0, "auto"]} p={0}>
          <Routes>
            {routes.map(({ Component, path }) => (
              <Route
                key={`${path}-route`}
                path={path}
                element={<Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </Container>
      </Box>
    </ChakraProvider>
  </BrowserRouter>
);
