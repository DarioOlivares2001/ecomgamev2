// Karma configuration
// Generated on Tue Dec 03 2024 15:14:58 GMT-0300 (hora de verano de Chile)

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine:{
      },
      clearContent: false
    },

    files: [],

    exclude: [],
    preprocessors: {},

    reporters: ['progress', 'kjhtml'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],
    singleRun: false,

    concurrency: Infinity,

    jasmineHtmlReporter: {
      suppressAll: true // Removes the duplicated traces
    },

    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html', subdir: 'html-report' },
        { type: 'lcov', subdir: 'lcov-report' }
      ]
    },

    
    restartOnFileChange: true
  });
};
