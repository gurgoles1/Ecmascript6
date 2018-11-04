// path paketet är något som finns med nodejs och som hjälper till
// med att hitta path för vissa resurser. Bra när man behöver absoluta vägar,
// som vid webpack config output -> path.
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/main2.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bunru.js',
      publicPath: '/build'
    },
    // Med module -> rules, kan man göra regler som objekt för att t.ex
    // kunna ladda in css i js (css-loader) och kunna läsa av dem
    // (style-loader). Detta gäller olika slags transformering av koden.
    module: {
      rules: [
          {
            test: /\.css$/,
            use: [
              //(Viktigt att style-loader är först)
              'style-loader',
              'css-loader'
              ]
            }
        ]
      },
    /*plugins: [
      // Tar detta plugin (uglify) från webpack. Går att installera
      // för sig också. Googla för att veta mer om det.
      new webpack.optimize.UglifyJsPlugin({
        // ...
      })
    ]*/


}
