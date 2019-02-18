'use strict';

const webpack = require('webpack');
const path = require('path');
const packageData = require('./package.json');
const CopyPlugin = require('copy-webpack-plugin');
const webpackConfig = require('./webpack.config');
const PROD = process.env.NODE_ENV === 'production';
const playerType = 'ott';
const configDocsUrl = 'https://github.com/kaltura/kaltura-player-js/blob/master/docs/configuration.md';

const getModulesReplaced = function(mappings = []) {
  return mappings.map(item => new webpack.NormalModuleReplacementPlugin(item.module, item.replacement));
};

const mocksDir = path.resolve(__dirname, 'src', 'mocks');

const plugins = [
  ...getModulesReplaced([
    {
      module: /js-logger/,
      replacement: path.resolve(mocksDir, 'JsLogger')
    },
    {
      module: /playkit-js-ui/,
      replacement: path.resolve(mocksDir, 'playkitJsUI.js')
    },
    {
      module: /common\/cast/,
      replacement: path.resolve(mocksDir, 'cast.js')
    }
  ]),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(packageData.version),
    __NAME__: JSON.stringify(packageData.name),
    __PACKAGE_URL__: JSON.stringify(packageData.repository.url),
    __PLAYER_TYPE__: JSON.stringify(playerType),
    __CONFIG_DOCS_URL__: JSON.stringify(configDocsUrl)
  })
];

if (PROD) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: true}));
} else {
  plugins.push(
    new CopyPlugin([
      {
        from: '../samples/style.css',
        to: '.'
      }
    ])
  );
}

const alias = {
  'playkit-js-providers': path.resolve('./node_modules/playkit-js-providers/dist/playkit-ott-provider'),
  'playkit-js-analytics': path.resolve('./node_modules/@playkit-js/playkit-js-ott-analytics'),
  'player-defaults': path.resolve('./src/ott/player-defaults'),
  poster: path.resolve('./src/ott/poster')
};

Object.assign(webpackConfig.resolve.alias, alias);

webpackConfig.entry = {
  'kaltura-player': 'index.js'
};

webpackConfig.plugins = plugins;

module.exports = webpackConfig;
