module.exports = {
  entry: './client/index.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] }
    ]
  }
}
