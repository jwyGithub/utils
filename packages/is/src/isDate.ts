import type { isFunction } from './type';

/**
 * @description 判断是否为日期
 * @param value any
 * @returns boolean
 * @example
 * isDate(new Date()) // true
 * isDate('xxx') // false
 * isDate(1) // false
 * isDate({}) // false
 * isDate(null) // false
 * isDate(undefined) // false
 * isDate(NaN) // false
 */
export const isDate: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Date]';
};

