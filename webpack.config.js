var webpack = require('webpack');

var config = {
  context: __dirname + '/src/client', // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist', // `dist` is the destination
    publicPath: "/assets/",
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: __dirname + '/src/client',
  },
  devtool: "eval-source-map", // Default development sourcemap
  module: {
    rules: [{
      test: /\.js$/, //Check for all js files
      loader: 'babel-loader',
      query: {
        presets: [ "babel-preset-es2015" ].map(require.resolve)
      }
    }, {
      test: /\.(sass|scss)$/, //Check for sass or scss file names
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    }]
  }
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
  config.devtool = "source-map";
}

module.exports = config;
