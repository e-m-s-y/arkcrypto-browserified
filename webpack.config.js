const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: [
		path.resolve(__dirname, './in.js')
	],
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'out.js',
	},
	node: {
		crypto: true,
		fs: 'empty'
	},
	plugins: [
		new webpack.NormalModuleReplacementPlugin(/node_modules\/bcrypto\/lib\/node\/bn\.js/, "../js/bn.js")
	]
};
