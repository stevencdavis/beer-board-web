'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('default', function (done) {
  runSequence(
    ['build:development', 'webdriver_update'],
    [//'webdriver_standalone',
      'serve',
      'karma:tdd',
      'protractor'],
    done);
});
