'use strict';

var gulp = require('gulp');
var fs = require('fs');
var modernizr = require('gulp-modernizr');
var rename = require('gulp-rename');


// Create a custom Modernizr build that only includes the functions that the project uses
gulp.task('modernizr', function() {

  // Create typing file so we can import via typescript
  fs.writeFileSync(global.paths.build + '/js/modernizr-custom.d.ts',
    'declare var Modernizr;\n' +
    'export default Modernizr;'
  );

  return gulp.src(global.paths.js_app, global.paths.ts)
    .pipe(modernizr({
      "files": {
        "src": [global.paths.js_app, global.paths.ts]
      },
      "tests": [
        "touchevents"
      ],
      "classPrefix": "modernizr-",
      "uglify": false
    }))
    .pipe(rename({
      suffix: '-custom'
    }))
    .pipe(gulp.dest(global.paths.build + '/js'));
});
