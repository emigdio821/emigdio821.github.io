import { BiCoffee, BiFile } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { TextColorModeVal } from "utils/ColorModeVal";
import styles from "assets/css/common.module.css";

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
        bg={useColorModeValue(
          "rgba(255, 255, 255, 0.9)",
          "rgba(33, 33, 33, 0.9)"
        )}
      >
        <Flex
          h={16}
          maxW="4xl"
          m="0 auto"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Flex alignItems="center">
              <Button
                to="/"
                as={NavLink}
                variant="link"
                fontSize="1.3rem"
                fontWeight={700}
                leftIcon={<BiCoffee className={styles["coffe-anim"]} />}
                _hover={{
                  transform: "translateY(-2px)",
                  background: "transparent",
                }}
                color={TextColorModeVal()}
                _active={{ transform: "translateY(0)" }}
              >
                Em<span style={{ fontWeight: 800 }}>.</span>
              </Button>
            </Flex>
          </Box>
          <Flex alignItems="center">
            <Button
              to="/resume"
              as={NavLink}
              bg="#ECF5FB"
              color="#333"
              variant="solid"
              leftIcon={<BiFile />}
              borderRadius="full"
              _hover={{
                bg: "#D7EAF7",
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
