const path = require('path');
const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonConfig, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(svg|png|jpg|gif|jpeg)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        esModule: false,
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
});