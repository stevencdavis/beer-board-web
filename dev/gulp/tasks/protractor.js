'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var protractor = require("gulp-protractor").protractor;
var webdriver_update = require("gulp-protractor").webdriver_update;
var webdriver_standalone = require("gulp-protractor").webdriver_standalone;


gulp.task('webdriver_update', webdriver_update);

gulp.task('webdriver_standalone', webdriver_standalone);

gulp.task('protractor', function(){
  return gulp.src(global.paths.e2e_tests)
    .pipe(protractor({
      configFile: ".protractor.conf.js"
      //,
      //args: ['--baseUrl', 'http://localhost:3000/']
    }))
    .on('error', function(e) {
      //throw e
      console.log("Error running protractor tests: ", e.message);
      this.emit('end');
    });
});

