import {
  screen,
  fireEvent,
  getByText,
  getRoles,
  logRoles,
  isInaccessible,
  prettyDOM
} from "@testing-library/dom";

document.body.innerHTML = `
  <label for="todo-input">Todo</label>
  <input id="todo-input" type="text" />
  <button id="add-btn">+ Add</button>
  <ul id="todo-list" aria-label="list"></ul>
`;

it.skip("Add todos", () => {
  const btn = screen.getByRole("button", { name: /Add/ });
  const input = screen.getByLabelText(/todo/i);
  const todolist = screen.getByRole("list", { name: /list/ });

  btn.addEventListener("click", (e) => {
    // `e` contain properties provided from the second argument of fireEvent.click
    todolist.innerHTML += `<li>${e.target.value}</li>`;
  });

  fireEvent.click(btn, { target: { value: "Buy milk" } });

  expect(getByText(todolist, "Buy milk")).toBeInstanceOf(HTMLLIElement);
});

it.skip("log a11y roles", () => {
  console.log(getRoles(document.body));
  console.log(logRoles(document.body));
});

test.skip("Inaccessibility", () => {
  const ul = document.createElement("ul");
  // Check if the element is in the accessibility tree
  expect(isInaccessible(ul)).toBeFalsy();

  ul.hidden = true;

  expect(isInaccessible(ul)).toBeTruthy();
});

test.skip("Using pretty-dom", () => {
  // Print a dom node with colors
  // <style> and <script> tags are ignored (Not printed)
  // passing a custom filterNode function that should return true for every node that you wish to include in the output.
  // Pass a second argument to Limit string size
  console.log(prettyDOM(document.body, 14));
})