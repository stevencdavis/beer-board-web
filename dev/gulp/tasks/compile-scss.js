'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassJspm = require('sass-jspm-importer');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('compile-scss:development', function () {
  return gulp.src(global.config.scss_main)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'nested',
      sourceComments: true,
      functions: sassJspm.resolve_function(global.config.jspm_packages),
      importer: sassJspm.importer
    })
      .on('error', function (e) {
        console.log("[compile-scss:development] Failed to compile SASS: ", e.message);
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
  return gulp.src(global.config.scss_main)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed',
      functions: sassJspm.resolve_function(global.config.jspm_packages),
      importer: sassJspm.importer
    })
      .on('error', function (e) {
        console.log("[compile-scss:production] Failed to compile SASS: ", e.message);
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
