'use strict';

var gulp = require('gulp');
var jspmAssets = require('gulp-jspm-assets');


gulp.task('assets_jspm:development', function () {
  for (var assetIndex in global.paths.assets_jspm) {
    jspmAssets.jspmAssets(global.paths.assets_jspm[assetIndex].package, global.paths.assets_jspm[assetIndex].src)
      .pipe(gulp.dest(global.paths.build + '/assets/' + global.paths.assets_jspm[assetIndex].base));
  }
});

gulp.task('assets_favicons:development', function () {
  gulp.src(global.paths.assets_favicons)
    .pipe(gulp.dest(global.paths.build));
});

gulp.task('assets_jspm:production', function () {
  for (var assetIndex in global.paths.assets_jspm) {
    jspmAssets.jspmAssets(global.paths.assets_jspm[assetIndex].package, global.paths.assets_jspm[assetIndex].src)
      .pipe(gulp.dest(global.paths.dist + '/assets/' + global.paths.assets_jspm[assetIndex].base));
  }
});

gulp.task('assets_images:production', function () {
  gulp.src(global.paths.assets_images)
    .pipe(gulp.dest(global.paths.dist + '/assets/images/'));
});

gulp.task('assets_favicons:production', function () {
  gulp.src(global.paths.assets_favicons)
    .pipe(gulp.dest(global.paths.dist));
});
