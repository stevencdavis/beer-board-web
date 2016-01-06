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
  fs.writeFileSync(global.paths.build + '/js/_templates.js',
    //'/// <reference path="../../typings/tsd.d.ts" />\n' +
    '"use strict";\n' +
    'export default angular.module("templates", []);'
  );

  // create typing file so we can import via typescript
  fs.writeFileSync(global.paths.build + '/js/_templates.d.ts',
    'declare var templatesModule;\n' +
    'export default templatesModule;'
  );

});

gulp.task('templates:production', function () {
  // create typing file so we can import via typescript
  fs.writeFileSync(global.paths.build + '/js/_templates.d.ts',
    'declare var templatesModule;\n' +
    'export default templatesModule;'
  );

  // scan source dir for HTML files and add them to template cache
  return gulp.src(global.paths.templates)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulpAngularTemplatecache({
      filename: '_templates.js',
      standalone: true
    }))
    .pipe(gulpInsert.prepend('export default '))
    .pipe(gulp.dest(global.paths.build + '/js'));
});
