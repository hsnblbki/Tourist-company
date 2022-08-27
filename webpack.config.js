const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        writeToDisk: true,
        open: true,
    },

    module: {
        rules: [

            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.(sass|css|scss)$/,
                use: [

                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                                publicPath: "../",
                        },
                    }, 

                "css-loader",
                
                "sass-loader",
                ],
            },

            {
                test: /\.(jpg|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images',
                        },
                    },
                ],
            },

            
            {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                        },
                    },
                ],
            },

            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename: "index.html"
        }),

        new HtmlWebpackPlugin({
            template:"./src/register.html",
            filename: "register.html"
        }),

        new MiniCssExtractPlugin({
            filename: "css/Style.css",
        })
    ],
};