import type { isFunction } from './type';

/**
 * @description 判断是否为安全整数
 * @param value any
 * @returns boolean
 * @example
 * isSafeInteger(1) // true
 * isSafeInteger(1.1) // false
 * isSafeInteger('1') // false
 * isSafeInteger(null) // false
 * isSafeInteger(9007199254740991) // true
 * isSafeInteger(9007199254740992) // false
 */
export const isSafeInteger: isFunction = value => {
    return Number.isSafeInteger(value);
};

