const path = require('path');
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    target: 'node',
    externals: [nodeExternals()],
    entry: ['./src/server/index.js'],
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'server.js',
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
                        'react-hot-loader/babel',
                        ['transform-object-rest-spread', { useBuiltIns: true }],
                        'transform-class-properties'
                    ]
                }
            },
            {
                test: /\.scss$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.css$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.(jpg|png|svg|gif|pdf)$/,
                loader: 'ignore-loader'
            }
        ]
    }
};
