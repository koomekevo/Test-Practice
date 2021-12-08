const reverseString = require('./reverseString');

it('returns a the reverse string', () => {
  expect(reverseString('test')).toBe('tset')
});