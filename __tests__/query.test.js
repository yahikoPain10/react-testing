import { screen, configure } from "@testing-library/dom";

configure({
  // @default data-testid
  testIdAttribute: "data-test-id",
})

document.body.innerHTML = `
  <div data-test-id="wrapper" data-tag="div">
    <h1 data-tag="heading">Hello, world</h1>
    <img alt="pain" data-tag="img" title="image" />
    <input data-tag="input:checkbox" type="checkbox" id="check" />
    <input data-tag="input:text" value="ali" placeholder="username" />
    <label data-tag="label" for="check">Checkbox</label>
    <button data-tag="button">Send</button>
    <input type="submit" data-tag="input:submit" value="submit" />
    <p data-tag="paragraph">
      <span data-tag="span">
        Lorem ipsum
      </span>
    </p>
    <input type="url" data-tag="input:url" aria-label="URL" />
  </div>
`;

test("Using a string matcher", () => {
  expect(screen.getByAltText("pain").dataset.tag).toBe("img");
  expect(screen.getByLabelText("Checkbox").dataset.tag).toBe("input:checkbox");
  expect(screen.getByDisplayValue("submit").dataset.tag).toBe("input:submit");
  expect(screen.getByPlaceholderText("username").dataset.tag).toBe(
    "input:text"
  );
  expect(screen.getByRole("heading").dataset.tag).toBe("heading");
  // works also with inputs whose type attribute is either `submit` or `button`
  expect(screen.getByText("Send").dataset.tag).toBe("button");
  expect(screen.getByTitle("image").dataset.tag).toBe("img");
  expect(screen.getByTestId("wrapper").dataset.tag).toBe("div");

  expect(screen.getByText("hello", { exact: false }).dataset.tag).toBe(
    "heading"
  );

  expect(
    screen.getByRole("textbox", {
      /**
       * The accessible name for an element can be derived from the element’s content
       * An attribute, or from an associated element.
       * Accessible name can be for e.g:
       * - Label of a form element
       * - Text content of a button
       * - Value of the aria-label attribute
       * */
      name: /url/i,
    }).dataset.tag
  ).toBe("input:url");
});

test("Using a regexp matcher", () => {
  const getTags = (arr) => arr.map((e) => e.dataset.tag);
  expect(getTags(screen.queryAllByText(/(Send|Hello)/))).toContain("button");
  expect(getTags(screen.queryAllByText(/(Send|Hello)/))).toContain("heading");
});

test("Using a custom matcher", () => {
  const inputsMatcher = function (content, element) {
    return element instanceof HTMLInputElement;
  };

  expect.hasAssertions();

  screen.queryAllByText(inputsMatcher).forEach((el) => {
    expect(el.dataset.tag).toMatch("input");
  });
});
