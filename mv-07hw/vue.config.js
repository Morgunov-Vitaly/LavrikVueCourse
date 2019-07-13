let isProd = process.env.NODE_ENV === 'production';

let config = {
	//publicPath: isProd ? '' : '/',
	productionSourceMap: false,
	configureWebpack: config => {
		
	}
};

module.exports = config;