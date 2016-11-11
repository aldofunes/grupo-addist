const path = require('path');
const merge = require('webpack-merge');
require('dotenv').config();
const pkg = require('./package.json');
const settingsDev = require('./settings-dev.json');
const settingsProd = require('./settings-prod.json');

const parts = require('./libs/parts');

process.env.BABEL_ENV = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: [
    path.join(__dirname, 'node_modules', 'normalize-css', 'normalize.css')
  ],
  build: path.join(__dirname, 'build')
};

const common = merge(
  {
    entry: {
      app: PATHS.app
    },
    output: {
      path: PATHS.build,
      filename: '[name].js'
    }
  },
  parts.indexTemplate({
    title: 'BMG Tech',
    appMountId: 'app'
  }),
  parts.getImg(),
  parts.loadJSX(PATHS.app),
  parts.loadJSON()
);

var config;

switch (process.env.npm_lifecycle_event) {
  case 'build':
  case 'stats':
    config = merge(
      common,
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js',
          // publicPath: '/kanban-demo/'
        },
        resolve: {
          alias: {
            'react': 'react-lite',
            'react-dom': 'react-lite'
          }
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: Object.keys(pkg.dependencies)
      }),
      parts.minify(),
      parts.extractCSS(),
      parts.envVars(settingsProd)
    );
    break;
  case 'test':
  case 'test:tdd':
    config = merge(
      common,
      {
        externals: {
          'cheerio': 'window',
          'react/addons': true,
          'react/lib/ExecutionEnvironment': true,
          'react/lib/ReactContext': true
        },
        devtool: 'inline-source-map'
      },
      parts.loadIsparta(PATHS.app),
      parts.setupCSS(),
      parts.envVars(settingsDev)
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map',
        entry: {
          style: PATHS.style
        }
      },
      parts.setupCSS(),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      }),
      parts.enableReactPerformanceTools(),
      parts.envVars(settingsDev)
    );
}

module.exports = config;
