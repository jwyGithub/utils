import type { isFunction } from './type';

/**
 * @description 判断是否为Symbol
 * @param value any
 * @returns boolean
 */
export const isSymbol: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Symbol]';
};

