'use strict';

var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var browserSync = require('browser-sync');

var options = {
  watch: false,
  trimBlocks: true,
  lstripBlocks: true
};

gulp.task('compile-nunjucks:development', function () {
  nunjucksRender.nunjucks.configure(['./src'], options);
  return gulp.src(global.paths.nunjucks)
    .pipe(nunjucksRender({
      production: false,
      css_file: global.config.css_file.dev
    }))
    .pipe(gulp.dest(global.paths.build))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('compile-nunjucks:production', function () {
  nunjucksRender.nunjucks.configure(['./src'], options);
  return gulp.src(global.paths.nunjucks)
    .pipe(nunjucksRender({
      production: true,
      css_file: global.config.css_file.dist
    }))
    .pipe(gulp.dest(global.paths.dist));
});
