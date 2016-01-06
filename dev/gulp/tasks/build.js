'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('build:development', function (done) {
  runSequence(
    'clean',
    'lint',
    'modernizr',
    ['tsd',
     'scss:development',
     'nunjucks:development',
     'templates:development',
     'typescript'],
    done);
});

gulp.task('build:production', function (done) {
  runSequence(
    'clean',
    'lint',
    'modernizr',
    ['tsd',
     'scss:production',
     'nunjucks:production',
     'templates:production',
     'typescript'],
    'bundle',
    'optimize',
    done);
});

