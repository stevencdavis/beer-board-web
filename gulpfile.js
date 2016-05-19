/**
 * Gulp configuration
 */

'use strict';

var requireDir = require('require-dir');


// Specify paths & globbing patterns for tasks.
global.paths = {

  // JSPM packages
  'jspm_packages': './src/assets/lib/jspm_packages/',

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
  'js_app': [
    './src/app/**/*.js',
    './src/config.js'
  ],

  // JS builds
  'js_build': [
    './src/build/**/*.js'
  ],

  // TypeSript sources
  'ts': [
    './src/**/*.ts',
    //'!./src/build/**/',
    '!./src/assets/lib/jspm_packages/**/'
  ],

  // User-created TypeScript sources
  'ts_user': [
    './src/app/**/*.ts'
  ],

  // SASS sources
  'scss': [
    './src/app/**/*.scss',
    './src/assets/scss/**/*.scss'
  ],

  // CSS folders
  'css': {
    'build': './src/build/css',
    'dist': './dist/css'
  },

  // Third-party assets
  'assets_jspm': [{
    'package': 'foundation-apps',
    'src': 'iconic/**/*.svg',
    'base': 'img/iconic'
  },{
    'package': 'fontawesome',
    'src': 'fonts/**/fontawesome-*',
    'base': 'fonts/fontawesome'
  }],

  'assets_images': ['./src/assets/images/*'],

  // Build folder (for Sass and templates compilation)
  'build': './src/build',

  // Distribution folder
  'dist': './dist',

  // Test coverage folder
  'coverage': './src/build/reports/coverage'
};

// Configs that refer to individual files
global.config = {
  'bundle_entry_point': './src/build/app/app.js',
  'scss_main': './src/assets/scss/main.scss',
  'css_file': {
    'dev': './build/css/app.css',
    'dist': './css/app.min.css'
  },
  'tsd_config': './tsd.json',
  'manifest_file': global.paths.dist + '/rev-manifest.json',
  'coverage_file': global.paths.coverage + '/coverage-final.json'
};

// Require all tasks in the 'gulp' folder.
requireDir('./dev/gulp/tasks', { recurse: false });
