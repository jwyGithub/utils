import type { isFunction } from './type';

/**
 * @description 判断是否为Map
 * @param value any
 * @returns boolean
 */
export const isMap: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Map]';
};

