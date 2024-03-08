import React from "react"
import Button from "../components/Button";
// import "@testing-library/react/dont-cleanup-after-each"
import { render, screen, configure, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

export const ThemeContext = React.createContext({
  theme: "light",
  setTheme: () => {}
});

// Unmounts React trees that were mounted with render.
// Cleanup is called after each test automatically by default
// To disabled this behavior import("@testing-library/react/dont-cleanup-after-each")
// or write process.env.RTL_SKIP_AUTO_CLEANUP = true
// Before importing @testing-library/react
// afterEach(cleanup);

configure({
  //@default false
  reactStrictMode: false
})

const Wrapper = ({children}) => {
  const [theme, setTheme] = React.useState("light");
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

test("Button", () => {
  const container = document.createElement("div");
  const mockFn = jest.fn();

  container.dataset.testid = "container";

  const {rerender, unmount, queryByText} = render(<Button />, {
    // When to render the component, similar to root in react
    // By default it will be rendered <body><div>{here}</div></body>
     container: document.body.appendChild(container),
     wrapper: Wrapper,
     // Default to container if it is specified otherwise document.body
     // Used by queries
     baseElement: document.body
  });

  let btn;

  screen.debug(); // similar to console.log(prettyDOM())

  // update the props of a rendered component in your test
  rerender(<Button onClick={mockFn}>Hello</Button>);

  btn = queryByText("Hello");

  expect(btn).toBeInTheDocument();
  expect(btn).toHaveRole("button");
  expect(btn).toHaveAttribute("data-theme", "light");

  screen.debug();

  fireEvent.click(btn);

  expect(btn).toHaveAttribute("data-theme", "dark");
  expect(mockFn).toHaveBeenCalledTimes(1);

  screen.debug();

  // Unmount the component password to render
  unmount();

  screen.debug();
})