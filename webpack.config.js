const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/app.js'
    },
    devServer: {
        compress: true,
        port: 9090,
        overlay: true
    }
}