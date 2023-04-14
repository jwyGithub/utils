import type { isFunction } from './type';

/**
 * @description 判断是否为正则表达式
 * @param value any
 * @returns boolean
 * @example
 * isRegExp(/a/) // true
 * isRegExp(new RegExp('a')) // true
 * isRegExp(new RegExp('a', 'g')) // true
 */
export const isRegExp: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object RegExp]';
};

