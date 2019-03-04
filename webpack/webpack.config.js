const path = require('path');

module.exports = {
	entry: './js/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	}
};

const ConcatPlugin = require('webpack-concat-plugin');

new ConcatPlugin ({
	
	
})
