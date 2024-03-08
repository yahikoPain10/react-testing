const axe = require("axe-core");
const {JSDOM} = require("jsdom");

const dom = new JSDOM(`
  <h1></h1>
  <div>
    <img />
  </div>
  <nav>
    <h1></h1>
    <p>lorem</p>
  </nav>
`);

const window = dom.window;
const document = window.document;

console.log(dom.serialize());

// Get & Filter rules by tags
console.log(axe.getRules(["cat.color"]));

// By default it will test the entire document
axe.run(document.body, {
  // You can use configure method to pass these options globally

  // set reporter to no-passes to return some metadata and violations results
  reporter: "no-passes",
  rules: {
    // @rule-description
    // Ensures all page content is contained by landmark (header, footer, main, ...)
    region: {
      enabled: false
    },
  }
})
.then(results => {
  console.log(results);
})
.catch(console.error);

axe.reset(); // Reset configuration

/**
 * @example violation
 {                                                                                          
   id: 'document-title',                                                                    
   impact: 'serious',                                                                       
   tags: [Array],                                                                           
   description: 'Ensures each HTML document contains a non-empty <title> element',          
   help: 'Documents must have <title> element to aid in navigation',                        
   helpUrl: 'https://dequeuniversity.com/rules/axe/4.8/document-title?application=axeAPI',  
   nodes: [Array]                                                                        
 },                                                                                         
 */