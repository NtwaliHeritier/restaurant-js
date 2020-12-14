const path = require('path')

module.export = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: {loader: ['css-loader', 'style-loader']}
            }
        ]
    }
}