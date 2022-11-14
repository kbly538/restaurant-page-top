const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require('path');


module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Faux à la Carte',
            template: './src/index.html',
        }),
    ],
    devServer: { static: './dist' },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|webp|tiff?)$/i,
                type: "asset/resource",

            },

        ],
    },
    optimization: {
        minimizer: [
          "...",
          new ImageMinimizerPlugin({
            minimizer: {
              implementation: ImageMinimizerPlugin.imageminMinify,
              options: {
                plugins: [
                  "imagemin-gifsicle",
                  "imagemin-mozjpeg",
                  "imagemin-pngquant",
                  "imagemin-svgo",
                ],
              },
            },
            generator: [
              {
                // You can apply generator using `?as=webp`, you can use any name and provide more options
                preset: "webp",
                implementation: ImageMinimizerPlugin.imageminGenerate,
                options: {
                  plugins: ["imagemin-webp"],
                },
              },
            ],
          }),
        ],
      },
}

