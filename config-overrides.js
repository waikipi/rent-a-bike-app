/*const webpack = require('webpack'); 
module.exports = function override(config) { 
		const fallback = config.resolve.fallback || {}; 
		Object.assign(fallback, { 
    	"crypto": require.resolve("crypto-browserify"), 
		"stream": require.resolve("stream-browserify"), 
		"zlib": require.resolve("browserify-zlib"), 
		"http": require.resolve("stream-http"), 
		"querystring": require.resolve("querystring-es3"), 
		"path": require.resolve("path-browserify"), 
		"url": require.resolve("url"), 
		"util": require.resolve("util") 
      }) 
   config.resolve.fallback = fallback; 
   config.plugins = (config.plugins || []).concat([ 
   	new webpack.ProvidePlugin({ 
    	process: 'process/browser', 
      Buffer: ['buffer', 'Buffer'] 
    }) 
   ]) 
   return config; }


module.exports = {
	resolve: {
		fallback: {
			util: require.resolve("util"),
			url: require.resolve("url"),
			path: require.resolve("path-browserify"),
			crypto: require.resolve("crypto-browserify"),
			stream: require.resolve("stream-browserify"), 
			zlib: require.resolve("browserify-zlib"),
			http: require.resolve("stream-http"), 
			querystring: require.resolve("querystring-es3"), 
		}
	}
}*/

const webpack = require('webpack'); 
module.exports = function override(config) { 
		const fallback = config.resolve.fallback || {}; 
		Object.assign(fallback, { 
    	"crypto": require.resolve("crypto-browserify"), 
		"stream": require.resolve("stream-browserify"), 
		"zlib": require.resolve("browserify-zlib"), 
		"http": require.resolve("stream-http"), 
		"querystring": require.resolve("querystring-es3"), 
		"path": require.resolve("path-browserify"), 
		"url": require.resolve("url"), 
		"util": require.resolve("util") 
      }) 
   config.resolve.fallback = fallback; 
   config.plugins = (config.plugins || []).concat([ 
   	new webpack.ProvidePlugin({ 
    	process: 'process/browser', 
      Buffer: ['buffer', 'Buffer'] 
    }) 
   ]) 
   return config; }


module.exports = {
	resolve: {
		fallback: {
			util: require.resolve("util"),
			url: require.resolve("url"),
			path: require.resolve("path-browserify"),
			crypto: require.resolve("crypto-browserify"),
			stream: require.resolve("stream-browserify"), 
			zlib: require.resolve("browserify-zlib"),
			http: require.resolve("stream-http"), 
			querystring: require.resolve("querystring-es3"), 
		}
	}
}

