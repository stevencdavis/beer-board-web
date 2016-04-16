/**
 * Serve the client with live reload
 **/

'use strict';

var gulp = require('gulp');
var bs = require('browser-sync');
var path = require('path');
var util = require('gulp-util');
var notify = require("gulp-notify");


gulp.task('serve', function () {

  // serve with BrowserSync
  bs.init({
            server: {
              baseDir:        './src',
              index:          'build/index.html',
              logConnections: true
            },
            notify: true,
            port:   3000,
            open:   false                 // don't open the url automatically
          });

  gulp.watch([global.paths.nunjucks], ['nunjucks:development']).on('change', logChanges);
  gulp.watch([global.paths.html], ['reload:html']).on('change', logChanges);
  gulp.watch([global.paths.scss], ['lint:scss', 'scss:development']).on('change', logChanges);
  gulp.watch([global.paths.js_app, global.paths.js_build], ['lint:js', 'reload:js']).on('change', logChanges);
  gulp.watch([global.paths.ts], ['lint:ts', 'typescript']).on('change', logChanges);
  gulp.watch([global.paths.e2e_tests], ['protractor']).on('change', logChanges);
  // Note: we don't need to watch unit test files since karma does that for us
});


function logChanges(event) {
  util.log(
    util.colors.green('File ' + event.type + ': ') +
    util.colors.magenta(path.basename(event.path))
  );
  notify('File ' + event.type + ': ' + path.basename(event.path));
}
