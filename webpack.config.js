const path = require('path');
//const loader = require('sass-loader');


module.exports = {
    entry : './src/app.js',
    output : {
        path:path.join(__dirname, 'public'),
        filename : 'bundle.js'
    },
    module : {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader : 'babel-loader',
        }, 
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader?url=true',
                'sass-loader'
            ]
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
            use: [
                    {
                    loader: 'url-loader',
                        
                    options: {
                    limit: 8192, // if less than 10 kb, add base64 encoded image to css 
                    name: '[name].[hash:7].[ext]'
                }
              },
              {
                    loader: 'img-loader',
            }
            ]
        },
        ]
    },    
    devtool : 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback:true
    }
};

