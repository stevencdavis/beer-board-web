'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.task('build:development', function (done) {
  runSequence(
    'clean',
    ['typings',
     'lint',
     'modernizr',
     'jscpd:ts'],
    ['assets_jspm:development',
     'assets_favicons:development',
     'scss:development',
     'nunjucks:development',
     'templates:development',
     'typescript'],
    'jscpd:css',
    done);
});

gulp.task('build:production', function (done) {
  runSequence(
    'clean',
    ['typings',
     'lint',
     'modernizr',
     'jscpd:ts'],
    ['assets_jspm:production',
     'assets_images:production',
     'assets_favicons:production',
     'scss:production',
     'nunjucks:production',
     'templates:production',
     'typescript'],
    'jscpd:css',
    'bundle',
    'revreplace',
    'optimize',
    done);
});

