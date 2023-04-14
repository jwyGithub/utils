import type { isFunction } from './type';

/**
 * @description 判断是否为WeakMap
 * @param value any
 * @returns boolean
 * @example
 * isWeakMap(new WeakMap()) // true
 * isWeakMap(new Map()) // false
 */
export const isWeakMap: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object WeakMap]';
};

