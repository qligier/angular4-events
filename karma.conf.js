module.exports = function (config) {
    config.set({
        browsers: [],
        frameworks: ['jasmine'],
        reporters: ['mocha'],
        singleRun: true,
        preprocessors: { './karma-test-runner.js': ['webpack', 'sourcemap'] },
        files: [
            { pattern: './karma-test-runner.js', watched: false }
        ],
        webpack: require('./webpack.config.test.js')
    });
};