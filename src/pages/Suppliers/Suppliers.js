import React, { useState } from "react";

import Dropdown from "../../components/Dropdown/Dropdown";
import SearchInput from "../../components/SearchInput/SearchInput";
import TopBar from "../../components/TopBar/TopBar";

import { supplierTypes } from "./utils";

const Suppliers = () => {
  const [supplierType, setSupplierType] = useState();

  const [searchTerm, setSearchTerm] = useState("");

  console.log(supplierType, searchTerm);

  return (
    <div>
      <TopBar>
        <Dropdown
          label="Supplier Type"
          options={supplierTypes}
          onOptionSelected={setSupplierType}
        />
        <SearchInput onSearchChange={setSearchTerm} />
      </TopBar>
      <h1>You can do it!</h1>
    </div>
  );
};

export default Suppliers;
