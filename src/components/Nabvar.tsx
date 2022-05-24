import { NavLink } from "react-router-dom";
import { BiCoffee, BiCodeAlt } from "react-icons/bi";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Box, Flex, Button, useColorModeValue, Link } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <>
      <Box
        px={4}
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue("#ffffff40", "#20202380")}
        css={{ backdropFilter: "blur(10px)" }}
        zIndex={1}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          maxW="8xl"
          m={[0, "auto"]}
        >
          <Box>
            <Flex alignItems={"center"}>
              <NavLink to="/">
                <Button
                  variant="link"
                  colorScheme={useColorModeValue("inherit", "WhiteAlpha.900")}
                  leftIcon={<BiCoffee />}
                  size="lg"
                  _hover={{
                    transform: "translateY(-1px)",
                    background: "transparent",
                  }}
                >
                  Emigdio<b>Torres</b>
                </Button>
              </NavLink>
            </Flex>
          </Box>
          <Flex alignItems={"center"}>
            <Button
              as={Link}
              variant="link"
              href="https://github.com/emigdio821/emigdio821.github.io"
              isExternal
              size={"sm"}
              leftIcon={<BiCodeAlt />}
            >
              Source
            </Button>
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
