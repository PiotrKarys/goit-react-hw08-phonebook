import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#E53E3E",
    secondary: "#2D3748",
    accent: "#F6E05E",
  },
  fonts: {
    heading: "Noto Sans JP, sans-serif",
    body: "Noto Sans JP, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "md",
        fontWeight: "bold",
      },
      sizes: {
        lg: {
          h: "48px",
          fontSize: "lg",
        },
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "primary" : "primary",
          color: "white",
        }),
      },
    },
  },
});

export default theme;
