`getBy....`
  - Return the matching node for a query
  - Throw a descriptive error if no elements match or if more than one match is found
  
`queryBy...`
  - Returns the matching node for a query, 
  - return null if no elements match. 
  - Throws an error if more than one match is found

`getAllBy...`
  - Returns an array of all matching nodes for a query.
  - Throw an error if no elements match

`queryAllBy...`
  - Returns an array of all matching nodes for a query


`screen`
  - Used to query document.body as a container
  - You need a global DOM environment to use screen. 
  - If you're using jest, with the testEnvironment set to `jsdom`

View later
  - FindBy queries
  - Waitfor

Ressources
  - [List of roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles)
  - [Testing playground](https://testing-playground.com/) helps you find the best queries to select elements. [Chrome extension](https://chromewebstore.google.com/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano)
  - [What is an accessible name](https://www.tpgi.com/what-is-an-accessible-name/)
  - Explore [getByRole](https://testing-library.com/docs/queries/byrole) to gain insights into testing accessibility (a11y) effectively.