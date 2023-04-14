import type { isFunction } from './type';

/**
 * @description 判断是否为undefined
 * @param value any
 * @returns boolean
 */
export const isUndefined: isFunction = value => {
    return typeof value === 'undefined';
};

