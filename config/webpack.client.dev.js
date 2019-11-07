"use strict";

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = "development";
}
const webpack = require("webpack");
const WebpackParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");
module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: [
        path.resolve(process.cwd(), "src/index.js"), 
        require.resolve("react-dev-utils/webpackHotDevClient")
    ],
    output: {
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: true,
        path: path.resolve(process.cwd(), "static"),
        filename: "index.js"
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve("url-loader"),
                options: {
                    limit: 100000,
                    name: "images/[name].[ext]"
                }
            },
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(process.cwd(), "src"),
                loader: require.resolve("babel-loader")
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(process.cwd(), "public/index.html")
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
