const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'app'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(sa|sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: false,
            sourceMap: true,
            importLoaders: 1,
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
