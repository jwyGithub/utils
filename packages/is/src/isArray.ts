import type { isFunction } from './type';

/**
 * @description 判断是否为数组
 * @param value any
 * @returns boolean
 * @example
 * isArray([]) // true
 * isArray([1, 2, 3]) // true
 * isArray(new Array()) // true
 * isArray(new Array(1, 2, 3)) // true
 * isArray(new Array(3)) // true
 * isArray(Array.prototype) // true
 * isArray({ __proto__: Array.prototype }) // false
 * isArray({}) // false
 * isArray(null) // false
 */
export const isArray: isFunction = value => {
    return Array.isArray(value);
};

