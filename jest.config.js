const env = process.env.NODE_ENV || '';

const config = {
  roots: ['src'],
  cacheDirectory: '.jest-cache',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/index.js',
    '!src/**/*.story.js',
    '!src/**/*.type.js',
    '!src/**/stories/*.js',
  ],
  setupFiles: ['./test/setup'],
  setupTestFrameworkScriptFile: 'jest-enzyme',
};

if (env === 'ci') {
  Object.assign(config, {
    collectCoverage: true,
    coverageDirectory: './reports/coverage',
    testResultsProcessor: './test/report',
  });
}

module.exports = config;
