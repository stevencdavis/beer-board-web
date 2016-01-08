'use strict';

var gulp = require('gulp');
var jspm = require('gulp-jspm');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var rev = require("gulp-rev");


// Create a JSPM / SystemJS bundle file
gulp.task('bundle', function(){
  return gulp.src(global.config.bundle_entry_point)
    .pipe(sourcemaps.init())
    .pipe(jspm({
      selfExecutingBundle: true,
      minify: false                  // We'll minify later with Uglify for greater control
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(rev())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(global.paths.dist))
    .pipe(rev.manifest(global.config.manifest_file, {base: global.paths.dist, merge: true}))
    .pipe(gulp.dest(global.paths.dist));
});

