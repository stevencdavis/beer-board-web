'use strict';

var gulp = require('gulp');
var tsc = require('gulp-typescript');
//var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');


var tsProject = tsc.createProject("tsconfig.json");

gulp.task('typescript', function() {
  //var tsResult = gulp.src(global.paths.ts)
  //  .pipe(sourcemaps.init())
  //  .pipe(tsc(tsProject))
  //  .pipe(babel({
  //    presets: ['es2015']
  //  }));
  //
  //tsResult.dts.pipe(gulp.dest(global.paths.build));
  //return tsResult.js
  //  //.pipe(concat('output.js'))
  //  .pipe(sourcemaps.write('.'))
  //  .pipe(gulp.dest(global.paths.build));

  return gulp.src(global.paths.ts)
    .pipe(sourcemaps.init())
    .pipe(tsc(tsProject))
    //.pipe(babel(
    //{
    //  presets: ['es2015'],
    //  plugins: ["transform-es2015-modules-systemjs"]
    //}
    //))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(global.paths.build));
});
