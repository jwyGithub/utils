import { expect, test } from 'vitest';

import {
    isArray,
    isArrowFunction,
    isAsyncFunction,
    isBoolean,
    isDate,
    isError,
    isFunction,
    isGeneratorFunction,
    isInteger,
    isMap,
    isNull,
    isNumber,
    isObject,
    isPrimitive,
    isPromise,
    isRegExp,
    isSafeInteger,
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
    expect(isBoolean(false)).toBe(true);
    // eslint-disable-next-line no-new-wrappers
    expect(isBoolean(new Boolean(true))).toBe(true);
    // eslint-disable-next-line no-new-wrappers
    expect(isBoolean(new Boolean(false))).toBe(true);
    expect(isBoolean(Boolean(true))).toBe(true);
    expect(isBoolean(Boolean(false))).toBe(true);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(null)).toBe(false);
});

test('isUndefined', () => {
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined('')).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined(NaN)).toBe(false);
});

test('isError', () => {
    // eslint-disable-next-line unicorn/error-message
    expect(isError(new Error())).toBe(true);
    // eslint-disable-next-line unicorn/error-message
    expect(isError(new TypeError())).toBe(true);
    // eslint-disable-next-line unicorn/error-message
    expect(isError(new SyntaxError())).toBe(true);
    // eslint-disable-next-line unicorn/error-message
    expect(isError(new ReferenceError())).toBe(true);
    // eslint-disable-next-line unicorn/error-message
    expect(isError(new RangeError())).toBe(true);
    // eslint-disable-next-line unicorn/error-message
    expect(isError(new EvalError())).toBe(true);
    // eslint-disable-next-line unicorn/error-message
    expect(isError(new URIError())).toBe(true);
    expect(isError(new Error('error'))).toBe(true);
    expect(isError(new TypeError('type error'))).toBe(true);
    expect(isError(new SyntaxError('syntax error'))).toBe(true);
    expect(isError(new ReferenceError('reference error'))).toBe(true);
    expect(isError(new RangeError('range error'))).toBe(true);
    expect(isError(new EvalError('eval error'))).toBe(true);
    expect(isError(new URIError('uri error'))).toBe(true);
    expect(isError('xxx')).toBe(false);
});

test('isRegExp', () => {
    expect(isRegExp(/a/)).toBe(true);
    expect(isRegExp(new RegExp('a'))).toBe(true);
    expect(isRegExp(new RegExp('a', 'g'))).toBe(true);
    expect(isRegExp('xxx')).toBe(false);
});

test('isSymbol', () => {
    expect(isSymbol(Symbol('a'))).toBe(true);
    expect(isSymbol(Symbol(1))).toBe(true);
    expect(isSymbol(Symbol())).toBe(true);
});

test('isMap', () => {
    expect(isMap(new Map())).toBe(true);
    expect(isMap(new WeakMap())).toBe(false);
});

test('isSet', () => {
    expect(isSet(new Set())).toBe(true);
    expect(isSet(new WeakSet())).toBe(false);
    expect(isSet(new Set([1, 2, 3]))).toBe(true);
    expect(isSet(new Set().add(1))).toBe(true);
});

test('isWeakMap', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
    expect(isWeakMap(new Map())).toBe(false);
});

test('isWeakSet', () => {
    expect(isWeakSet(new WeakSet())).toBe(true);
    expect(isWeakSet(new Set())).toBe(false);
});

test('isPromise', () => {
    expect(isPromise(Promise.resolve(1))).toBe(true);
    expect(isPromise(new Promise(() => {}))).toBe(true);
    expect(isPromise({})).toBe(false);
});

test('isGeneratorFunction', () => {
    // eslint-disable-next-line no-empty-function
    expect(isGeneratorFunction(function* () {})).toBe(true);
    expect(
        isGeneratorFunction(function* () {
            yield 1;
        })
    ).toBe(true);
    expect(isGeneratorFunction(function () {})).toBe(false);
    expect(isGeneratorFunction(() => {})).toBe(false);
    expect(isGeneratorFunction('xxx')).toBe(false);
});

test('isAsyncFunction', () => {
    expect(isAsyncFunction(async () => {})).toBe(true);
    expect(isAsyncFunction(() => {})).toBe(false);
    expect(isAsyncFunction(function () {})).toBe(false);
    // eslint-disable-next-line no-empty-function
    expect(isAsyncFunction(function* () {})).toBe(false);
    // eslint-disable-next-line no-empty-function
    expect(isAsyncFunction(async function () {})).toBe(true);
    // eslint-disable-next-line no-empty-function
    expect(isAsyncFunction(async function* () {})).toBe(false);
    // eslint-disable-next-line no-new-func
    expect(isAsyncFunction(new Function())).toBe(false);
});

test('isArrowFunction', () => {
    expect(isArrowFunction(() => {})).toBe(true);
    expect(isArrowFunction(function () {})).toBe(false);
    expect(isArrowFunction(async () => {})).toBe(false);
    // eslint-disable-next-line no-empty-function
    expect(isArrowFunction(function* () {})).toBe(false);
    // eslint-disable-next-line no-empty-function
    expect(isArrowFunction(async function () {})).toBe(false);
    // eslint-disable-next-line no-empty-function
    expect(isArrowFunction(async function* () {})).toBe(false);
    // eslint-disable-next-line no-new-func
    expect(isArrowFunction(new Function())).toBe(false);
});

test('isFunction', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction(async () => {})).toBe(false);
    // eslint-disable-next-line no-empty-function
    expect(isFunction(function* () {})).toBe(false);
    // eslint-disable-next-line no-empty-function
    expect(isFunction(async function () {})).toBe(false);

    // eslint-disable-next-line no-empty-function
    expect(isFunction(async function* () {})).toBe(false);
    // eslint-disable-next-line no-new-func
    expect(isFunction(new Function())).toBe(true);
    expect(isFunction(new Promise(() => {}))).toBe(false);
});

test('isPrimitive', () => {
    expect(isPrimitive('')).toBe(true);
    expect(isPrimitive(0)).toBe(true);
    expect(isPrimitive(false)).toBe(true);
    expect(isPrimitive(Symbol())).toBe(true);
    expect(isPrimitive(BigInt(0))).toBe(true);
    expect(isPrimitive(null)).toBe(true);
    expect(isPrimitive(undefined)).toBe(true);
    expect(isPrimitive({})).toBe(false);
    expect(isPrimitive([])).toBe(false);
});

test('isInteger', () => {
    expect(isInteger(1)).toBe(true);
    expect(isInteger(1.1)).toBe(false);
    expect(isInteger('1')).toBe(false);
    expect(isInteger(null)).toBe(false);
});

test('isSafeInteger', () => {
    expect(isSafeInteger(1)).toBe(true);
    expect(isSafeInteger(1.1)).toBe(false);
    expect(isSafeInteger('1')).toBe(false);
    expect(isSafeInteger(null)).toBe(false);
    expect(isSafeInteger(9007199254740991)).toBe(true);
    expect(isSafeInteger(9007199254740992)).toBe(false);
});

