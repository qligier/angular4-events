const path = require('path');
// Webpack and its plugins
//const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CompressionPlugin = require('compression-webpack-plugin');
//const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
//const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const ENV = process.env.NODE_ENV = 'production';

const metadata = {
  env: ENV
};
module.exports = {
  devtool: 'source-map',
  entry: {
    'main': './src/index.ts'
  },
  externals: {
    '@angular/core': {
      root: ['ng', 'core'],
      commonjs: '@angular/core',
      commonjs2: '@angular/core',
      amd: '@angular/core'
    },
    '@angular/common': {
      root: ['ng', 'common'],
      commonjs: '@angular/common',
      commonjs2: '@angular/common',
      amd: '@angular/common'
    },
    '@angular/platform-browser': {
      root: ['ng', 'platformBrowser'],
      commonjs: '@angular/platform-browser',
      commonjs2: '@angular/platform-browser',
      amd: '@angular/platform-browser'
    },
    'rxjs/Subscription': {
      root: ['rx', 'Subscription'],
      commonjs: 'rxjs/Subscription',
      commonjs2: 'rxjs/Subscription',
      amd: 'rxjs/Subscription'
    }
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  output: {
    path: path.resolve('dist/umd'),
    filename: 'angular4-events.js',
    libraryTarget: 'umd',
    library: 'angular4-events'
  },
  plugins: [
    new CompressionPlugin({ test: /\.css$|\.html$|\.js$|\.map$/ })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(__dirname, 'node_modules')]
  }
};