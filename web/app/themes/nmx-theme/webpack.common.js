const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin');
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].[hash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: {
    app: './resources/assets/index.js',
    admin: './resources/assets/admin.js',
    editor: './resources/assets/scss/editor.scss',
    polyfills: './resources/assets/polyfills.js'
  },
  output: {
    path: path.resolve('dist/'),
    filename: 'js/[name].[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          plugins: ['babel-plugin-transform-class-properties'],
          presets: [
            ['env', { modules: false }],
          ],
        },
      },
      {
        test: /icons\.json$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader', use: [
            'css-loader',
            {
              loader: 'webfonts-loader',
              options: {
                fileName: 'assets/fonts/[fontname].[hash].[ext]'
              }
            }
          ]
        })
      },
      { test: /\.json$/, loaders: ['json-loader'] },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss|.css$/,
        use: extractSass.extract({
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        exclude: [/resources\/assets\/images/],
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[hash].[ext]'
        },
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)/,
        exclude: [/node_modules/, /resources\/assets\/fonts/],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash].[ext]'
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new CleanPlugin('./dist'),
    extractSass,
    new AssetsPlugin({
      filename: 'manifest.json',
      path: path.resolve('dist/')
    })
  ]
}
