const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
    entry: [
      './public/src/FreeSpinsManager.js',
      './public/src/Game.js',
      './public/src/gameData.js',
      './public/src/index.js',
      './public/src/Wheel.js',
      './public/src/WinManager.js',
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 
            {
                loader: "script-loader"
            }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
              }
            }
          ]
        }
      ]
    }
  };