import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

type ThemeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(BiMoon, BiSun);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        exit={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        initial={{ y: 10, opacity: 0 }}
        key={useColorModeValue("light", "dark")}
      >
        <IconButton
          size="sm"
          marginLeft="2"
          variant="solid"
          icon={<SwitchIcon />}
          onClick={toggleColorMode}
          aria-label={`Switch to ${text} mode`}
          color="#333"
          bg={useColorModeValue("#DEDBE9", "#FFF8D7")}
          _hover={{
            bg: useColorModeValue("#CFCBDF", "#FFF4BE"),
            boxShadow: "lg",
            transform: "translateY(-2px)",
          }}
          _active={{ transform: "translateY(0)" }}
          {...props}
        />
      </motion.div>
    </AnimatePresence>
  );
};
