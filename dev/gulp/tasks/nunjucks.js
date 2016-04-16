'use strict';

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var bs = require('browser-sync');

// Nunjucks compilation options
var envOptions = {
  watch:        false,
  trimBlocks:   true,
  lstripBlocks: true
};

// Create a development compilation of the nunjucks files
gulp.task('nunjucks:development', function () {
  return gulp.src(global.paths.nunjucks)
    .pipe(nunjucksRender({
                           path:       './src',
                           envOptions: envOptions,
                           data:       {
                             production: false,
                             css_file:   global.config.css_file.dev
                           }
                         }))
    .pipe(gulp.dest(global.paths.build))
    .pipe(bs.reload({stream: true}));
});

// Create a production version of the nunjucks files
gulp.task('nunjucks:production', function () {
  // nunjucksRender.nunjucks.configure(['./src'], envOptions);
  return gulp.src(global.paths.nunjucks)
    .pipe(nunjucksRender({
                           path:       './src',
                           envOptions: envOptions,
                           data:       {
                             production: true,
                             css_file:   global.config.css_file.dist
                           }
                         }))
    .pipe(gulp.dest(global.paths.dist));
});
