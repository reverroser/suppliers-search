import React from "react";
import { render } from "@testing-library/react";

import Theme from "../../theme";

import SearchInput from "./SearchInput";

describe("search input suite", () => {
  test("it renders", async () => {
    const { getByTestId } = render(
      <Theme>
        <SearchInput />
      </Theme>
    );

    expect(getByTestId("searchInput")).toBeInTheDocument();
  });
});
