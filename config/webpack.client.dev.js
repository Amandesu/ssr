"use strict";

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = "production";
}
const webpack = require("webpack");
const WebpackParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const fs = require("fs");

module.exports = {
    mode: "production",
    entry: {
        "main":[path.resolve(process.cwd(), "src/index.js")]
    },
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
                test: /\.(js|jsx)$/,
                include: path.resolve(process.cwd(), "src"),
                loader: require.resolve("babel-loader")
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(process.cwd(), "static/index.html")
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
