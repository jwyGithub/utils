import type { isFunction } from './type';

/**
 * @description 判断是否为Map
 * @param value any
 * @returns boolean
 * @example
 * isMap(new Map()) // true
 * isMap(new WeakMap()) // false
 */
export const isMap: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Map]';
};

