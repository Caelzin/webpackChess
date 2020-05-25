const path = require('path');
const HTMMWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
const isDev = process.env.NODE_ENV === 'development';
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };
    if(!isDev) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config;
};

module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src')
        },
    },
    entry: {
        'play': './src/js/pages/play.js',
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    optimization: optimization(),
    plugins: [
        new HTMMWebpackPlugin({
            filename: 'index.html',
            template: './src/play.html',
            chunks: ['play'],
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /pieces[\S]*\.svg$/,
                use: [
                    'svg-inline-loader'
                ]
            },
            {
                test: /background[\S]*\.svg$/,
                use: [
                    'svg-url-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
                options: {
                    name: filename('[ext]')
                }
            }
        ]
    }
};