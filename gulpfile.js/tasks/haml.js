var gulp          = require('gulp'),
    config        = require('../config/haml'),
    browserSync   = require('browser-sync'),
    haml = require('gulp-haml-coffee'),
    swig         = require('gulp-swig'),
    fileinclude = require('gulp-file-include'),
    handleErrors = require('../lib/handleErrors');



gulp.task('haml', function() {
  return gulp.src(config.src)
    .pipe(fileinclude(config.swig))
    .pipe( haml() )
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});