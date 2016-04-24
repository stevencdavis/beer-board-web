"use strict";

var gulp = require("gulp");
var gulpTypings = require("gulp-typings");
var plumber = require('gulp-plumber');

gulp.task("typings",function(){
  return gulp.src("./typings.json")
    // .pipe(plumber())
    .pipe(gulpTypings()) // will install all typings files in pipeline.
    // .on('error', function(e) {
    //   console.log("[typings] Error fetching latest typings from GitHub (probably rate limited): ", e.message);
    // });
  ;
});
