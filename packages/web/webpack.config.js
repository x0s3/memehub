const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',

    // Path to the entry file
    entry: path.join(__dirname, 'src/index.tsx'),

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
                test: /\.(js|ts|tsx|web.tsx)$/,
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
                            '@babel/preset-typescript',
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
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        alias: {
            'react-native$': require.resolve('react-native-web'),
        },
        extensions: ['.web.js', '.js', '.ts', '.tsx', '.web.tsx']
    },

    // Development server config
    devServer: {
        host: '0.0.0.0',
        contentBase: [path.join(__dirname, 'public')],
        historyApiFallback: true,
    },

    optimization: {
        minimizer: [new TerserPlugin()],
    },
};