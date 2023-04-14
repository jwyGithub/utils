import type { isFunction } from './type';

/**
 * @description 判断是否为Symbol
 * @param value any
 * @returns boolean
 * @example
 * isSymbol(Symbol('a')) // true
 * isSymbol(Symbol(1)) // true
 * isSymbol(Symbol()) // true
 */
export const isSymbol: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object Symbol]';
};

