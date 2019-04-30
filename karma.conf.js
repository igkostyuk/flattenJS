module.exports = config => {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: ["solution.js", "tests/**/*.js"],
    exclude: [],
    preprocessors: {},
    reporters: ["dots"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["ChromeHeadless"],
    singleRun: true,
    concurrency: Infinity
  });
};
