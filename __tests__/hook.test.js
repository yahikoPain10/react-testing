import React from "react";
import { renderHook, screen } from "@testing-library/react";

// !Read when to use renderHook method: 
// https://www.npmjs.com/package/@testing-library/react-hooks#when-to-use-this-library

const useCounter = (initCount = 0) => {
  const [count, setCount] = React.useState(initCount);

  const increment = React.useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const decrement = React.useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  return { count, increment, decrement, setCount };
};

test("Hooks", () => {
  // Render a hook inside a test component
  const result = renderHook(
    (testComponentInitProps) => {
      return useCounter(testComponentInitProps.count);
    },
    {
      initialProps: {
        count: 4,
      },
      // has same options as render
    }
  );

  console.log(result);
  /*{
    result: {
      current: {
        count: 4,
        increment: [Function (anonymous)],
        decrement: [Function (anonymous)],
        setCount: [Function: bound dispatchSetState]
      }
    },
    rerender: [Function: rerender],
    unmount: [Function: unmount]
  }*/

  screen.debug();

  /**<body>
      <div /> // test component is rendered
    </body> */
});
