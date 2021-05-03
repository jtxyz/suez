const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    experiments: {
      asyncWebAssembly: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
    ],
    mode: 'development'
  }
