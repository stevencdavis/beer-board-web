exports.config = {
  directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['todo-spec.js']
  baseUrl: 'http://localhost:3000',
  framework: 'jasmine2',

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    isVerbose: true,
    showTiming: true,
    includeStackTrace: true,
    showColors: true // Use colors in the command line report.
  }
};
