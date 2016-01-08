'use strict';

var gulp = require('gulp');
var Server = require('karma').Server;
var path = require('path');
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');


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
    autoWatch: true,
    singleRun: false,
    reporters: ['progress', 'osx']
  }, done).start();
});



gulp.task('karma:coverage:ts', ['karma:once'], function () {
  return gulp.src(global.config.coverage_file)
    .pipe(remapIstanbul({
      basePath: '.',
      reports: {
        //'json': 'coverage.json',
        'html': 'src/build/reports/coverage/ts'
      }
    }));
    //.pipe(gulp.dest('coverage-remapped.json'));
});
