'use strict';

var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');


var tsProject = tsc.createProject("tsconfig.json");

gulp.task('typescript', function() {
  return gulp.src(global.paths.ts)
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(global.paths.build));
});
