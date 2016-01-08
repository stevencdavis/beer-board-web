/**
 * Optimize assets (js):
 *  - uglify
 **/

var gulp = require('gulp');
var gulpIf = require('gulp-if');
var gulpUglify = require('gulp-uglify');
var size = require('gulp-size');
var notify = require("gulp-notify");


// Optimize the production build
gulp.task('optimize', function () {

  return gulp.src(global.paths.dist + '/**')

    // In addition to minifying via the jspm bundler, uglifyjs provides
    // some additional capabilities such as removing unreachable code, etc.
    .pipe(gulpIf('*.js', gulpUglify({
      //mangle: false
    })))

    .pipe(gulp.dest(global.paths.dist))
    .pipe(size({showFiles: true}))
    .pipe(notify({message: "Production build complete!", onLast: true}));
});
