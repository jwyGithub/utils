import type { isFunction } from './type';

/**
 * @description 判断是否为Generator Function
 * @param value any
 * @returns boolean
 */

export const isGeneratorFunction: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object GeneratorFunction]';
};

