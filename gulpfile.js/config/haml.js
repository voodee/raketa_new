var config = require('./')

module.exports = {
  watch: config.sourceDirectory + '/views/**/*.haml',
  src: [config.sourceDirectory + '/views/**/*.haml', '!**/{layouts,shared}/**'],
  dest: config.publicDirectory,
  swig: {
    defaults: { cache: false }
  },
  fileinclude: {

  }
}