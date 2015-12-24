'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('reload:html', function() {
  gulp.src(global.paths.html)
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('reload:js', function() {
  gulp.src(global.paths.js)
    .pipe(browserSync.reload({stream: true}));
});
