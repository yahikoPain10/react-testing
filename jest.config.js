const path = require("node:path");
/** @type {import("jest").Config} */

const config = {
  testEnvironment: "jsdom",
  globals: {
    axeOptions: {
      reporter: "no-passes",
      rules: [{ id: "region", enabled: false }],
    }
  },

  // absolute or relative path

  // Will be executed before setupFilesAfterEnv and before the test code itself.
  // setupFiles: [
  //   "./jest_setup/setup-file.js"
  // ],
  // Ruuning code after the test framework has been installed
  // in the environment but before the test code itself.
  setupFilesAfterEnv: [
    // "./jest_setup/custom-matchers.js",
    "jest-extended/all"
  ]
}

module.exports = config;