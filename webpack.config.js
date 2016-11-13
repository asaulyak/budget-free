var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react',
		}),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};