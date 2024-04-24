const { override, addWebpackAlias } = require("customize-cra");
const path = require("path");

module.exports = override(
  addWebpackAlias({
    "@src": path.resolve(__dirname, "src"),
    "@atoms": path.resolve(__dirname, "src/components/atoms"),
    "@molecules": path.resolve(__dirname, "src/components/molecules"),
    "@organisms": path.resolve(__dirname, "src/components/organisms"),
    "@services": path.resolve(__dirname, "src/services"),
    "@utils": path.resolve(__dirname, "src/utils"),
    "@pages": path.resolve(__dirname, "src/pages"),
  })
);
