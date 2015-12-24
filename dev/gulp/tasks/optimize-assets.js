/**
 * Optimize assets (js):
 *  - ng-annotate
 *  - uglify
 **/

var gulp = require('gulp');
var gulpIf = require('gulp-if');
var gulpNgAnnotate = require('gulp-ng-annotate');
var gulpUglify = require('gulp-uglify');


gulp.task('optimize-assets', function () {

  return gulp.src(global.paths.dist + '/**')

    //.pipe(gulpIf('*.js', gulpNgAnnotate()))

    // In addition to minifying via the jspm bundler, uglifyjs provides
    // some additional capabilities such as removing unreachable code, etc.
    //.pipe(gulpIf('*.js', gulpUglify()))

    .pipe(gulp.dest(global.paths.dist));
});
