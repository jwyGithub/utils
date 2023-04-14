import type { isFunction } from './type';

/**
 * @description 判断是否为字符串
 * @param value any
 * @returns boolean
 * @example
 * isString('1'); // true
 * isString(1); // false
 * isString(new String('1')); // true
 * isString({}); // false
 * isString(null); // false
 */
export const isString: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object String]';
};

