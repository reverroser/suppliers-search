import React, { useState } from "react";
import styled from "styled-components";

import Theme from "./theme";
import { supplierTypes } from "./constants";

import Dropdown from "./components/Dropdown/Dropdown";
import SearchInput from "./components/SearchInput/SearchInput";
import TopBar from "./components/TopBar/TopBar";

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

const App = () => {
  const [supplierType, setSupplierType] = useState();

  const [searchTerm, setSearchTerm] = useState("");

  console.log(supplierType, searchTerm);

  return (
    <Theme>
      <AppContainer>
        <TopBar>
          <Dropdown
            label="Supplier Type"
            options={supplierTypes}
            onOptionSelected={setSupplierType}
          />
          <SearchInput onSearchChange={setSearchTerm} />
        </TopBar>
        <h1>You can do it!</h1>
      </AppContainer>
    </Theme>
  );
};

export default App;
