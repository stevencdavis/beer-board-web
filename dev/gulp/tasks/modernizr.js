'use strict';

var gulp = require('gulp');
var modernizr = require('gulp-modernizr');
var rename = require('gulp-rename');


gulp.task('modernizr', function() {
  return gulp.src(global.paths.js)
    .pipe(modernizr({
      "files": {
        "src": [global.paths.js]
      },
      "tests": [
        "touchevents"
      ],
      "classPrefix": "modernizr-",
      "uglify": false
    }))
    .pipe(rename({
      suffix: '-custom'
    }))
    .pipe(gulp.dest(global.paths.build));
});
