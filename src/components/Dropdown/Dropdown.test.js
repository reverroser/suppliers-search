import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Theme from "../../theme";

import Dropdown from "./Dropdown";

describe("dropdown suite", () => {
  test("it renders", async () => {
    const { getByTestId } = render(
      <Theme>
        <Dropdown />
      </Theme>
    );

    expect(getByTestId("dropdownSelect")).toBeInTheDocument();
  });

  test("dropdown inits closed", async () => {
    const { queryByTestId } = render(
      <Theme>
        <Dropdown />
      </Theme>
    );

    expect(queryByTestId("dropdownOptions")).toBeNull();
  });

  test("it opens the dropdown", async () => {
    const { getByTestId } = render(
      <Theme>
        <Dropdown />
      </Theme>
    );

    fireEvent.click(getByTestId("dropdownSelect"));

    expect(getByTestId("dropdownOptions")).toBeInTheDocument();
  });
});
