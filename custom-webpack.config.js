module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'bootstrap/dist/css/bootstrap.min.css': require.resolve('bootstrap/dist/css/bootstrap.min.css')
    }
  }
};
