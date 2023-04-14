import type { isFunction } from './type';

/**
 * @description 判断是否为Set
 * @param value any
 * @returns boolean
 * @example
 * isSet(new Set()) // true
 * isSet(new Set([1, 2, 3])) // true
 * isSet(new Set().add(1)) // true
 */
export const isSet: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Set]';
};

