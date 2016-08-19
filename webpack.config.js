const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        test: /\.cssx$/,
        loader: ExtractTextPlugin.extract("style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css"),
      },
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.(ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
    ],
  },

  entry: ["./src/index.js"],
  output: {
    path: "assets/",
    filename: "bundle.js",
  },

  resolve: {
    modulesDirectories: ["node_modules", "src"],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
    }),
    new ExtractTextPlugin("style.css"),
  ],
};
