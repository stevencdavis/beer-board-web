'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


// This task is run when `gulp` is run on the command line with no args
gulp.task('default', function (done) {
  runSequence(
    ['build:development', 'webdriver_update'],
    [//'webdriver_standalone',
      'serve',
      //'karma:tdd',
      'protractor'],
    done);
});
