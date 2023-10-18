const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

//custom build configuration
  
module.exports = {
    entry: './src/index.js',
    testEnvironment: 'jsdom',

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

    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

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
            "jest": {
                "transform": {
                  "^.+\\.(js|jsx)$": "babel-jest"
                },
                "moduleNameMapper": {
                    "\\.(css|scss)$": "identity-obj-proxy"
                  },
                "testEnvironment": "jsdom",
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
        ],
    }

};