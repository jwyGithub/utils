import type { isFunction } from './type';

/**
 * @description 判断是否为WeakSet
 * @param value any
 * @returns boolean
 * @example
 * isWeakSet(new WeakSet()) // true
 * isWeakSet(new Set()) // false
 */
export const isWeakSet: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object WeakSet]';
};

