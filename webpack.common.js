const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    module: {
        rules: [

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
    }

}