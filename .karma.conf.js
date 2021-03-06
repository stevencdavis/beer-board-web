// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'jspm',
      'jasmine'
    ],


    // list of files / patterns to load in the browser
    // files: [],

    // configuration for karma-jspm
    jspm: {
      useBundles: false,
      config: 'src/config.js',
      loadFiles: [
        'test/**/*.test.js'
      ],
      serveFiles: [
        //'src/app/**/*.ts',
        'src/build/**/*.js'
      ],
      packages: 'src/assets/lib/jspm_packages'
    },

    proxies: {
      '/test/': '/base/test/',
      '/assets/': '/base/src/assets/',
      '/src/': '/base/src/'
      //'/base/lib/': '/base/src/lib/'
    },

    // list of files to exclude
    exclude: [
    ],


    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/build/app/**/*.js': ['babel', 'coverage']
    },

    babelPreprocessor: {
      options: {
        presets: ['es2015']//,
        //sourceMap: 'inline'
      }//,
      //filename: function (file) {
      //  return file.originalPath.replace(/\.js$/, '.es5.js');
      //},
      //sourceFileName: function (file) {
      //  return file.originalPath;
      //}
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    //preprocessors: {
    //  'src/app/**/*.ts': ['typescript'],
    ////  'src/build/**/*.ts': ['typescript'],
    ////  'test/**/*.ts': ['typescript']
    //},

    //typescriptPreprocessor: {
    //  // options passed to the typescript compiler
    //  options: {
    //    sourceMap: true, // (optional) Generates corresponding .map file.
    //    target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
    //    //module: 'commonjs', // (optional) Specify module code generation: 'commonjs' or 'amd'
    //    noImplicitAny: false, // (optional) Warn on expressions and declarations with an implied 'any' type.
    //    //noResolve: true, // (optional) Skip resolution and preprocessing.
    //    removeComments: true, // (optional) Do not emit comments to output.
    //    concatenateOutput: false // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
    //  },
    //  // extra typing definitions to pass to the compiler (globs allowed)
    //  typings: [
    //    'src/typings/tsd.d.ts'
    //  ],
    //  // transforming the filenames
    //  transformPath: function(path) {
    //    return path.replace(/\.ts$/, '.js');
    //  }
    //},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      reporters: [
        {
          type: 'text'
        },
        {
          type: 'text-summary'
        },
        {
          type: 'html',
          dir: 'src/build/reports/coverage/es5'
        },
        {
          type: 'json',
          dir: 'src/build/reports/coverage',
          subdir: '.'
        }
      ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'Chrome'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
