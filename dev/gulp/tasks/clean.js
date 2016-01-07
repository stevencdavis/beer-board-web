'use strict';

var gulp = require('gulp');
var del = require('del');
var fs = require('fs');


// Empty the build dir and re-create any necessary structure
gulp.task('clean', function (done) {

  // Delete all files in the build and dist directories
  del.sync([global.paths.dist + '/*']);
  del.sync([global.paths.build + '/*']);

  // Create a 'js' sub-folder in the build path
  fs.mkdirSync(global.paths.build + '/js');
  done();
});
