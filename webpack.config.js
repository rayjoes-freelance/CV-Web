const path = require('path');


module.exports = (env) => {
    const isProduction = env == 'production';
    return {
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
                        limit: 8192,  
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
        devtool : isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback:true
        }
     
    }
           
};

