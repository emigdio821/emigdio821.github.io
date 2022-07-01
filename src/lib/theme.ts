import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";
import TextColorModeVal from "utils/TextColorModeVal";

const styles = {
  global: (props: StyleFunctionProps | Dict<any>) => ({
    body: {
      color: TextColorModeVal,
      bg: mode("#fafafa", "#333")(props),
    },
  }),
};

const shadows = {
  outline: "0 0 0 3px #B2ABCC",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, shadows });
export default theme;
