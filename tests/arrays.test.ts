import * as tinyvalid from '../src/tinyvalid';

test('isArray', () => {
    expect(tinyvalid.isArray([])).toBe(true);
    expect(tinyvalid.isArray([1, 2, 3, [4, 5], 6])).toBe(true);
    expect(tinyvalid.isArray({})).toBe(false);
    expect(tinyvalid.isArray('')).toBe(false);
    expect(tinyvalid.isArray(false)).toBe(false);
    expect(tinyvalid.isArray(new Date())).toBe(false);
    expect(tinyvalid.isArray(45)).toBe(false);
});

test('isArrayOf', () => {
    expect(tinyvalid.isArrayOf([], tinyvalid.isString)).toBe(true);
    expect(tinyvalid.isArrayOf<string[]>(['', 'hello', 'world', '!'], tinyvalid.isString)).toBe(true);
    expect(tinyvalid.isArrayOf(['hello', 'mr', 5], tinyvalid.isString)).toBe(false);
    expect(tinyvalid.isArrayOf<number[]>([2, 4, 6], tinyvalid.isInt)).toBe(true);
    expect(tinyvalid.isArrayOf([false, true, 1], tinyvalid.isBool)).toBe(false);
    expect(tinyvalid.isArrayOf({}, tinyvalid.isString)).toBe(false);
});

test('isNotEmptyArray', () => {
    expect(tinyvalid.isNotEmptyArray([])).toBe(false);
    expect(tinyvalid.isNotEmptyArray(['', 'hello', 'world', '!'])).toBe(true);
    expect(tinyvalid.isNotEmptyArray('test')).toBe(false);
    expect(tinyvalid.isNotEmptyArray(215)).toBe(false);
    expect(tinyvalid.isNotEmptyArray({ property: 'test' })).toBe(false);
});