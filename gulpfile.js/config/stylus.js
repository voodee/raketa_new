var config = require('./')

module.exports = {
  autoprefixer: { browsers: ['last 2 version'] },
  src: config.sourceAssets + "/stylesheets/**/*.{styl,sass,scss}",
  dest: config.publicAssets + '/css',
  settings: {
  	//use: [nib(), bootstrap()],
    indentedSyntax: true, // Enable .sass syntax!
    imagePath: 'assets/images' // Used by the image-url helper
  }
}