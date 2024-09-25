const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Text Editor App',
      }),

      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'service-work.js',
      }),

      new WebpackPwaManifest ({
        name: 'Text Editor App',
        short_name: 'TextEditor',
        description: 'A Simple Text Editor With Offline Capabilities!',
        background_color: '#ffffff',
        theme_color: '#317EFB',
        start_url:'/',
        display:'standalone',
        icons: [
          {
            src: path.resolve('src/images/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader','css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options:{
              presets: ['@babel/preset-env'],
            },
          },
        },
        
      ],
    },
  };
};
