let isProd = process.env.NODE_ENV === 'production';

let config = {
	// потом это станет неактуальным
	publicPath: isProd ? '' : '/',
	configureWebpack: (config) => {
		return {
			
		};
	},
	transpileDependencies: [
    /\bvue-awesome\b/
  ]
};

module.exports = config;