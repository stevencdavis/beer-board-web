'use strict';

var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var webdriver_update = require("gulp-protractor").webdriver_update;
//var webdriver_standalone = require("gulp-protractor").webdriver_standalone;


gulp.task('webdriver_update', webdriver_update);
//gulp.task('webdriver_standalone', webdriver_standalone);

gulp.task('protractor', function(){
  return gulp.src(global.paths.e2e_tests)
    .pipe(protractor({
      configFile: ".protractor.conf.js"
    }))
    .on('error', function(e) {
      console.log("[protractor] Error running protractor tests: ", e.message);
      this.emit('end');
    });
});

