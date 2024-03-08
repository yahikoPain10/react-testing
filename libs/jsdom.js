import { JSDOM } from "jsdom";
import prettier from "prettier";

const dom = new JSDOM("<h1>Hello, world</h1>");
const window = dom.window;
const document = window.document;

document.querySelector("h1").textContent = "Hello, world!";

console.log(dom.serialize());
// Returns: <!DOCTYPE html><html><head></head><body>hello</body></html>

const externalDOM = await JSDOM.fromURL("https://example.org");
const formatted = await prettier.format(externalDOM.serialize(), {
  parser: "html"
});

console.log(formatted);

const fsFile = await JSDOM.fromFile("index.html");
console.log(fsFile.serialize());
