'use strict';

var gulp = require('gulp');
var gulp_jspm = require('gulp-jspm');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");


gulp.task('bundle', function(){
  return gulp.src(global.config.bundle_entry_point)
    .pipe(sourcemaps.init())
    .pipe(gulp_jspm({
      selfExecutingBundle: true,
      minify: false
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(global.paths.dist));
});

