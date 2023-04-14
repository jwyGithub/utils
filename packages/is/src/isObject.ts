import type { isFunction } from './type';

/**
 * @description 判断是否为对象
 * @param value any
 * @returns boolean
 * @example
 * isObject({}) // true
 * isObject([]) // false
 * isObject(null) // false
 * isObject(undefined) // false
 * isObject(new Object()) // true
 * isObject(Object.create(null)) // true
 */
export const isObject: isFunction = (value: any): boolean => {
    return Object.prototype.toString.call(value) === '[object Object]';
};

