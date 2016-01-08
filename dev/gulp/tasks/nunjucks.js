'use strict';

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var bs = require('browser-sync');


// Nunjucks compilation options
var options = {
  watch: false,
  trimBlocks: true,
  lstripBlocks: true
};

// Create a development compilation of the nunjucks files
gulp.task('nunjucks:development', function () {
  nunjucksRender.nunjucks.configure(['./src'], options);
  return gulp.src(global.paths.nunjucks)
    .pipe(nunjucksRender({
      production: false,
      css_file: global.config.css_file.dev
    }))
    .pipe(gulp.dest(global.paths.build))
    .pipe(bs.reload({stream: true}));
});

// Create a production version of the nunjucks files
gulp.task('nunjucks:production', function () {
  nunjucksRender.nunjucks.configure(['./src'], options);
  return gulp.src(global.paths.nunjucks)
    .pipe(nunjucksRender({
      production: true,
      css_file: global.config.css_file.dist
    }))
    .pipe(gulp.dest(global.paths.dist));
});
