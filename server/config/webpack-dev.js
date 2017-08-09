import path from 'path';
import { browserConfig } from '../../webpack.config.babel';

const { WEBPACK, SERVER, ROUTES } = require('./constants');

export default function(app) {
  if (SERVER.ENV === SERVER.ENV_DEVELOPMENT) {
    /* eslint-disable */
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    browserConfig.entry = [
      path.join(__dirname, '..', 'app', 'index.js'),
      path.join(__dirname, '..', 'app', 'styles.scss')
    ];

    const webpackDevOptions = {
      contentBase: path.join(__dirname, '..', '..'),
      watchContentBase: true,
      inline: true,
      publicPath: ROUTES.HOME,
      historyApiFallback: true
    };

    browserConfig.watch = true;
    browserConfig.entry.unshift(WEBPACK.HOT_MIDDLEWARE_CLIENT);
    browserConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

    const webpackCompiler = webpack(browserConfig);

    app.use(webpackDevMiddleware(webpackCompiler, webpackDevOptions));
    app.use(require('webpack-hot-middleware')(webpackCompiler));
    /* eslint-enable */
  }
};
