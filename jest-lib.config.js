module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ["mjs", "js"],
  // extensionsToTreatAsEsm: ['.mjs'],
  testEnvironment: 'node',
  testRegex: [
    // "/__tests__/\\.test\\.[jt]sx?$",
    "\.(test|spec)\.mjs$"
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig-lib.json',
      useESM: true,
    }
  },
};