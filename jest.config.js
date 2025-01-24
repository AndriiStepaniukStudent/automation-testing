export default {
    reporters: [
      'default', 
      [ 'jest-html-reporter', {
        pageTitle: 'Google Homepage Tests',
        outputPath: './tests/reports/test-report.html',
        includeConsoleLog: true,
        useStyles: true,
        theme: 'dark'
      }],
      [ 'jest-junit', {
        outputDirectory: './tests/reports',
        outputName: 'junit-report.xml',
      }],
      ['jest-stare', {
        resultDir: './tests/reports/jest-stare',
        reportTitle: 'Google Homepage Tests Report',
        additionalResults: 'jest-html-reporter'
      }],
      ['jest-allure', {
        outputDir: './tests/reports/allure',
      }]
    ],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };
  