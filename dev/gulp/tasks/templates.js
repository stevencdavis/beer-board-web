/**
 * Compile templates into cache
 */

var gulp = require('gulp');
var gulpAngularTemplatecache = require('gulp-angular-templatecache');
var gulpInsert = require('gulp-insert');
var htmlmin = require('gulp-htmlmin');
var fs = require('fs');


gulp.task('templates:development', function () {
  // create empty module in development
  fs.writeFileSync(
    global.paths.build + '/' + '_templates.js',
    'export default angular.module("templates", []);'
  );
});

gulp.task('templates:production', function () {
  // scan source dir for HTML files and add them to template cache
  return gulp.src(global.paths.templates)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulpAngularTemplatecache({
      filename: '_templates.js',
      standalone: true
    }))
    .pipe(gulpInsert.prepend('export default '))
    .pipe(gulp.dest(global.paths.build));
});
