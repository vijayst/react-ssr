const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/client/index.js'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                options: {
                    presets: [['env', { modules: false }], 'react'],
                    plugins: [
                        ['transform-object-rest-spread', { useBuiltIns: true }],
                        'transform-class-properties'
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(['css-loader'])
            },
            {
                test: /\.(jpg|png|svg|gif|pdf)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};
