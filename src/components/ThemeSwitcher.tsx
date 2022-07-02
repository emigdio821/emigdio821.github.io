import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

export default function ThemeSwitcher() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const bg = useColorModeValue("#DEDBE9", "#FFF8D7");
  const hoverBg = useColorModeValue("#CFCBDF", "#FFF4BE");

  return (
    <motion.div
      key={text}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      initial={{ y: -20, opacity: 0 }}
    >
      <IconButton
        color="#333"
        marginLeft="2"
        variant="solid"
        icon={<SwitchIcon />}
        onClick={toggleColorMode}
        aria-label={`Switch to ${text} mode`}
        bg={bg}
        _hover={{
          bg: hoverBg,
          transform: "translateY(-2px)",
        }}
        _active={{ transform: "translateY(0)" }}
      />
    </motion.div>
  );
}
