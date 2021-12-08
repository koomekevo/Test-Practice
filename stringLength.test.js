const stringLength = require('./stringLength');

it('returns a number', () => {
  expect(stringLength('test')).toBe(4)
});

it('throws error if empty string is given', () => {
  expect(() => stringLength('')).toThrow(Error)
});

it('throws error if a string of more than 10 characters is given', () => {
  expect(() => stringLength('Incomprehensibilities')).toThrow(Error)
});