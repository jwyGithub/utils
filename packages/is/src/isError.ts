import type { isFunction } from './type';

/**
 * @description 判断是否为Error
 * @param value any
 * @returns boolean
 * @example
 * isError(new Error()) // true
 * isError(new TypeError()) // true
 * isError(new SyntaxError()) // true
 * isError(new ReferenceError()) // true
 * isError(new RangeError()) // true
 * isError(new EvalError()) // true
 * isError(new URIError()) // true
 * isError(new Error('error')) // true
 * isError(new TypeError('type error')) // true
 * isError(new SyntaxError('syntax error')) // true
 * isError(new ReferenceError('reference error')) // true
 * isError(new RangeError('range error')) // true
 * isError(new EvalError('eval error')) // true
 * isError(new URIError('uri error')) // true
 */
export const isError: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Error]';
};

