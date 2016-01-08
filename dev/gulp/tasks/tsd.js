'use strict';

var gulp = require('gulp');
var tsd = require('gulp-tsd');
var plumber = require('gulp-plumber');


gulp.task('tsd', function () {
  return gulp.src('./.tsd.config.json')
    .pipe(plumber())
    .pipe(tsd())
    .on('error', function(e) {
      console.log("[tsd] Error fetching latest typings from GitHub (probably rate limited): ", e.message);
      //this.emit('end');
    });
});


//gulp.task('tsd', function (callback) {
//  tsd({
//    command: 'reinstall',
//    latest: true,
//    config: './tsd.json'
//  }, callback);
//});
