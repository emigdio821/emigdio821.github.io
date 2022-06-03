import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { TextColorModeVal } from "utils/ColorModeVal";

const styles = {
  global: (props) => ({
    body: {
      color: TextColorModeVal(),
      bg: mode("inherit", "#333")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        textUnderlineOffset: 6,
        textDecorationColor: "#505050",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: () => ({
      textUnderlineOffset: 2,
    }),
  },
};

// const fonts = {
//   html: "'Roboto'",
// };

const shadows = {
  outline: "0 0 0 3px #B2ABCC",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, shadows });
export default theme;
