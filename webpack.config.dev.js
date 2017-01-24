var path = require('path');
var webpack = require('webpack');
require('babel-polyfill');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  // devtool: 'source-map',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    bundle: [
      // necessary for hot reloading with IE:
      'babel-polyfill',
      'eventsource-polyfill',
      'react-hot-loader/patch',
      // listen to code updates emitted by hot middleware:
      'webpack-hot-middleware/client',
      './app/index',
      './css/base/_css-reset.scss',
      './app/containers/recordRedux/style.scss',
      './css/style.scss',
    ],
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      _: 'lodash',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(`${process.env.NODE_ENV}`),
      },
    }),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/, include: __dirname },
      { test: /\.scss$/, loader: 'style!css?sourceMap!sass?sourceMap&sourceComments' },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader?sourceMap'] },
      { test: /\.(woff2?|ttf|eot|svg|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader' },
    ],
  },
  resolve: {
    modulesDirectories: ['app', 'src', 'node_modules'],
    extensions: ['', '.js', '.jsx', '.json'],
  },
};
