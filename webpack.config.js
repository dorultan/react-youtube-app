const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	mode: process.env.NODE_ENV || 'development',
	entry: ['babel-polyfill', path.resolve('app', 'app.js')],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader'
				}
			},

			{
				test: /\.less$/,
				exclude: '/node_modules/',
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader'
			    ]
			}
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			name: '[name].css',
			chunkFilename: '[id].css'
		})
	]
};

module.exports = config;