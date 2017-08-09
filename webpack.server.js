import nodeExternals from 'webpack-node-externals';
import { join } from 'path';
import webpack from 'webpack';

module.exports = {
  entry: './server/index.js',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      __CACHE__VERSION__: new Date().getTime()
    })
  ],
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.scss'
    ],
  },
  output: {
    path: join(__dirname, 'server'),
    filename: 'server.build.js'
  },
  externals: [ nodeExternals() ]
};
