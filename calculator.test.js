const calculator = require('./calculator');

describe('add', () => {
  test('add returns a number', () => {
    expect(calculator.add(1, 1)).toBe(2);
  })

  test('add can manage negative numbers', () => {
    expect(calculator.add(-5, -5)).toBe(-10);
  })

  test('add can manage negative and positive numbers', () => {
    expect(calculator.add(-5, 10)).toBe(5);
  })
})

describe('subtract', () => {
  test('subtract returns a number', () => {
    expect(calculator.subtract(3, 1)).toBe(2);
  })

  test('subtract can manage negative numbers', () => {
    expect(calculator.subtract(-5, -3)).toBe(-2);
  })

  test('subtract can manage negative and positive numbers', () => {
    expect(calculator.subtract(-5, 10)).toBe(-15);
  })
})

describe('divide', () => {
  test('divide returns a number', () => {
    expect(calculator.divide(10, 5)).toBe(2);
  })

  test('divide returns a decimal', () => {
    expect(calculator.divide(9, 5)).toBe(1.8);
  })

  test('divide can manage negative numbers', () => {
    expect(calculator.divide(-10, -5)).toBe(2);
  })

  test('divide can manage negative and positive numbers', () => {
    expect(calculator.divide(-10, 5)).toBe(-2);
  })
})

describe('multiply', () => {
  test('multiply returns a number', () => {
    expect(calculator.multiply(10, 5)).toBe(50);
  })

  test('multiply can manage negative numbers', () => {
    expect(calculator.multiply(-10, -5)).toBe(50);
  })

  test('multiply can manage negative and positive numbers', () => {
    expect(calculator.multiply(-10, 5)).toBe(-50);
  })
})