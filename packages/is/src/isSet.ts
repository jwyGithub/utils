import type { isFunction } from './type';

/**
 * @description 判断是否为Set
 * @param value any
 * @returns boolean
 */
export const isSet: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Set]';
};

