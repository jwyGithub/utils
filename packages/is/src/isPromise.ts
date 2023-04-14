import type { isFunction } from './type';

/**
 * @description 判断是否为Promise
 * @param value any
 * @returns boolean
 */
export const isPromise: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Promise]';
};

