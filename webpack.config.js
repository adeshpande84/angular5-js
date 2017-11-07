module.exports = {
	entry: './client/app/main.js',
	output: {
		filename: './client/dist/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015'],
					plugins: ['transform-decorators-legacy']

				},
				exclude: /node_modules/
			}
		]
	}
};