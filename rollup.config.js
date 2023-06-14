const typescript = require("rollup-plugin-typescript2");
const babel = require("@rollup/plugin-babel");

module.exports = {
  input: "src/main.ts",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    typescript(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**", // Exclude external dependencies from Babel
    }),
  ],
};
