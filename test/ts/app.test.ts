import doApp  from '../../src/index';

describe('ts/app tests', () => {
  describe('simple test', () => {
    test('hello world test', () => {
      const actual = doApp();
      expect(actual).toBe('hello world')
    })
  })
})