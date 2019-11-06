const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.client.dev');

const compiler = Webpack(webpackConfig);


const server = new WebpackDevServer(compiler, {
  proxy: {
    "/": {
      target: 'http://localhost:3001',
      changeOrigin: true
    }
},
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080');
});