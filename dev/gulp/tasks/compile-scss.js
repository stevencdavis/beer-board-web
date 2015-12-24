'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('compile-scss:development', function () {
  return gulp.src(global.paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'nested',
      sourceComments: true
    })
      .on('error', function (e) {
        console.log("Failed to compile SASS: ", e.message);
        this.emit('end');
      }))
    .pipe(concat('app.css'))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.' /* write as a separate file */))
    .pipe(gulp.dest(global.paths.css.build))
    .pipe(browserSync.reload({stream: true}))
    ;
});

// Compile sass with compression, minification (in case that's different than compression...),
// added '.min' suffix, and no browser-sync reloading
gulp.task('compile-scss:production', function () {
  return gulp.src(global.paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    })
      .on('error', function (e) {
        console.log("Failed to compile SASS: ", e.message);
        this.emit('end');
      }))
    .pipe(concat('app.css'))
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.' /* write as a separate file */))
    .pipe(gulp.dest(global.paths.css.dist));
});
