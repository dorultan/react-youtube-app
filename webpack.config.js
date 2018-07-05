const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	mode: 'development',
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
		new HtmlWebpackPlugin({
			template: './dist/index.html'
		}),
		new MiniCssExtractPlugin({
			name: '[name].css',
			chunkFilename: '[id].css'
		})
	],

	devServer: {
		port: process.env.port || 3000,
		contentBase: './dist',
		inline: true,
		historyApiFallback: true
	}
};

module.exports = config;