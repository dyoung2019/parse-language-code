module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: "\.(test|spec)\.ts$",
  modulePathIgnorePatterns: [
    "./test/bundle",
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig-ts.json',
    }
  },
};