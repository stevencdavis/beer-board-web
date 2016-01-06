'use strict';

var gulp = require('gulp');
var tsd = require('gulp-tsd');


gulp.task('tsd', function (callback) {
  tsd({
    "command": "reinstall", // this plugin supports only "reinstall"
    "latest": true,         // if this property is true, tsd always fetches HEAD definitions
    "config": global.config.tsd_config, // file path for configuration file (see below)
  }, callback);
});
