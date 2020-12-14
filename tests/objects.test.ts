import * as tinyvalid from '../src/tinyvalid';

test('isObject', () => {
    expect(tinyvalid.isObject({})).toBe(true);
    expect(tinyvalid.isObject(new Date())).toBe(true);
    expect(tinyvalid.isObject(new Array())).toBe(false);
    expect(tinyvalid.isObject([])).toBe(false);
    expect(tinyvalid.isObject(false)).toBe(false);
    expect(tinyvalid.isObject('')).toBe(false);
    expect(tinyvalid.isObject(12)).toBe(false);
    expect(tinyvalid.isObject(NaN)).toBe(false);
    expect(tinyvalid.isObject(null)).toBe(false);
    expect(tinyvalid.isObject(undefined)).toBe(false);
});