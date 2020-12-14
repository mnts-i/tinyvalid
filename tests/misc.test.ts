import * as tinyvalid from '../src/tinyvalid';

test('isDecimal', () => {
    expect(tinyvalid.isDecimal(null)).toBe(false);
    expect(tinyvalid.isDecimal(42)).toBe(false);
    expect(tinyvalid.isDecimal(0)).toBe(false);
    expect(tinyvalid.isDecimal(-52.1)).toBe(true);
    expect(tinyvalid.isDecimal(2.3333)).toBe(true);
    expect(tinyvalid.isDecimal(NaN)).toBe(false);
    expect(tinyvalid.isDecimal('2.425')).toBe(false);
    expect(tinyvalid.isDecimal('64')).toBe(false);
    expect(tinyvalid.isDecimal(Number.NEGATIVE_INFINITY)).toBe(false);
});

test('isNil', () => {
    expect(tinyvalid.isNil(null)).toBe(true);
    expect(tinyvalid.isNil(undefined)).toBe(true);
    expect(tinyvalid.isNil(NaN)).toBe(false);
    expect(tinyvalid.isNil({})).toBe(false);
    expect(tinyvalid.isNil([])).toBe(false);
    expect(tinyvalid.isNil(0)).toBe(false);
    expect(tinyvalid.isNil(false)).toBe(false);
    expect(tinyvalid.isNil('')).toBe(false);
});

test('isNull', () => {
    expect(tinyvalid.isNull(null)).toBe(true);
    expect(tinyvalid.isNull(undefined)).toBe(false);
    expect(tinyvalid.isNull(NaN)).toBe(false);
    expect(tinyvalid.isNull({})).toBe(false);
    expect(tinyvalid.isNull([])).toBe(false);
    expect(tinyvalid.isNull(0)).toBe(false);
    expect(tinyvalid.isNull(false)).toBe(false);
    expect(tinyvalid.isNull('')).toBe(false);
});

test('isEmpty', () => {
    expect(tinyvalid.isEmpty('')).toBe(true);
    expect(tinyvalid.isEmpty(undefined)).toBe(true);
    expect(tinyvalid.isEmpty(NaN)).toBe(false);
    expect(tinyvalid.isEmpty({})).toBe(true);
    expect(tinyvalid.isEmpty([])).toBe(true);
    expect(tinyvalid.isEmpty(0)).toBe(false);
    expect(tinyvalid.isEmpty(false)).toBe(false);
    expect(tinyvalid.isEmpty('')).toBe(true);
});

test('isNumber', () => {
    expect(tinyvalid.isNumber(0)).toBe(true);
    expect(tinyvalid.isNumber(24.5)).toBe(true);
    expect(tinyvalid.isNumber(-4)).toBe(true);
    expect(tinyvalid.isNumber(NaN)).toBe(false);
    expect(tinyvalid.isNumber('')).toBe(false);
    expect(tinyvalid.isNumber(true)).toBe(false);
    expect(tinyvalid.isNumber(false)).toBe(false);
    expect(tinyvalid.isNumber('')).toBe(false);
    expect(tinyvalid.isNumber([])).toBe(false);
    expect(tinyvalid.isNumber({})).toBe(false);
});

test('isFinite', () => {
    expect(tinyvalid.isFinite(1 / 0)).toBe(false);
    expect(tinyvalid.isFinite('')).toBe(false);
    expect(tinyvalid.isFinite(-4)).toBe(true);
    expect(tinyvalid.isFinite(NaN)).toBe(false);
    expect(tinyvalid.isFinite(0 / 0)).toBe(false);
    expect(tinyvalid.isFinite(true)).toBe(false);
    expect(tinyvalid.isFinite(14)).toBe(true);
    expect(tinyvalid.isFinite(0)).toBe(true);
    expect(tinyvalid.isFinite('42')).toBe(false);
});

test('isInteger', () => {
    expect(tinyvalid.isInt(0)).toBe(true);
    expect(tinyvalid.isInt(24.5)).toBe(false);
    expect(tinyvalid.isInt(4.0)).toBe(true);
    expect(tinyvalid.isInt(4.000000000001)).toBe(false);
    expect(tinyvalid.isInt(-4)).toBe(true);
    expect(tinyvalid.isInt(NaN)).toBe(false);
    expect(tinyvalid.isInt('')).toBe(false);
    expect(tinyvalid.isInt(true)).toBe(false);
    expect(tinyvalid.isInt(Number.POSITIVE_INFINITY)).toBe(false);
});

test('isBool', () => {
    expect(tinyvalid.isBool(true)).toBe(true);
    expect(tinyvalid.isBool(false)).toBe(true);
    expect(tinyvalid.isBool(1)).toBe(false);
    expect(tinyvalid.isBool(0)).toBe(false);
    expect(tinyvalid.isBool('')).toBe(false);
    expect(tinyvalid.isBool({})).toBe(false);
});

test('isFunc', () => {
    expect(tinyvalid.isFunc(() => {})).toBe(true);
    expect(tinyvalid.isFunc(tinyvalid.isString)).toBe(true);
    expect(tinyvalid.isFunc(Math.min)).toBe(true);
    expect(tinyvalid.isFunc(1)).toBe(false);
    expect(tinyvalid.isFunc('')).toBe(false);
    expect(tinyvalid.isFunc({})).toBe(false);
    expect(tinyvalid.isFunc([])).toBe(false);
    expect(tinyvalid.isFunc(null)).toBe(false);
    expect(tinyvalid.isFunc(undefined)).toBe(false);
    expect(tinyvalid.isFunc(new Date())).toBe(false);
});

test('isInfinite', () => {
    expect(tinyvalid.isInfinite(14)).toBe(false);
    expect(tinyvalid.isInfinite(Number.POSITIVE_INFINITY)).toBe(true);
    expect(tinyvalid.isInfinite(Number.NEGATIVE_INFINITY)).toBe(true);
    expect(tinyvalid.isInfinite(1 / 0)).toBe(true);
    expect(tinyvalid.isInfinite(-52 / 0)).toBe(true);
    expect(tinyvalid.isInfinite(0 / 0)).toBe(false);
    expect(tinyvalid.isInfinite('test')).toBe(false);
    expect(tinyvalid.isInfinite(NaN)).toBe(false);
    expect(tinyvalid.isInfinite(null)).toBe(false);
});

test('isUndefined', () => {
    expect(tinyvalid.isUndefined(undefined)).toBe(true);
    expect(tinyvalid.isUndefined(null)).toBe(false);
    expect(tinyvalid.isUndefined(() => {})).toBe(false);
    expect(tinyvalid.isUndefined(tinyvalid.isString)).toBe(false);
    expect(tinyvalid.isUndefined(0)).toBe(false);
    expect(tinyvalid.isUndefined('')).toBe(false);
    expect(tinyvalid.isUndefined({})).toBe(false);
    expect(tinyvalid.isUndefined([])).toBe(false);
    expect(tinyvalid.isUndefined(NaN)).toBe(false);
});