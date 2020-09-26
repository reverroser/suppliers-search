import React from "react";
import { render } from "@testing-library/react";

import Theme from "../../theme";

import SupplierCard from "./SupplierCard";

const supplier = {
  slug: "test"
};

describe("supplier card suite", () => {
  test("it renders", async () => {
    const { getByTestId } = render(
      <Theme>
        <SupplierCard supplier={supplier} />
      </Theme>
    );

    expect(getByTestId(`supplierCard-${supplier.slug}`)).toBeInTheDocument();
  });

  test("it not renders if supplier is missing", async () => {
    const { queryByTestId } = render(
      <Theme>
        <SupplierCard />
      </Theme>
    );

    expect(queryByTestId(`supplierCard-${supplier.slug}`)).toBeNull();
  });
});
