exports.config = {
  //directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',
  //specs: ['todo-spec.js']
  baseUrl: 'http://localhost:3000',
  framework: 'jasmine',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    isVerbose: false,
    showTiming: true,
    includeStackTrace: false,
    showColors: true // Use colors in the command line report.
  }
};
