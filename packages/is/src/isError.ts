import type { isFunction } from './type';

/**
 * @description 判断是否为Error
 * @param value any
 * @returns boolean
 */
export const isError: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Error]';
};

