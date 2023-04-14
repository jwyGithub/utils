import type { isFunction as isFunctionType } from './type';

/**
 * @description 判断是否为function
 * @param value any
 * @returns boolean
 */
export const isFunction: isFunctionType = value => {
    return Object.prototype.toString.call(value) === '[object Function]';
};

