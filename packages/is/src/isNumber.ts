import type { isFunction } from './type';

/**
 * @description 判断是否为数字
 * @param value any
 * @returns boolean
 * @example
 * isNumber(1); // true
 * isNumber(NaN); // false
 * isNumber(Infinity); // false
 * isNumber(-Infinity); // false
 * isNumber('1'); // false
 */
export const isNumber: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Number]' && !Number.isNaN(value) && Number.isFinite(value);
};

