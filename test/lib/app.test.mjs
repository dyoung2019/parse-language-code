import doApp  from '../../lib/index.js';

describe('lib/app src tests', () => {
  describe('app test', () => {
    test('lib test', () => {
      const actual = doApp();
      expect(actual).toBe('hello world')
    })
  })
})