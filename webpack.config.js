
var path = require("path");

var webpack = require('webpack');

var config = {
   entry:'./src/js/main.js',
	
   output: {
      path:path.resolve(__dirname,"bin"),
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 7777,
      host:'0.0.0.0',
      historyApiFallback: true,
      hot:true

   },
	
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react']
         }
      },

         {test: /\.css$/, loader: 'style!css?modules!autoprefixer?{browsers:["last 2 version", "> 1%"]}'},
         { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }

      ]
   },
    plugins: [
    
  ],
	
}

module.exports = config;