var webpack = require('webpack');
var path = require('path'); 

module.exports = {
    // change to .tsx if necessary
    entry: path.join(__dirname, "src/index.tsx"),
    devtool: "source-map",
    output: {
      filename: 'bundle.min.js',
      path: __dirname + '/bundle/js',
      globalObject: 'typeof self !== \'undefined\' ? self : this',
    },
    resolve: {
      // changed from extensions: [".js", ".jsx"]
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [          
          {
            test: /\.css$/,
            include: path.join(__dirname, 'src'),
            use: [ 
              { loader: "style-loader" },
              { 
                loader: 'typings-for-css-modules-loader',
                options: {
                  modules: true,
                  namedExport: true,
                  // localIdentName: '[local]--[hash:base64:5]',
                  localIdentName: '[local]',
                } 
              }, ]
            }, 
            {
              test: /\.scss$/,
              include: path.join(__dirname, 'src'),
              use: [ 
                { loader: "style-loader" },
                { 
                  loader: 'typings-for-css-modules-loader',
                  options: {
                    modules: true,
                    namedExport: true,
                    // localIdentName: '[local]--[hash:base64:5]',
                    localIdentName: '[local]',
                  } 
                }
              ],
          },  
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          },

          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
      new webpack.IgnorePlugin(/jsdom$/),
      new webpack.WatchIgnorePlugin([
        /\.js$/,
        /\.d\.ts$/
      ])
    ],

    // externals: {
    //   "react": "React",
    //   "react-dom": "ReactDOM"
    // },
  }