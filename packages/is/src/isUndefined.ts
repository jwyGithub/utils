import type { isFunction } from './type';

/**
 * @description 判断是否为undefined
 * @param value any
 * @returns boolean
 * @example
 * isUndefined(undefined) // true
 * isUndefined(null) // false
 * isUndefined('') // false
 * isUndefined(0) // false
 * isUndefined(false) // false
 */
export const isUndefined: isFunction = value => {
    return typeof value === 'undefined';
};

