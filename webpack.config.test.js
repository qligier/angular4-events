const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

const metadata = {
    env: ENV,
    host: HOST,
    port: PORT
};

module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new DefinePlugin({ 'webpack': { 'ENV': JSON.stringify(metadata.env) } })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
};