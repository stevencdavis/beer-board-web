'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('build:development', function (done) {
  runSequence(
    'clean',
    'lint',
    'modernizr',
    ['compile-scss:development',
     'compile-nunjucks:development',
     'compile-templates:development'],
    done);
});

gulp.task('build:production', function (done) {
  runSequence(
    'clean',
    'lint',
    'modernizr',
    ['compile-scss:production',
     'compile-nunjucks:production',
     'compile-templates:production',
     'bundle'],
    'optimize-assets',
    done);
});

