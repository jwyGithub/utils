import type { isFunction } from './type';

/**
 * @description 判断是否为boolean
 * @param value any
 * @returns boolean
 */
export const isBoolean: isFunction = value => {
    return typeof value === 'boolean';
};

