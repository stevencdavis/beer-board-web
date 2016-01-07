'use strict';

var gulp = require('gulp');
var cache = require('gulp-cached');
var esLint = require('gulp-eslint');
var tsLint = require("gulp-tslint");
var sassLint = require('gulp-sass-lint');


// Lint JS
gulp.task('lint:js', function () {
  return gulp.src(global.paths.js_app)
    .pipe(cache('lint-js'))
    .pipe(esLint())
    .pipe(esLint.format());
});

// Lint TypeScript
gulp.task("lint:ts", function () {
  return gulp.src(global.paths.ts)
    .pipe(cache('lint-ts'))
    .pipe(tsLint())
    .pipe(tsLint.report("verbose"))
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
gulp.task('lint', ['lint:js', 'lint:ts', 'lint:scss']);
