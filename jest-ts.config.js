module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: "\.(test|spec)\.ts$",
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig-ts.json',
    }
  },
};