'use strict';

var gulp = require('gulp');
var del = require('del');

// Empty the build dir
gulp.task('clean', function (done) {
  del.sync([global.paths.dist + '/*']);
  del.sync([global.paths.build + '/*']);
  done();
});
