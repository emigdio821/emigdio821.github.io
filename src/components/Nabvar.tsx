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
          backdropFilter: "blur(20px)",
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
                    transform: "translateY(-1px)",
                    background: "transparent",
                  }}
                  colorScheme={useColorModeValue("inherit", "WhiteAlpha.900")}
                >
                  Emigdio<b>Torres</b>
                </Button>
              </NavLink>
            </Flex>
          </Box>
          <Flex alignItems={"center"}>
            <NavLink to="/resume">
              <Button marginLeft="2" variant="solid">
                Resume
              </Button>
            </NavLink>
            <ThemeSwitcher />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
