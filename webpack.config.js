const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //     publicPath: '/dist'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true,
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader',]
        },
        {
            test: /\.html$/,
            use: ['html-loader']
        },
        {
            test: /\.(jpg|svg)$/,
            loader: 'file-loader',
            options: {
                outputPath: 'img',
                publicPath: 'img'

            },

        },]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],

};