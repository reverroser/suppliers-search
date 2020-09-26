import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";

import Dropdown from "../../components/Dropdown/Dropdown";
import SearchInput from "../../components/SearchInput/SearchInput";
import SupplierCard from "../../components/SupplierCard/SupplierCard";
import TopBar from "../../components/TopBar/TopBar";

import { supplierTypes } from "../..//utils";

import { SuppliersGrid, SuppliersContainer } from "./Supplier.styles";

const Suppliers = () => {
  const searchParams = new URLSearchParams();

  const [pageCount, setPageCount] = useState();

  const [suppliersData, setSuppliersData] = useState();

  const [supplierType, setSupplierType] = useState();

  const [searchTerm, setSearchTerm] = useState("");

  const fetchSuppliers = async () => {
    let url = process.env.REACT_APP_SUPPLIERS_ENDPOINT;

    if (pageCount) {
      url = `${url}/${pageCount}`;
    }

    if (searchTerm) {
      searchParams.set("name", searchTerm);
    }

    if (supplierType) {
      searchParams.set("tier1", supplierType.slug);
    }

    if (searchParams) {
      url = `${url}?${searchParams.toString()}`;
    }

    try {
      let res = await fetch(url);

      res = await res.json();

      setSuppliersData(res);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handlePageChange = ({ selected }) => {
    setPageCount(selected);
  };

  useEffect(() => {
    fetchSuppliers();
    // eslint-disable-next-line
  }, [pageCount, searchTerm, supplierType]);

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
      {suppliersData ? (
        <SuppliersContainer>
          <SuppliersGrid>
            {suppliersData.results.map(supplier => (
              <SupplierCard key={supplier.slug} supplier={supplier} />
            ))}
          </SuppliersGrid>
          <ReactPaginate
            pageCount={suppliersData.numPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageChange}
          />
        </SuppliersContainer>
      ) : null}
    </div>
  );
};

export default Suppliers;
