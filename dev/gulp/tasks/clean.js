'use strict';

var gulp = require('gulp');
var del = require('del');
var fs = require('fs');

// Empty the build dir
gulp.task('clean', function (done) {
  del.sync([global.paths.dist + '/*']);
  del.sync([global.paths.build + '/*']);
  fs.mkdirSync(global.paths.build + '/js');
  done();
});
