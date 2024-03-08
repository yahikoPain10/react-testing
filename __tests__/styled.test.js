import * as React from "react";
import { render, screen } from "@testing-library/react";
import styled from "styled-components";
// Will include the style rules in the snapshot
import "jest-styled-components";

const StyledH1 = styled.h1`
  background-color: red;
  color: black;
`;

const H1 = () => {
  return <StyledH1>Hello, world</StyledH1>;
};

test("styled components", () => {
  const { container, getByRole } = render(<H1 />);
  const h1 = getByRole("heading");
  screen.debug();
  expect(h1).toHaveStyleRule("color", "black");
  expect(container).toMatchSnapshot();
});
