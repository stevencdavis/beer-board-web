'use strict';

var gulp = require('gulp');
var cache = require('gulp-cached');
var esLint = require('gulp-eslint');
var sassLint = require('gulp-sass-lint');

// Lint JS
gulp.task('lint:js', function () {
  return gulp.src(global.paths.js)
    .pipe(cache('lint-js'))
    .pipe(esLint())
    .pipe(esLint.format());
});

// Lint SASS
gulp.task('lint:scss', function () {
  return gulp.src(global.paths.scss)
    .pipe(cache('lint-sass'))
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

// Lint all the things!
gulp.task('lint', ['lint:js', 'lint:scss']);
