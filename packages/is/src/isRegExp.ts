import type { isFunction } from './type';

/**
 * @description 判断是否为RegExp
 * @param value any
 * @returns boolean
 */
export const isRegExp: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object RegExp]';
};

