import React from "react";
import { render } from "react-testing-library";
import { Root } from "../Root";

it("should render null in first rendering", () => {
  const { container } = render(<Root />);

  expect(container.firstChild).toMatchSnapshot();
});
