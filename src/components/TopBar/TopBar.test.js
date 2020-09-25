import React from "react";
import { render } from "@testing-library/react";

import Theme from "../../theme";

import TopBar from "./TopBar";

describe("top bar suite", () => {
  test("it renders", async () => {
    const { getByTestId } = render(
      <Theme>
        <TopBar>
          <div data-testid="topBar">topBar</div>
        </TopBar>
      </Theme>
    );

    expect(getByTestId("topBar")).toBeInTheDocument();
  });
});
