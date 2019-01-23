// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

const path = require('path');
const babelConfig = require('../config/babel.config');
const cssConfig = require('../config/css.config');
const ROOT = `${__dirname}/..`;

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig
  const css = cssConfig(false, false);
  // console.log(defaultConfig);
  defaultConfig.module.rules.push(babelConfig(false, false, ROOT));
  defaultConfig.module.rules.push(css.rules.main);
  defaultConfig.plugins.push(css.plugins.main);
  return defaultConfig;
};
