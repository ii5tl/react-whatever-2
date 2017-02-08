require('es6-promise').polyfill();
var path = require("path");

var cssLoaders = "style-loader!css-loader!postcss-loader",
    scssLoaders = "style!css!postcss-loader!sass?outputStyle=expanded";


var root_dir = path.resolve(__dirname, "..");

module.exports = {
  context: __dirname + "/app",
  entry: {
     javascript: "./js/app.js",
     html: "./index.html",
   },
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
          test: /\.json$/, loader: "json",
          include: "app/js",
          // exclude: /node_modules/,

          exclude: [
              path.resolve(root_dir, "app/js/common"),
              path.resolve(root_dir, "app/js/assets/locales")
          ]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },

      //for bootstrap

      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
       test: /\.png$/,
       loader: "url-loader?limit=100000"
     },
     {
       test: /\.jpg$/,
       loader: "file-loader"
     },
     {
       test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'url?limit=10000&mimetype=application/font-woff'
     },
     {
       test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'url?limit=10000&mimetype=application/octet-stream'
     },
     {
       test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'file'
     },
     {
       test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'url?limit=10000&mimetype=image/svg+xml'
     },
//for bootstrap

      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      { test: /\.png$/, loader: "url-loader?limit=100000", exclude:[
                    path.resolve(root_dir, "app/assets/asset-symbols"), path.resolve(root_dir, "app/assets/rps")
                ] },
      { test: /\.woff$/, loader: "url-loader?limit=100000&mimetype=application/font-woff" },

    ]
  }
};
