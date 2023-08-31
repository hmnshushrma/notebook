const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
//
const isProduction = process.env.NODE_ENV === 'production'
const dotenv = require('dotenv')
const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader'

const env = dotenv.config().parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[chunkhash].js',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].bundle.js'
  },
  devServer: {
    hot: true,
    // host:'0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, '..', './dist')
    }
  },
  devtool: 'eval-source-map',
  optimization: {
    mangleExports: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          },
          compress: {
            // The following is required for dead-code the removal
            // check in React DevTools
            //
            // default
            unused: true,
            dead_code: true,
            conditionals: true,
            evaluate: true
          }
        },
        extractComments: false
      })
    ],
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'vendor-react',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[chunkhash].css'
    }),
    new webpack.DefinePlugin(envKeys),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        context: __dirname
      }
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: ['/node_modules/']
    }),
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i
    })
  ],
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, stylesHandler, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          stylesHandler,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      }
    ]
  }
}
module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
    config.plugins = prodPlugins
    config.optimization = chunks
  } else {
    config.mode = 'development'
  }
  return config
}

const chunks = {
  minimizer: ['...', new CssMinimizerPlugin()],
  splitChunks: {
    cacheGroups: {
      reactVendor: {
        test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
        name: 'vendor-react',
        chunks: 'all'
      }
    }
  }
}
const prodPlugins = [
  new MiniCssExtractPlugin(),
  // new HtmlWebpackPlugin({
  //   template: path.resolve(__dirname, 'index.html'),
  //   filename: 'index.html'
  // }),
  new MiniCssExtractPlugin({
    filename: '[chunkhash].css'
  }),
  new webpack.DefinePlugin(envKeys),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    options: {
      context: __dirname
    }
  }),
  new ESLintPlugin({
    extensions: ['js', 'jsx'],
    exclude: ['/node_modules/']
  }),
  new CompressionPlugin({
    test: /\.js(\?.*)?$/i
  })
]
