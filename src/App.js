import React from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Theme from "./theme";

import Suppliers from "./pages/Suppliers/Suppliers";

const AppContainer = styled.div`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.content};
  color: ${({ theme }) => theme.colors.black};

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${({ theme }) => theme.font.title};
  }
`;

const App = () => (
  <Theme>
    <AppContainer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <Suppliers />
    </AppContainer>
  </Theme>
);

export default App;
