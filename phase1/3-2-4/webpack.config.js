const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    module: {
        // sass-loader node-sass都需要安装
        rules: [{
            test: /\.(sass|scss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devServer: {
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

}
module.exports = config;