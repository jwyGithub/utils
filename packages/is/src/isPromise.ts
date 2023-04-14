import type { isFunction } from './type';

/**
 * @description 判断是否为Promise
 * @param value any
 * @returns boolean
 * @example
 * isPromise(Promise.resolve(1)) // true
 * isPromise(Promise.reject(1)) // true
 * isPromise(new Promise(() => {})) // true
 * isPromise({}) // false
 */
export const isPromise: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Promise]';
};

