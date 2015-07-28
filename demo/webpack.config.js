
module.exports = {

  entry: './demo/entry.js',

  output: {
    filename: 'bundle.js',
    publicPath: 'demo',
    path: __dirname
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx?$)/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
      '.json'
    ]
  }

}

