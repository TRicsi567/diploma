const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/server',
    target: 'node14.15',
    output: {
      path: path.resolve(
        __dirname,
        'build',
         'server'
      ),
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    stats: {
      env: true,
      outputPath: true,
    },
    optimization: {
      minimize: false,
    },
};
