const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const SRC = join(__dirname, "src");
const DIST = join(__dirname, "dist");
const CLIENT_SRC = join(SRC, "client");
const SERVER_SRC = join(SRC, "server");
const CLIENT_DIST = join(DIST, "client");
const SERVER_DIST = join(DIST, "server");

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true
    },
    entry: ["@babel/polyfill", join(CLIENT_SRC, "index.js")],
    output: {
        path: CLIENT_DIST,
        filename: "index.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]  //Preset used for env setup
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    },
    performance: {
        hints: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(CLIENT_SRC, "index.html")
        })
    ],
    stats: {
        colors: true,
        logging: false
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                chunkFilter: (chunk) => {
                    // Exclude uglification for the `vendor` chunk
                    if (chunk.name === 'vendor') {
                        return false;
                    }
            
                    return true;
                }
            })
        ]
    }
}