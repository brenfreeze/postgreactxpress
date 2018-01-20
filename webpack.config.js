const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
  	rules: [{
  		test: /\.js$/,
  		exclude: /node_modules/,
  		use: {
  			loader: 'babel-loader'
  		}
  	},
  	{
  		test: /\.html$/,
  		use: {
  			loader: 'html-loader'
  		}
  	}]
  },
	devServer: {
  		contentBase: path.join(__dirname, "dist"),
  		port: 9000
	}
};