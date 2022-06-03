import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

type ThemeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);

  return (
    <motion.div
      exit={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      initial={{ y: -20, opacity: 0 }}
      key={useColorModeValue("light", "dark")}
    >
      <IconButton
        color="#333"
        marginLeft="2"
        variant="solid"
        icon={<SwitchIcon />}
        onClick={toggleColorMode}
        aria-label={`Switch to ${text} mode`}
        bg={useColorModeValue("#DEDBE9", "#FFF8D7")}
        _hover={{
          bg: useColorModeValue("#CFCBDF", "#FFF4BE"),
          transform: "translateY(-2px)",
        }}
        _active={{ transform: "translateY(0)" }}
        {...props}
      />
    </motion.div>
  );
};
