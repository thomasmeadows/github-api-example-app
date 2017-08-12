import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractSass = new ExtractTextPlugin({
  filename: 'styles.css'
});

const plugins = [
  extractSass
];

if (process.env.COMPRESS) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: [
    path.join(__dirname, 'app', 'index.js'),
    path.join(__dirname, 'app', 'styles.scss')
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname, 'node_modules/foundation-sites/scss')
                ]
              }
            }
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env' ]
          }
        }
      }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.scss'
    ],
  },
  output: {
    path: path.join(__dirname, 'server', 'public'),
    filename: 'browser.js'
  }
};
