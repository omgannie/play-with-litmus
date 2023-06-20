const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
    webpack: {
        configure: {
            resolve: {
                fallback: {
                    path: require.resolve("path-browserify"),
                    os: require.resolve("os-browserify"),
                    fs: false,
                },
                extensions: ['.jsx', '.js', '.mjs'],
            },
            experiments: {
                topLevelAwait: true,
            },
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        resolve: {
                            fullySpecified: false,
                        },
                    },
                    ],
            },
        },
        plugins: {
            add: [
                new webpack.ProvidePlugin({
                    process: 'process/browser.js',
                })
            ]
        },
    }
};