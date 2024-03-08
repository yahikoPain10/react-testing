
/** @type {import("@babel/core").TransformOptions} */

module.exports = {
  env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"],
      presets: [
        "@babel/preset-react",
        "@babel/preset-typescript"
      ],
      targets: {
        node: "current"
      }
    }
  },
}