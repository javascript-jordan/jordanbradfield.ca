const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SRC = join(__dirname, "src");
const DIST = join(__dirname, "dist");
const CLIENT_SRC = join(SRC, "client");
const SERVER_SRC = join(SRC, "server");
const CLIENT_DIST = join(DIST, "client");
const SERVER_DIST = join(DIST, "server");

module.exports = {
    entry: join(CLIENT_SRC, "index.js"),
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
        colors: true
    }
}