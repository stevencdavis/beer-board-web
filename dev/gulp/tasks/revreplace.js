'use strict';

var gulp = require("gulp");
var revReplace = require("gulp-rev-replace");


gulp.task("revreplace", function(){
  var manifest = gulp.src(global.config.manifest_file);

  return gulp.src(global.paths.dist + "/index.html")
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(global.paths.dist));
});
