const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',

    // Path to the entry file
    entry: path.join(__dirname, 'src/index.js'),

    // Path for the output files
    output: {
        filename: 'app.bundle.js',
        chunkFilename: 'app.bundle.js',
        path: path.join(__dirname, 'dist'),
    },

    // Enable source map support
    devtool: 'source-map',

    // Loaders and resolver config
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Disable reading babel configuration
                        babelrc: false,
                        configFile: false,

                        // The configuration for compilation
                        presets: [
                            ['@babel/preset-env', { useBuiltIns: 'usage' }],
                            '@babel/preset-react',
                            '@babel/preset-flow',
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-object-rest-spread'
                        ],
                    },
                },
            },
            {
                test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            }
        ],
    },
    resolve: {
        alias: {
            'react-native$': require.resolve('react-native-web'),
        }
    },

    // Development server config
    devServer: {
        contentBase: [path.join(__dirname, 'public')],
        historyApiFallback: true,
    },

    optimization: {
        minimizer: [new TerserPlugin()],
    },
};