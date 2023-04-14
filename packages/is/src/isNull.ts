import type { isFunction } from './type';

/**
 * @description 判断是否为null
 * @param value any
 * @returns boolean
 * @example
 * isNull(null); // true
 * isNull(undefined); // false
 * isNull(1); // false
 * isNull('1'); // false
 */
export const isNull: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Null]';
};

