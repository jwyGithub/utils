import type { isFunction } from './type';

/**
 * @description 判断是否为整数
 * @param value any
 * @returns boolean
 * @example
 * isInteger(1) // true
 * isInteger(1.1) // false
 * isInteger('1') // false
 * isInteger(null) // false
 */
export const isInteger: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Number]' && Number.isInteger(value);
};

