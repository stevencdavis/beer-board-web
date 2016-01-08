'use strict';

var gulp  = require('gulp');
var jscpd = require('gulp-jscpd');


gulp.task('jscpd:ts', function() {
  return gulp.src(global.paths.ts_user)
    .pipe(jscpd({
      verbose    : true
    }));
});

gulp.task('jscpd:css', function() {
  return gulp.src(global.paths.css.build)
    .pipe(jscpd({
      verbose    : true
    }));
});
