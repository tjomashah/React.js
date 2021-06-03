var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                // include: SRC,
                test: /\.(eot|gif|otf|png|jpeg|svg|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [ 'file-loader' ],
              },
        ],
    },
    resolve: {
        mainFiles: ['index', 'Index'],
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: '/api'
        })
    }
}