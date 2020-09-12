const {
    override,
    addWebpackAlias,
} = require("customize-cra");
const path = require("path");

module.exports = override(
    // add an alias for "ag-grid-react" imports
    addWebpackAlias({
        ["@src"]: path.resolve(__dirname, "./src"),
        ["@components"]: path.resolve(__dirname, "./src/components"),
        ["@utils"]: path.resolve(__dirname, "./src/components/utils"),
        ["@services"]: path.resolve(__dirname, "./src/services")
    })
);
