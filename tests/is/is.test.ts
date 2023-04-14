import { assert, expect, test } from 'vitest';

import {
    isArray,
    isArrowFunction,
    isAsyncFunction,
    isBoolean,
    isDate,
    isError,
    isFunction,
    isGeneratorFunction,
    isMap,
    isNull,
    isNumber,
    isObject,
    isPromise,
    isRegExp,
    isSet,
    isString,
    isSymbol,
    isUndefined,
    isWeakMap,
    isWeakSet
} from '../../packages/is/src/index';

// js 所有数据类型值集合

test('isString', () => {
    expect(isString('1')).toBe(true);
    expect(isString(1)).toBe(false);
    // eslint-disable-next-line no-new-wrappers
    expect(isString(new String('1'))).toBe(true);
    expect(isString({})).toBe(false);
    expect(isString(null)).toBe(false);
});

test('isArray', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    // eslint-disable-next-line no-array-constructor
    expect(isArray(new Array())).toBe(true);
    // eslint-disable-next-line no-array-constructor
    expect(isArray(new Array(1, 2, 3))).toBe(true);
    expect(isArray(new Array(3))).toBe(true);
    expect(isArray(Array.prototype)).toBe(true);
    expect(isArray({ __proto__: Array.prototype })).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(null)).toBe(false);
});

test('isDate', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate('xxx')).toBe(false);
    expect(isDate(1)).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(NaN)).toBe(false);
});

test('isNull', () => {
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull('1')).toBe(false);
});

test('isNumber', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber('xxx')).toBe(false);
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(Infinity)).toBe(false);
    expect(isNumber(-Infinity)).toBe(false);
});

test('isObject', () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    // eslint-disable-next-line no-new-object
    expect(isObject(new Object())).toBe(true);
    expect(isObject(Object.create({}))).toBe(true);
});

test('isBoolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean('xxx')).toBe(false);
});

test('isUndefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined('xxx')).toBe(false);
});

test('isError', () => {
    expect(isError(new Error('xxx'))).toBe(true);
    expect(isError('xxx')).toBe(false);
});

test('isRegExp', () => {
    expect(isRegExp(/xxx/)).toBe(true);
    expect(isRegExp('xxx')).toBe(false);
});

test('isSymbol', () => {
    expect(isSymbol(Symbol('xxx'))).toBe(true);
    expect(isSymbol('xxx')).toBe(false);
});

test('isMap', () => {
    expect(isMap(new Map())).toBe(true);
    expect(isMap('xxx')).toBe(false);
});

test('isSet', () => {
    expect(isSet(new Set())).toBe(true);
    expect(isSet('xxx')).toBe(false);
});

test('isWeakMap', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
    expect(isWeakMap('xxx')).toBe(false);
});

test('isWeakSet', () => {
    expect(isWeakSet(new WeakSet())).toBe(true);
    expect(isWeakSet('xxx')).toBe(false);
});

test('isPromise', () => {
    expect(isPromise(Promise.resolve())).toBe(true);
    expect(isPromise('xxx')).toBe(false);
});

test('isGeneratorFunction', () => {
    expect(
        isGeneratorFunction(function* () {
            return;
        })
    ).toBe(true);
    expect(isGeneratorFunction('xxx')).toBe(false);
});

test('isAsyncFunction', () => {
    expect(
        isAsyncFunction(async function () {
            return;
        })
    ).toBe(true);
    expect(isAsyncFunction('xxx')).toBe(false);
});

test('isArrowFunction', () => {
    expect(isArrowFunction(() => {})).toBe(true);
    expect(isArrowFunction('xxx')).toBe(false);
});

test('isFunction', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction('xxx')).toBe(false);
});

