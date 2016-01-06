'use strict';

var gulp = require('gulp');
var Server = require('karma').Server;
var path = require('path');

/**
 * Run test once and exit
 */
gulp.task('karma:once', function (done) {
  new Server({
    configFile: path.resolve('.karma.conf.js'),
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('karma:tdd', function (done) {
  new Server({
    configFile: path.resolve('.karma.conf.js'),
    singleRun: false
  }, done).start();
});
