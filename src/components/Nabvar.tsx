import { NavLink } from "react-router-dom";
import { BiCoffee } from "react-icons/bi";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <>
      <Box
        px={4}
        as="nav"
        w="100%"
        zIndex={1}
        position="fixed"
        css={{
          backdropFilter: "blur(10px)",
        }}
        bg={useColorModeValue("#fbfbfb80", "#21212190")}
      >
        <Flex
          h={16}
          maxW="4xl"
          m={[0, "auto"]}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Flex alignItems={"center"}>
              <NavLink to="/">
                <Button
                  size="lg"
                  variant="link"
                  leftIcon={<BiCoffee />}
                  _hover={{
                    transform: "translateY(-2px)",
                    background: "transparent",
                  }}
                  color={useColorModeValue("black", "white")}
                  _active={{ transform: "translateY(0)" }}
                >
                  Emigdio<b>Torres</b>
                </Button>
              </NavLink>
            </Flex>
          </Box>
          <Flex alignItems={"center"}>
            <Button
              size="sm"
              to="/resume"
              as={NavLink}
              bg="#ECF5FB"
              color="#333"
              variant="solid"
              _hover={{
                bg: "#D7EAF7",
                boxShadow: "lg",
                transform: "translateY(-2px)",
              }}
              _activeLink={{ bg: "#D7EAF7" }}
              _active={{ transform: "translateY(0)" }}
            >
              Resume
            </Button>
            <ThemeSwitcher />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
