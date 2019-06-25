const webpack = require('webpack')
const dotenv = require('dotenv')
const path = require('path')
module.exports = () => {
  const env = dotenv.config().parsed
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})
  return {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './',
      publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    resolve: {
      alias: {
        Styles: path.resolve(__dirname, 'src/styles/'),
        Assets: path.resolve(__dirname, 'src/assets/'),
        Redux: path.resolve(__dirname, 'src/redux/')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'] // include eslint-loader
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(css)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [new webpack.DefinePlugin(envKeys)]
  }
}
