const path = require('path');

module.exports = {
  entry: './src/main.js',
  devtool: 'source-map',
  mode: 'production',
  module: {
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};