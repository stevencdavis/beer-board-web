'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('build:development', function (done) {
  runSequence(
    'clean',
    ['tsd',
     'lint',
     'modernizr',
     'jscpd:ts'],
    ['scss:development',
     'nunjucks:development',
     'templates:development',
     'typescript'],
    'jscpd:css',
    done);
});

gulp.task('build:production', function (done) {
  runSequence(
    'clean',
    ['tsd',
     'lint',
     'modernizr',
     'jscpd:ts'],
    ['scss:production',
     'nunjucks:production',
     'templates:production',
     'typescript'],
    'jscpd:css',
    'bundle',
    'revreplace',
    'optimize',
    done);
});

