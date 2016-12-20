const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

exports.indexTemplate = function (options) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: require('html-webpack-template'),
        title: options.title,
        appMountId: options.appMountId,
        inject: false,
        mobile: true,
        scripts: [
          // GoSquared tracking JS
          'https://d1l6p2sc9645hc.cloudfront.net/tracker.js'
        ]
      }),
      new FaviconsWebpackPlugin('./assets/emblem.svg')
    ]
  }
};

exports.loadJSX = function (path) {
  return {
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          include: path
        }
      ]
    }
  };
};

exports.loadJSON = function () {
  return {
    module: {
      rules: [
        {
          test: /\.json/,
          use: 'json-loader'
        }
      ]
    }
  }
};

exports.loadIsparta = function (path) {
  return {
    module: {
      rules: [
        {
          test: /^(?!.*_test.*).*\.(js|jsx)$/,
          include: path,
          enforce: 'pre',
          use: 'isparta-loader'
        }
      ]
    }
  };
};

exports.lintJSX = function (include) {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: include,
          enforce: 'pre',
          use: 'eslint-loader'
        }
      ]
    }
  };
};

exports.enableReactPerformanceTools = function () {
  return {
    module: {
      rules: [
        {
          test: require.resolve('react'),
          use: 'expose?React'
        }
      ]
    }
  };
};

exports.devServer = function (options) {
  return {
    devServer: {
      // Enable history API fallback so HTML5 History API based routing works.
      // This is a good default that will come in handy in more complicated setups.
      historyApiFallback: true,

      // Unlike the cli flag, this doesn't set HotModuleReplacementPlugin!
      hot: true,
      inline: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // 0.0.0.0 is available to all network devices unlike default 'localhost'
      host: options.host, // defaults to 'localhost'
      port: options.port // defaults to 8080
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance in larger projects
      // Good default
      new webpack.HotModuleReplacementPlugin({
        multiStep: false
      })
    ]
  };
};

exports.setupCSS = function () {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            'sass-loader'
          ]
        },
      ]
    }
  };
};

exports.minify = function () {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  };
};

exports.setFreeVariable = function (key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
};

exports.extractBundle = function (options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest'],

        // options.name modules only
        minChunks: Infinity
      })
    ]
  };
};

exports.clean = function (path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root: process.cwd()
      })
    ]
  };
};

exports.extractCSS = function () {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader?sourceMap&modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]&minimize!postcss!sass?sourceMap'
          })
        },
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.[chunkhash].css')
    ]
  };
};

exports.getImg = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(svg|jpg|png)$/,
          use: 'file-loader'
        }
      ]
    }
  }
};

exports.envVars = function (settings) {
  return {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(settings.NODE_ENV),
          'GOSQUARED': JSON.stringify(settings.GOSQUARED)
        }
      })
    ]
  }
};
