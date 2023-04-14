import type { isFunction as isFunctionType } from './type';

/**
 * @description 判断是否为函数
 * @param value any
 * @returns boolean
 * @example
 * isFunction(() => {}); // true
 * isFunction(function () {}); // true
 * isFunction(async () => {}); // false
 * isFunction(function* () {}); // false
 * isFunction(async function () {}); // false
 * isFunction(async function* () {}); // false
 * isFunction(new Function()); // false
 * isFunction(new Promise(() => {})); // false
 */
export const isFunction: isFunctionType = value => {
    return Object.prototype.toString.call(value) === '[object Function]';
};

