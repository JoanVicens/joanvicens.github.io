const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
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
                        name: "[name].[ext]",
                        outputPath: "assets"
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
}