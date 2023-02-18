const path = require("path");
module.exports = {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, "src"),
    entry: {
        index: ".",
    },
    output: {
        path: path.join(__dirname, "./dist/"),
        chunkFilename: "[id].js",
        assetModuleFilename: "[path][name][ext]",
        libraryTarget: "umd",
    },
    devtool: "source-map",
    resolve: {
        symlinks: false,
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".scss", ".svg"],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                type: "asset/resource",
            }
        ]
    },
    optimization: {
        // innerGraph: true,
        // minimize: false,
    },
    externals: [{"@demo/style1/dist/style1.css": "@demo/style1/dist/style1.css"}],
}