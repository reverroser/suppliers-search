import React from "react";
import { ThemeProvider } from "styled-components";

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
    grey: {
      10: "#FAFAFA",
      20: "#EEEEEE",
      30: "#E0E0E0",
      40: "#BDBDBD",
      50: "#9E9E9E"
    }
  },
  zIndex: {
    dropdown: 2
  },
  spacingUnit: 8
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
