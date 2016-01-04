'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('build:development', function (done) {
  runSequence(
    'clean',
    'lint',
    'modernizr',
    ['scss:development',
     'nunjucks:development',
     'templates:development'],
    done);
});

gulp.task('build:production', function (done) {
  runSequence(
    'clean',
    'lint',
    'modernizr',
    ['scss:production',
     'nunjucks:production',
     'templates:production',
     'bundle'],
    'optimize',
    done);
});

