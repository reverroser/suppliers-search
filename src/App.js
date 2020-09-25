import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./theme";

import TopBar from "./components/TopBar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <TopBar>topbar</TopBar>
        <h1>You can do it!</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
