const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

//custom build configuration
module.exports = {

    entry: './src/index.js',

    //production build
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    },



    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.scss$/i,
                use :[
                    "style-loader", // creates style nodes from JS strings
                    "css-loader",  // translates CSS into CommonJS
                    "sass-loader"   // compiles Sass to CSS, using Node Sass by default
                ]
            },
        ]
    }

}