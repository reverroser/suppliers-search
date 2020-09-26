import React from "react";
import { ThemeProvider } from "styled-components";
import { rgba } from "polished";

const theme = {
  font: {
    header: "'Noto Sans JP', sans-serif",
    content: "'Roboto', sans-serif"
  },
  colors: {
    white: "#fff",
    black: "#36454f",
    primary: "#EC407A",
    secondary: "#26A69A",
    error: "#e53935",
    grey: {
      10: "#FAFAFA",
      20: "#EEEEEE",
      30: "#E0E0E0",
      40: "#BDBDBD"
    }
  },
  zIndex: {
    dropdown: 2
  },
  boxShadow: {
    default: `0 1px 6px 1px ${rgba("#36454f", 0.1)}`,
    defaultHover: `0 4px 8px 2px ${rgba("#36454f", 0.16)}`,
    defaultActive: `0 6px 8px 3px ${rgba("#36454f", 0.16)}`
  },
  spacingUnit: 8
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
