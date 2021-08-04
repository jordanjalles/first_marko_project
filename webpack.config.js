const path = require("path");
const webpack = require("webpack");
const { configBuilder } = require("@marko/build");

const production = process.env.NODE_ENV === "production";
const { getServerConfig, getBrowserConfigs } = configBuilder({
  entry: path.join(__dirname, "src/pages"),
  production,
});

module.exports = [
  ...getBrowserConfigs((config) => {
    shared(config);
    return config;
  }),
  getServerConfig((config) => {
    shared(config);
    return config;
  }),
];

function shared(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      Assets: path.resolve(__dirname, "src/assets"),
      Api: path.resolve(__dirname, "src/api"),
      Constants: path.resolve(__dirname, "src/constants"),
      Data: path.resolve(__dirname, "src/data"),
      Utils: path.resolve(__dirname, "src/utils"),
      Styles: path.resolve(__dirname, "src/styles"),
    },
  };
}
