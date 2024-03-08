import axe from "axe-core";
import { axe as jestAxe, configureAxe, toHaveNoViolations } from "jest-axe";

document.body.innerHTML = `
  <h1></h1>
  <div>
    <img />
  </div>
  <nav>
    <h1></h1>
    <p class="p" id="p">lorem</p>
  </nav>
`;

describe.skip("axe-core", () => {
  axe.configure(axeOptions);

  it("Check if nav elements has any violations", (done) => {
    axe.run("nav", (err, results) => {
      if (err) done(err);
      console.log(results);
      // Violations result: empty-heading
      expect(results.violations.length).toBeGreaterThan(0);
      done();
    });
  });

  it("exclude headings from tests", async () => {
    const { violations } = await axe.run({
      include: ["div", "nav", ".p", "#p"],
      exclude: "h1",
    });
    // Violations result: image-alt
    console.log(violations);
    expect(violations.length).toBeGreaterThan(0);
  });

  it("checks for the entire document for violations", async () => {
    const { violations } = await axe.run(document);
    console.log(violations);
    // No region added because of the configuration
    // Violations result:  ['document-title','empty-heading','html-has-lang','image-alt']
    expect(violations.length).toBeGreaterThan(0);
  });
});

describe("jest-axe", () => {
  // You can import "jest-axe/extend-expect" instead
  expect.extend(toHaveNoViolations);
  
  configureAxe({ 
    // The property value is the same as the parameter passed to axe.configure.
    globalOptions: axeOptions,
  });

  console.log(axeOptions);

  it("Check violations", async () => {
    // @required: Pass an html element
    const results = await jestAxe(document.body);
    expect(results).toHaveNoViolations();
  });
});
