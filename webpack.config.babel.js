import browserWebpack from './webpack.browser';
import serverWebpack from './webpack.server';
import webpackMerge from 'webpack-merge';

const webpackConfigArray = [
  browserWebpack,
  serverWebpack
];

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2016'
          ]
        }
      }
    ]
  },
  devtool: 'sourcemap'
};

webpackConfigArray.forEach((configObject, i) => {
  webpackConfigArray[i] = webpackMerge.smart(configObject, baseConfig);
});

export const browserConfig = webpackConfigArray[0];

export default webpackConfigArray;
