const path = require('path');
const projectPath = path.join(__dirname, 'public');

//entry->output
module.exports = {
    entry: './src/app.js',
    output: {
        path: projectPath,
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },

    devtool:'cheap-module-eval-source-map',

    devServer:{
        contentBase:  path.join(__dirname, 'public')
    },
    performance: { hints: false }
};