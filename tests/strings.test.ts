import * as tinyvalid from '../src/tinyvalid';

test('isEmptyString', () => {
    expect(tinyvalid.isEmptyString('  ', true)).toBe(true);
    expect(tinyvalid.isEmptyString('  ', false)).toBe(false);
    expect(tinyvalid.isEmptyString(24)).toBe(false);
});

test('isString', () => {
    expect(tinyvalid.isString('')).toBe(true);
    expect(tinyvalid.isString(0)).toBe(false);
    expect(tinyvalid.isString(true)).toBe(false);
    expect(tinyvalid.isString({})).toBe(false);
    expect(tinyvalid.isString('asd')).toBe(true);
});