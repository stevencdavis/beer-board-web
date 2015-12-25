/**
 * Gulp configuration
 */

'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');


// Specify paths & globbing patterns for tasks.
global.paths = {
  //// JSPM config files
  //'jspm': ['jspm_packages/system.js', 'config.js'],

  // Sources folder
  //'src': './src',

  // Unit test files
  'unit_tests': 'test/**/*.test.js',

  // End-to-end test files
  'e2e_tests': 'test/**/*-spec.js',

  // Nunjucks sources
  'nunjucks': './src/*.nunjucks',

  // HTML sources
  'html': [
    './src/**/*.html',
    '!./src/build/**/',
    '!./src/assets/lib/jspm_packages/**/'
  ],

  // Templates
  'templates': [
    './src/**/*.html',
    '!./src/build/**/',
    '!./src/assets/lib/jspm_packages/**/'
  ],

  // JS sources
  'js': [
    './src/**/*.js',
    '!./src/build/**/',
    '!./src/assets/lib/jspm_packages/**/'
  ],

  // SASS sources
  'scss': [
    './src/scss/**/*.scss',
    './src/assets/**/*.scss'
  ],

  //// Image sources
  //'img': './src/img/*',

  // CSS folders
  'css': {
    'build': './src/build/css',
    'dist': './dist/css'
  },

  // Build folder (for Sass and templates compilation)
  'build': './src/build',

  // Distribution folder
  'dist': './dist'
};

global.config = {
  'bundle_entry_point': './src/app/app.js',
  'css_file': {
    'dev': './build/css/app.css',
    'dist': './css/app.min.css'
  }
};

// Require all tasks in the 'gulp' folder.
requireDir('./dev/gulp/tasks', { recurse: false });

// Default task; start local server & watch for changes.
//gulp.task('default', ['serve']);

gulp.task('default', function (done) {
  runSequence(
    ['build:development', 'webdriver_update'],
    ['webdriver_standalone',
     'serve',
     'unit-test:tdd',
     'protractor'],
    done);
});
