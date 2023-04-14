import type { isFunction } from './type';

/**
 * @description 判断是否为布尔值
 * @param value any
 * @returns boolean
 * @example
 * isBoolean(true) // true
 * isBoolean(false) // true
 * isBoolean(new Boolean(true)) // true
 * isBoolean(new Boolean(false)) // true
 * isBoolean(Boolean(true)) // true
 * isBoolean(Boolean(false)) // true
 */
export const isBoolean: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Boolean]';
};

