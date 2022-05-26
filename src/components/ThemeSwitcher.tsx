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
          fontSize="lg"
          marginLeft="2"
          variant="solid"
          icon={<SwitchIcon />}
          onClick={toggleColorMode}
          aria-label={`Switch to ${text} mode`}
          colorScheme={useColorModeValue("purple", "orange")}
          {...props}
        />
      </motion.div>
    </AnimatePresence>
  );
};
