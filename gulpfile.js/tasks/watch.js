var gulp     = require('gulp');
var haml     = require('../config/haml');
var iconFont = require('../config/iconFont');
var images   = require('../config/images');
var stylus     = require('../config/stylus');
var fonts    = require('../config/fonts');
var watch    = require('gulp-watch');

gulp.task('watch', ['browserSync'], function() {
  watch(images.src, function() { gulp.start('images'); });
  watch(stylus.src, function() { gulp.start('stylus'); });
  watch(iconFont.src, function() { gulp.start('iconFont'); });
  watch(fonts.src, function() { gulp.start('fonts'); });
  watch(haml.watch, function() { gulp.start('haml'); });
});
