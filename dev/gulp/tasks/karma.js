'use strict';

var gulp = require('gulp');
var Server = require('karma').Server;
var path = require('path');


/**
 * Run test once and exit
 * (used for individual command-line runs)
 */
gulp.task('karma:once', function (done) {
  new Server({
    configFile: path.resolve('.karma.conf.js'),
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 * (used to monitor for changes to files and keep tests running in the background)
 */
gulp.task('karma:tdd', function (done) {
  new Server({
    configFile: path.resolve('.karma.conf.js'),
    singleRun: false
  }, done).start();
});
