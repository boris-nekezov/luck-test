const path = require("path");

const assetsFolder = path.resolve(__dirname, '../lib/assets');

module.exports = {
  stories: [
    "../lib/**/*.stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-sass-postcss",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  webpackFinal: (config) => {
    const rules = config.module.rules;

    const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = assetsFolder;
    
    rules.push({
      test: /\.svg$/,
      include: assetsFolder,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      }],
    });

    return config;
  },
}